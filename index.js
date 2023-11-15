

require('dotenv').config()

const { getSessionJSON, getPlayerJSON, getFinalScoreJSON, getPlayerTableJSON, getUpperTableJSON, getBottomTableJSON } = require('./DatabaseElementToJSON')

const allowedOrigins 	= require('./config/allowedOrigins')
const cors 				= require('cors')
const corsOptions 		= {
	origin: allowedOrigins,
	credentials: true
}

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
	console.log('Connected', socket.id)

	socket.on('UpdateGnadenwurf', (data) => {

		PlayerTable.update({ Gnadenwürfe: data }, { where: { JoinCode: getJoinCode(socket) } }).catch((err) => {
			console.log(err)
		})

	})

	socket.on('UpdateValue', (data) => {

		let value
		if(data?.Value) {
			value = +data?.Value
		} else {
			value = null
		}

		const updateJSON = { [+data?.Row]: value }
		const json = { JoinCode: getJoinCode(socket), Alias: data?.Alias, Column: +data?.Column }
		if(data.UpperTable) {
			UpperTable.update(updateJSON, { where: json })
		} else {
			BottomTable.update(updateJSON, { where: json })
		}

	})

})





// __________________________________________________Routers__________________________________________________

app.use('/auth', require('./routes/Auth'))
app.use('/refreshtoken', require('./routes/RefreshToken'))
app.use('/logout', require('./routes/Logout'))





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
		await Sessions.update(json, { where: { UserID: UserID, id: SessionID } })

		const findJSON = { UserID: UserID, SessionID: SessionID }
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
	const length = 8;
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

	const rb = req.body
	const date = new Date()
	const joincode = generateJoinCode()
	const userid = req.id


	//____________________AddNewSession____________________

	Sessions.create({
		UserID: userid, 
		JoinCode: joincode,
		SessionName: rb.SessionName,
		InputType: rb.InputType,
		Columns: rb.Columns, 
		CreatedDate: date,
		LastPlayed: date, 
		List_PlayerOrder: rb.List_PlayerOrder,
	}).then(async (s) => {

		const list = []
		for(const p of rb.List_Players) {
			await Players.create({ 
				UserID: userid, 
				SessionID: s.id, 
				Name: p.Name,
				Alias: p.Alias,
				Color: p.Color,
				Wins: p.Wins,
			}).then((p) => {
				list.push(getPlayerJSON(p))
			})
		}

		await createNewGame(date, userid, rb.List_Players, s.id, rb.Columns, joincode)

		res.json({ SessionID: s.id, JoinCode: joincode })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})





app.get('/game', (req, res) => {

	const UserID = req.id
	const SessionID = req.query.sessionid
	if(!SessionID || SessionID === 'null') return res.sendStatus(400)

	Sessions.findOne({ where: { id: +SessionID, UserID: UserID }, include: [ Players, PlayerTable, UpperTable, BottomTable] }).then((s) => {

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
	})

})

app.post('/game', async (req, res) => {

	const rb = req.body
	const sessionid = rb.id
	const userid = req.id
	const joincode = rb.JoinCode
	if(!sessionid || !joincode) {return res.sendStatus(400)}
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

	Sessions.findOne({ where: { id: sessionid, UserID: userid }, include: [ Players, UpperTable, BottomTable, PlayerTable ] }).then(async (s) => {

		s.update(Attributes)
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
			UserID: userid, 
			SessionID: sessionid, 
			...finalScores, 
			Start: s.PlayerTables[0].Start, 
			End: date,
		}).then(async (f) => {

			await TableArchive.create({ UserID: userid, SessionID: sessionid, Table: tableColumns, FinalScoresID: f.id })
			destroyGame(sessionid, userid)
			res.sendStatus(204)

		}).catch((err) => {
			console.log(err)
			return res.sendStatus(400)
		})


	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})

app.delete('/game', async (req, res) => {

	const sessionid = req.query.SessionID
	const userid = req.id

	destroyGame(sessionid, userid)

	const status = await destroyGame(sessionid, userid)
	res.sendStatus(status)

})





app.get('/endscreen', (req, res) => {

	Sessions.findOne({ where: { id: req.query.id, UserID: req.id }, include: Players }).then((s) => {

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


	Sessions.findAll({ where: { UserID: req.id }, include: Players }).then((tmp) => {

		const list = []

		for(const e of tmp) {
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
	const SessionID = req.query.id

	try {

		await Players.destroy({ where: { UserID: UserID, SessionID: SessionID } })
		await FinalScores.destroy({ where: { UserID: UserID, SessionID: SessionID } })
		await Sessions.destroy({ where: { UserID: UserID, id: SessionID } })

		res.sendStatus(204)

	} catch {
		res.sendStatus(500)
	}

})





app.get('/sessionpreview', async (req, res) => {

	const SessionID = req.query.id
	if(!SessionID || !+SessionID) return res.sendStatus(400)

	Sessions.findOne({ where: { id: SessionID, UserID: req.id }, include: [ Players, FinalScores ] }).then((s) => {

		if(!s) return res.sendStatus(404)

		const players = []
		for(const p of s.Players) {
			players.push(getPlayerJSON(p))
		}

		const session = getSessionJSON(s, players)

		const finalScores = []
		for(const f of s.FinalScores) {
			finalScores.push(getFinalScoreJSON(f))
		}

		res.json({ Session: session, FinalScores: finalScores })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})

app.post('/sessionpreview', async (req, res) => {

	const userid = req.id
	const joincode = generateJoinCode()
	const sessionid = req.body.SessionID
	
	Sessions.findOne({ where: { id: sessionid, UserID: userid }, include: Players }).then(async (s) => {

		await s.update({ JoinCode: joincode })

		await createNewGame(new Date(), userid, s.Players, sessionid, s.Columns, joincode)

		res.json({ JoinCode: joincode })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})





app.post('/changecredentials', async (req, res) => {

	const { Name, Password } = req.body
	const tmp = await Users.findOne({ where: { Name: Name } })
	if(tmp) return res.sendStatus(409)

	let hashedPassword
	if(Password) hashedPassword = await bcrypt.hash(Password, 10).then((hP) => {return hP})

	Users.findOne({ where: { id: req.id }}).then(async (user) => {
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

	if(!List_Players) return res.sendStatus(400)

	const List_PlayerOrder = List_Players.map((p) => p.Alias)
	const updatedSession = { List_PlayerOrder }
	if(Columns) updatedSession['Columns'] = +Columns

	Sessions.findOne({ where: { id, UserID }, include: Players }).then(async (s) => {

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
