

require('dotenv').config()

const { getSessionJSON, getPlayerJSON, getFinalScoreJSON, getPlayerTableJSON, getUpperTableJSON, getBottomTableJSON, getTableJSON } = require('./DatabaseElementToJSON')
const { isInt, isArray, isBoolean, isString, isColor } = require('./IsDataType')
const { possibleEntries_upperTable, possibleEntries_bottomTable } = require('./PossibleEntries')
const { NAME_REGEX, PASSWORD_REGEX, MAX_PLAYERS, MAX_COLUMNS } = require('./utils')

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

io.on('connection', (socket) => {

	socket.on('JoinSession', () => {
		
		const JoinCode = +getJoinCode(socket)
		if(isInt(JoinCode)) socket.join(JoinCode)

		socket.emit('SuccessfullyJoinedSession', {})

	})



	socket.on('RefreshGame',  () => {

		const JoinCode = +getJoinCode(socket)
		if(!isInt(JoinCode)) return

		socket.to(JoinCode).emit('RefreshGame', '')

	})



	socket.on('EndGame', () => {

		const JoinCode = +getJoinCode(socket)
		if(!isInt(JoinCode)) return

		socket.to(JoinCode).emit('EndGame', '')

	})



	socket.on('UpdateGnadenwurf', async (data) => {

		const JoinCode = +getJoinCode(socket)

		let Data = 'Error'

		if(data.Valid) 
		await PlayerTable.update({ Gnadenwürfe: data }, { where: { JoinCode } }).then((l) => {
			if(l[0] !== 0) Data = data
		}).catch((err) => {
			return console.log('SOCKETIO UpdateGnadenwurf', err)
		})

		socket.to(JoinCode).emit('UpdateGnadenwurf', { Data })

	})



	socket.on('UpdateValue', async ( data, callback ) => {

		const JoinCode = +getJoinCode(socket)
		const Alias = data.Alias
		const Column = data.Column
		const Row = data.Row
		const isUpperTable = data.UpperTable
		
		let Data = 'Error'
		
		if(isInt(JoinCode) && isString(Alias) && isInt(Column) && isInt(Row) && isBoolean(isUpperTable)) {

			let value
			if(isInt(data.Value)) {
				value = data.Value
			} else {
				value = null
			}

			const updateJSON = { [Row]: value }
			const json = { JoinCode, Alias, Column }

			const d = { Alias, Column, Row, Value: value, UpperTable: isUpperTable }

			//TODO if value isn't correct reply with something like socket.emit('UpdateValueResponse-Error', d)
			if(isUpperTable) {

				if(!possibleEntries_upperTable[Row].includes(value) && value !== null) return 
				await UpperTable.update(updateJSON, { where: json }).then((l) => {
					if(l[0] !== 0) {
						Data = d
					}
				}).catch((err) => {
					return console.log('SOCKETIO UpdateValue-UpperTable', err)
				})

			} else {
				
				if(!possibleEntries_bottomTable[Row].includes(value) && value !== null) return 
				await BottomTable.update(updateJSON, { where: json }).then((l) =>{
					if(l[0] !== 0) {
						Data = d
					}
				}).catch((err) => {
					return console.log('SOCKETIO UpdateValue-BottomTable', err)
				})

			}
			
		}

		// socket.emit('UpdateValueResponse-Success', { ...data })
		// socket.to(JoinCode).emit('UpdateValueResponse', { Data })
		console.log(typeof callback)
		callback('Test')

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
		console.log('GET /JoinGame', err)
		res.sendStatus(500)
	})

})

app.post('/joingame', async (req, res) => {

	const JoinCode = req.body.JoinCode
	if(!isInt(JoinCode) || 10000000 > JoinCode || 99999999 < JoinCode) return res.sendStatus(400)
	
	Sessions.findOne({ where: { JoinCode }}).then((s) => {

		if(!s) return res.sendStatus(404)
		res.sendStatus(200)

	}).catch((err) => {
		console.log('POST /JoinGame', err)
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
			UpperTable.create(json).catch((err) => {console.log('FUNCTION createNewGame - UpperTable', err)})
			BottomTable.create(json).catch((err) => {console.log('FUNCTION createNewGame - BottomTable', err)})

		}

	}

	await PlayerTable.create({ 
		UserID: UserID, 
		JoinCode: JoinCode, 
		Start: date, 
		Gnadenwürfe: gnadenwürfe, 
		SessionID: SessionID, 
	}).catch((err) => {console.log('FUNCTION createNewGame - PlayerTable', err)})

}

async function destroyGame(SessionID, UserID) {

	try {

		const json = { JoinCode: null }
		await Sessions.update(json, { where: { UserID, id: SessionID } }).catch((err) => {console.log('FUNCTION destroyGame - Sessions', err)})

		const findJSON = { UserID, SessionID }
		await PlayerTable.destroy({ where: findJSON }).catch((err) => {console.log('FUNCTION destroyGame - PlayerTable', err)})
		await UpperTable.destroy({ where: findJSON }).catch((err) => {console.log('FUNCTION destroyGame - UpperTable', err)})
		await BottomTable.destroy({ where: findJSON }).catch((err) => {console.log('FUNCTION destroyGame - BottomTable', err)})

		return 204

	} catch (err) {
		console.log('FUNCTION destroyGame', err)
		return 500
	}

}

function generateJoinCode() {

	const min = 10000000
	const max = 99999999
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
	const { UserID } = req
	const { SessionName, List_Players } = req.body
	const Columns = +req.body.Columns

	if(!isString(SessionName) || !isInt(Columns) || Columns < 1 || Columns > MAX_COLUMNS || !isArray(List_Players)) return res.sendStatus(400)

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
		ShowScores: true, 
		SessionName,
		Columns, 
		List_PlayerOrder,
	}).then(async (s) => {

		for(const p of list) {await Players.create({ ...p, SessionID: s.id })}
		await createNewGame(date, UserID, list, s.id, Columns, joincode)

		res.json({ SessionID: s.id, JoinCode: joincode })

	}).catch((err) => {
		console.log('POST /EnterNames', err)
		res.sendStatus(500)
	})

})





app.use('/game', require('./routes/Game'))







app.get('/endscreen', (req, res) => {

	const { UserID } = req
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
		console.log('GET /EndScreen', err)
		res.sendStatus(500)
	})

})





app.get('/selectsession', async (req, res) => {

	const { UserID } = req

	Sessions.findAll({ where: { UserID }, include: Players }).then((s) => {

		const list = []

		for(const e of s) {
			const players = []
			for(const p of e.Players) {
				players.push(getPlayerJSON(p))
			}
			list.push(getSessionJSON(e, players))
		}

		res.json(list)

	}).catch((err) => {
		console.log('GET /selectSession', err)
		res.sendStatus(500)
	})

})

app.post('/selectsession', async (req, res) => {

	const { UserID } = req
	const SessionID = req.body.SessionID

	if(!isInt(SessionID)) return res.sendStatus(400)

	PlayerTable.findOne({ where: { SessionID, UserID } }).then((p) => {

		const json = { Exists: Boolean(p) }
		if(p) json.JoinCode = p.JoinCode

		res.json(json)

	}).catch((err) => {
		console.log('POST /selectSession', err)
		res.sendStatus(500)
	})

})

app.delete('/selectsession', async (req, res) => {

	const { UserID } = req
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

	} catch(err) {
		console.log('DELETE /selectSession', err)
		res.sendStatus(500)
	}

})





app.get('/sessionpreview', async (req, res) => {

	const { UserID } = req
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
		console.log('GET /SessionPreview', err)
		res.sendStatus(500)
	})

})

app.post('/sessionpreview', async (req, res) => {

	const { UserID } = req
	const JoinCode = generateJoinCode()
	const SessionID = +req.body.SessionID

	if(!SessionID) return res.sendStatus(400)

	if(await destroyGame(SessionID, UserID) === 500) return res.sendStatus(500)
	
	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then(async (s) => {

		if(!s) return res.sendStatus(404)

		await s.update({ JoinCode })
		await createNewGame(new Date(), UserID, s.Players, SessionID, s.Columns, JoinCode)
		res.json({ JoinCode })

	}).catch((err) => {
		console.log('POST /SessionPreview', err)
		res.sendStatus(500)
	})

})





app.get('/sessionpreview-table', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.SessionID
	const FinalScoreID = +req.query.FinalScoreID

	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then((s) => {

		if(!s) return res.sendStatus(404)

		FinalScores.findOne({ where: { id: FinalScoreID, UserID, SessionID }, include: TableArchive }).then((f) => {

			if(!f || !f.TableArchive) return res.sendStatus(404)

			const json = { 
				List_PlayerOrder: s.List_PlayerOrder, 
				List_Players: s.Players.map((p) => getPlayerJSON(p)), 
				FinalScores: getFinalScoreJSON(f), 
				...getTableJSON(f.TableArchive)
			}

			res.json(json)

		}).catch((err) => {
			console.log('GET /SessionPreview-Table - FinalScores', err)
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('GET /SessionAPreview-Table - Sessions', err)
		res.sendStatus(500)
	})

})






app.post('/updatesession', (req, res) => {

	const { UserID } = req
	const { id, Columns, List_Players } = req.body

	//TODO Check validity of list_players
	if(!List_Players) return res.sendStatus(400)

	const List_PlayerOrder = List_Players.map((p) => p.Alias)
	const updatedSession = { List_PlayerOrder }
	if(Columns) {
		if(Columns < 1 || Columns > MAX_COLUMNS) return res.sendStatus(400)
		updatedSession['Columns'] = +Columns
	}

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
		console.log('POST /updateSession', err)
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
