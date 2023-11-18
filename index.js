

require('dotenv').config()

const { getSessionJSON, getPlayerJSON, getFinalScoreJSON, getPlayerTableJSON, getUpperTableJSON, getBottomTableJSON } = require('./DatabaseElementToJSON')
const { possibleEntries_upperTable, possibleEntries_bottomTable } = require('./PossibleEntries')

const allowedOrigins 	= require('./config/allowedOrigins')
const cors 				= require('cors')
const corsOptions 		= {
	origin: allowedOrigins,
	credentials: true
}

const { v4 }			= require('uuid')
const express 			= require('express')
const http				= require('http')
const app 				= express()
const httpServer		= http.createServer(app)
const io				= require('socket.io')(httpServer, { cors: corsOptions })
const sendToken 		= require('./routes/SendToken')
const db 				= require('./models')
const cookieParser 		= require('cookie-parser')


app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))





const { Players, Users, Sessions, FinalScores, PlayerTable, UpperTable, BottomTable, TableArchive } = require('./models')
Users.hasMany(Sessions, { foreignKey: 'UserID' })
Sessions.belongsTo(Users, { foreignKey: 'UserID' })

Sessions.hasMany(FinalScores, { foreignKey: 'SessionID' })
FinalScores.belongsTo(Sessions, { foreignKey: 'SessionID' })

FinalScores.hasOne(TableArchive, { foreignKey: 'FinalScoresID' })
TableArchive.belongsTo(FinalScores, { foreignKey: 'FinalScoresID'})

Sessions.hasMany(Players, { foreignKey: 'SessionID' })
Players.belongsTo(Sessions, { foreignKey: 'SessionID' })

Sessions.hasMany(PlayerTable, { foreignKey: 'SessionID' })
PlayerTable.belongsTo(Sessions, { foreignKey: 'SessionID' })

Sessions.hasMany(UpperTable, { foreignKey: 'SessionID' })
UpperTable.belongsTo(Sessions, { foreignKey: 'SessionID' })

Sessions.hasMany(BottomTable, { foreignKey: 'SessionID' })
BottomTable.belongsTo(Sessions, { foreignKey: 'SessionID' })





// __________________________________________________Socket.io__________________________________________________

function getJoinCode(socket) {
	return socket.handshake.auth.joincode
}

function isInt(v) {		return typeof v === 'number'	}
function isArray(v) {	return Array.isArray(v)			}
function isString(v) {	return typeof v === 'string'	}
function isBoolean(v) {	return typeof v === 'boolean'	}

io.on('connection', (socket) => {

	socket.on('JoinSession', () => {
		
		const JoinCode = +getJoinCode(socket)
		if(isInt(JoinCode)) socket.join(JoinCode)
		console.log('Connect', JoinCode)

	})



	socket.on('UpdateGnadenwurf', async (data) => {

		const JoinCode = +getJoinCode(socket)

		let Data = 'Error'

		if(data.Valid) 
		await PlayerTable.update({ Gnadenwürfe: data }, { where: { JoinCode } }).then((l) => {
			if(l[0] !== 0) Data = data
		}).catch((err) => {
			console.log(err)
		})

		socket.to(JoinCode).emit('UpdateGnadenwurf', { Data })

	})



	socket.on('UpdateValue', async (data) => {

		const JoinCode = +getJoinCode(socket)
		const Alias = data.Alias
		const Column = data.Column
		const Row = data.Row
		const isUpperTable = data.UpperTable
		
		let Data = 'Error'
		
		if(isInt(JoinCode) && isString(Alias) && isInt(Column) && isInt(Row) && isBoolean(isUpperTable)) {

			let value
			if(+data.Value) {
				value = +data.Value
			} else {
				value = null
			}

			const updateJSON = { [Row]: value }
			const json = { JoinCode, Alias, Column }

			const d = { Alias, Column, Row, Value: value, UpperTable: isUpperTable }

			if(isUpperTable) {

				if(possibleEntries_upperTable[Row].includes(value) || value === null)
				await UpperTable.update(updateJSON, { where: json }).then((l) => {
					if(l[0] !== 0) {
						Data = d
					}
				}).then((err) => {
					console.log(err)
				})

			} else {
				
				if(possibleEntries_bottomTable[Row].includes(value) || value === null)
				await BottomTable.update(updateJSON, { where: json }).then((l) =>{
					if(l[0] !== 0) {
						Data = d
					}
				}).then((err) => {
					console.log(err)
				})

			}
			
		}

		socket.to(JoinCode).emit('UpdateValueResponse', { Data })

	})

})





// __________________________________________________Routers__________________________________________________

app.use('/auth', require('./routes/Auth'))
app.use('/refreshtoken', require('./routes/RefreshToken'))
app.use('/logout', require('./routes/Logout'))

app.get('/joingame', (req, res) => {

	const JoinCode = +req.query.joincode

	if(!JoinCode) return res.sendStatus(400)

	Sessions.findOne({ where: { JoinCode }, include: [ Players, PlayerTable, UpperTable, BottomTable] }).then((s) => {

		if(!s) return res.sendStatus(404)

		const tableColumns = []
		for(const ut of s.UpperTables) {	tableColumns.push(getUpperTableJSON(ut))	}
		for(const bt of s.BottomTables) {	tableColumns.push(getBottomTableJSON(bt))	}

		const gnadenwürfe = getPlayerTableJSON(s.PlayerTables[0])

		const list_players = []
		for(const p of s.Players) {
			list_players.push(getPlayerJSON(p))
		}
		const session = getSessionJSON(s, list_players)

		res.json({
			Session: session,
			Gnadenwürfe: gnadenwürfe,
			TableColumns: tableColumns,
		})

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})





//use middleware to auth user
const verifyJWT = require('./middleware/verifyJWT')
const bcrypt = require('bcrypt')
app.use(verifyJWT)





async function createNewGame(date, UserID, List_Players, SessionID, Columns, JoinCode) {

	const gnadenwürfe = {}
	const array_columns = Array.from({ length: Columns }, (_, index) => index)

	for(const p of List_Players) {
		gnadenwürfe[p.Alias] = false

		for(const column of array_columns) {

			const json = { UserID: UserID, Alias: p.Alias, Column: column, JoinCode: JoinCode, SessionID: SessionID }
			UpperTable.create(json)
			BottomTable.create(json)

		}

	}

	await PlayerTable.create({ 
		UserID: UserID, 
		JoinCode: JoinCode, 
		Start: date, 
		Gnadenwürfe: gnadenwürfe, 
		SessionID: SessionID, 
	})

}

async function destroyGame(SessionID, UserID) {

	try {

		const json = { JoinCode: null }
		await Sessions.update(json, { where: { UserID, id: SessionID } })

		const findJSON = { UserID, SessionID }
		await PlayerTable.destroy({ where: findJSON })
		await UpperTable.destroy({ where: findJSON })
		await BottomTable.destroy({ where: findJSON })

		return 204

	} catch (err) {
		console.log(err)
		return 500
	}

}

function generateJoinCode() {

	const length = 8
	const min = Math.pow(10, length - 1)
	const max = Math.pow(10, length) - 1
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
	return randomNumber

}





app.get('/creategame', (req, res) => {
	res.sendStatus(200)
})





app.get('/enternames', (req, res) => {
	res.sendStatus(200)
})

app.post('/enternames', async (req, res) => {

	const date = new Date()
	const joincode = generateJoinCode()
	const UserID = req.id
	const { SessionName, Columns, List_Players } = req.body

	if(!isString(SessionName) || !isInt(Columns) || !isArray(List_Players)) return res.sendStatus(400)

	const List_PlayerOrder = []
	const list = []
	for(const p of List_Players) {

		//TODO Check if name is valid
		if(!p.Name || !p.Color) return res.sendStatus(400)

		const Alias = v4()
		List_PlayerOrder.push(Alias)
		list.push({ 
			UserID, 
			Alias,
			Name: p.Name,
			Color: p.Color,
			Wins: 0,
		})

	}
	

	//____________________AddNewSession____________________

	Sessions.create({
		UserID: UserID, 
		JoinCode: joincode,
		CreatedDate: date,
		LastPlayed: date, 
		InputType: 'type',
		SessionName,
		Columns, 
		List_PlayerOrder,
	}).then(async (s) => {

		for(const p of list) {await Players.create({ ...p, SessionID: s.id })}
		await createNewGame(date, UserID, list, s.id, Columns, joincode)

		res.json({ SessionID: s.id, JoinCode: joincode })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})





app.get('/game', (req, res) => {

	const UserID = req.id
	const SessionID = +req.query.sessionid
	const JoinCode = +req.query.joincode
	if(!SessionID || !JoinCode) return res.sendStatus(400)

	Sessions.findOne({ where: { id: SessionID, UserID, JoinCode }, include: [ Players, PlayerTable, UpperTable, BottomTable] }).then((s) => {

		if(!s) return res.sendStatus(404)

		const TableColumns = []
		for(const ut of s.UpperTables) {	TableColumns.push(getUpperTableJSON(ut))	}
		for(const bt of s.BottomTables) {	TableColumns.push(getBottomTableJSON(bt))	}

		const Gnadenwürfe = getPlayerTableJSON(s.PlayerTables[0])

		const list_players = []
		for(const p of s.Players) {
			list_players.push(getPlayerJSON(p))
		}
		const Session = getSessionJSON(s, list_players)

		res.json({
			Session,
			Gnadenwürfe,
			TableColumns,
		})

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})

app.post('/game', async (req, res) => {

	const rb = req.body
	const UserID = req.id
	const SessionID = rb.id
	const JoinCode = rb.JoinCode
	
	if(!SessionID || !JoinCode) {return res.sendStatus(400)}

	const fs = rb.FinalScores
	const finalScores = {
		Columns: fs.Columns,
		Surrender: fs.Surrender,
		List_Winner: fs.List_Winner,
		PlayerScores: fs.PlayerScores,
	}
	const List_Players = rb.List_Players
	const date = new Date()
	const Attributes = { 
		SessionName: rb.SessionName,
		InputType: rb.InputType,
		LastPlayed: date,
		List_PlayerOrder: rb.List_PlayerOrder,
	}

	//____________________UpdateSession____________________

	Sessions.findOne({ where: { id: SessionID, UserID }, include: [ Players, UpperTable, BottomTable, PlayerTable ] }).then(async (s) => {

		await s.update(Attributes)

		for(const newP of List_Players) {
			for(const p of s.Players) {
				if(newP.id === p.id) {
					await p.update({
						Name: newP.Name,
						Color: newP.Color,
						Wins: newP.Wins,
					})
					break
				}
			}
		}

		const tableColumns = []
		for(const ut of s.UpperTables) {	tableColumns.push(getUpperTableJSON(ut))	}
		for(const bt of s.BottomTables) {	tableColumns.push(getBottomTableJSON(bt))	}

		FinalScores.create({ 
			UserID, 
			SessionID, 
			...finalScores, 
			Start: s.PlayerTables[0].Start, 
			End: date,
		}).then(async (f) => {

			await TableArchive.create({ UserID, SessionID, Table: tableColumns, FinalScoresID: f.id })
			destroyGame(SessionID, UserID)
			res.sendStatus(204)

		})


	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})

app.delete('/game', async (req, res) => {

	const UserID = req.id
	const SessionID = +req.query.SessionID

	if(!SessionID) return res.sendStatus(400)

	const status = await destroyGame(SessionID, UserID)
	res.sendStatus(status)

})





app.get('/endscreen', (req, res) => {

	const UserID = req.id
	const SessionID = +req.query.SessionID

	if(!SessionID) return res.sendStatus(400)

	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then((s) => {

		if(!s) return res.sendStatus(404)

		const players = []
		for(const p of s.Players) {
			players.push(getPlayerJSON(p))
		}

		const session = getSessionJSON(s, players)

		res.json(session)

	}).catch((err) => {
		console.log(err)
		res.sendStatus(404)
	})

})





app.get('/selectsession', async (req, res) => {

	Sessions.findAll({ where: { UserID: req.id }, include: Players }).then((s) => {

		const list = []

		for(const e of s) {
			const players = []
			for(const p of e.Players) {
				players.push(getPlayerJSON(p))
			}
			list.push(getSessionJSON(e, players))
		}

		res.json(list)

	}).catch(() => {
		res.sendStatus(500)
	})

})

app.delete('/selectsession', async (req, res) => {

	const UserID = req.id
	const SessionID = +req.query.id
	
	if(!SessionID) return res.sendStatus(400)

	try {

		const json = { UserID, SessionID }

		await TableArchive.destroy({ where: json })

		await PlayerTable.destroy({ where: json })
		await UpperTable.destroy({ where: json })
		await BottomTable.destroy({ where: json })

		await Players.destroy({ where: json })
		await FinalScores.destroy({ where: json })

		await Sessions.destroy({ where: { UserID, id: SessionID } })

		res.sendStatus(204)

	} catch {
		res.sendStatus(500)
	}

})





app.get('/sessionpreview', async (req, res) => {

	const UserID = req.id
	const SessionID = +req.query.id
	if(!SessionID) return res.sendStatus(400)

	Sessions.findOne({ where: { id: SessionID, UserID }, include: [ Players, FinalScores ] }).then((s) => {

		if(!s) return res.sendStatus(404)

		const players = []
		for(const p of s.Players) {
			players.push(getPlayerJSON(p))
		}

		const Session = getSessionJSON(s, players)

		const finalScores = []
		for(const f of s.FinalScores) {
			finalScores.push(getFinalScoreJSON(f))
		}

		res.json({ Session, FinalScores: finalScores })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})

app.post('/sessionpreview', async (req, res) => {

	const UserID = req.id
	const JoinCode = generateJoinCode()
	const SessionID = +req.body.SessionID

	if(!SessionID) return res.sendStatus(400)

	await destroyGame(SessionID, UserID)
	
	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then(async (s) => {

		if(!s) return res.sendStatus(404)

		await s.update({ JoinCode })
		await createNewGame(new Date(), UserID, s.Players, SessionID, s.Columns, JoinCode)
		res.json({ JoinCode })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})





app.post('/changecredentials', async (req, res) => {

	const UserID = req.id
	const { Name, Password } = req.body

	//TODO Check credentials 
	const tmp = await Users.findOne({ where: { Name } })
	if(tmp) return res.sendStatus(409)

	let hashedPassword
	if(Password) hashedPassword = await bcrypt.hash(Password, 10).then((hP) => {return hP})

	Users.findOne({ where: { id: UserID }}).then(async (user) => {
		await user.update({ Name, Password: hashedPassword }).then(() => {
			sendToken(res, user)
		}).catch(() => {
			res.sendStatus(500)
		})
	}).catch(() => {
		res.sendStatus(403)
	})

})

app.post('/updatesession', (req, res) => {

	const { id, Columns, List_Players } = req.body
	const UserID = req.id

	//TODO Check validity of columns(if sent) and list_players
	if(!List_Players) return res.sendStatus(400)

	const List_PlayerOrder = List_Players.map((p) => p.Alias)
	const updatedSession = { List_PlayerOrder }
	if(Columns) updatedSession['Columns'] = +Columns

	Sessions.findOne({ where: { id, UserID }, include: Players }).then(async (s) => {

		if(!s) return res.sendStatus(404)

		await s.update(updatedSession)

		for(const tmp of List_Players) {
			for(const p of s.Players) {
				if(tmp.Alias === p.Alias) {

					await p.update({
						Name: tmp.Name,
						Color: tmp.Color,
					})
					break

				}
			}
		}

		res.sendStatus(204)

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})





//handling page not found (404)
app.all('*', (req, res) => {
	res.sendStatus(404)
})





db.sequelize.sync().then(() => {
    httpServer.listen(process.env.PORT || 10001, () => { console.log('Listening') })
})
