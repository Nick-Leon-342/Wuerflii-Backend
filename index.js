

require('dotenv').config()

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





const { Players, Users, Sessions, FinalScores, PlayerTable, UpperTable, BottomTable } = require('./models')
Users.hasMany(Sessions, { foreignKey: 'UserID' })
Sessions.belongsTo(Users, { foreignKey: 'UserID' })

Sessions.hasMany(FinalScores, { foreignKey: 'SessionID' })
FinalScores.belongsTo(Sessions, { foreignKey: 'SessionID' })

Sessions.hasMany(Players, { foreignKey: 'SessionID' })
Players.belongsTo(Sessions, { foreignKey: 'SessionID' })

Sessions.hasMany(PlayerTable, { foreignKey: 'SessionID' })
PlayerTable.belongsTo(Sessions, { foreignKey: 'SessionID' })

Sessions.hasMany(UpperTable, { foreignKey: 'SessionID' })
UpperTable.belongsTo(Sessions, { foreignKey: 'SessionID' })

Sessions.hasMany(BottomTable, { foreignKey: 'SessionID' })
BottomTable.belongsTo(Sessions, { foreignKey: 'SessionID' })





//____________________Routers____________________

app.use('/auth', require('./routes/Auth'))
app.use('/refreshtoken', require('./routes/RefreshToken'))
app.use('/logout', require('./routes/Logout'))

function getJoinCode(socket) {
	return socket.handshake.auth.joincode
}
io.on('connection', (socket) => {
	console.log('Connected', socket.id)

	socket.on('UpdateGnadenwurf', (data) => {

		console.log(getJoinCode(socket), data)

		PlayerTable.update({ Gnadenwürfe: data }, { where: { JoinCode: getJoinCode(socket) } }).then((e) => {
			console.log(e)
		}).catch((err) => {
			console.log(err)
		})

	})

	socket.on('UpdateUpperTableValue', (data) => {

		console.log('Upper', getJoinCode(socket), data)

	})

	socket.on('UpdateBottomTableValue', (data) => {

		console.log('Bottom', getJoinCode(socket), data)

	})

})

//use middleware to auth user
const verifyJWT = require('./middleware/verifyJWT')
const bcrypt = require('bcrypt')
app.use(verifyJWT)

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
	const Attributes = { 
		SessionName: rb.SessionName,
		InputType: rb.InputType,
		LastPlayed: rb.LastPlayed,
		List_PlayerOrder: rb.List_PlayerOrder,
	}
	const joincode = generateJoinCode()


	//____________________AddNewSession____________________

	Sessions.create( { ...Attributes, JoinCode: joincode, CreatedDate: rb.CreatedDate, Columns: rb.Columns, UserID: req.id } ).then(async (s) => {

		const gnadenwürfe = {}
		const list = []
		for(const p of rb.List_Players) {
			gnadenwürfe[p.Alias] = false
			await Players.create({ 
				UserID: req.id, 
				SessionID: s.id, 
				Name: p.Name,
				Alias: p.Alias,
				Color: p.Color,
				Wins: p.Wins,
			}).then((p) => {
				list.push(getPlayerJSON(p))
			})
		}

		await PlayerTable.create({ 
			UserID: req.id, 
			JoinCode: joincode, 
			Gnadenwürfe: gnadenwürfe,
			SessionID: s.id,
		})

		res.json({ SessionID: s.id, JoinCode: joincode })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})

app.get('/game', (req, res) => {

	const UserID = req.id
	const SessionID = req.query.sessionid
	// const joincode = +req.query.joincode
	// if(SessionID === 0 || joincode === 0) return res.sendStatus(400)
	if(!SessionID || SessionID === 'null') return res.sendStatus(400)

	Sessions.findOne({ where: { id: +SessionID, UserID: UserID }, include: Players }).then((s) => {

		const list_players = []
		for(const p of s.Players) {
			list_players.push(getPlayerJSON(p))
		}
		const session = getSessionJSON(s, list_players)

		res.json(session)

	}).catch((err) => {
		console.log(err)
	})

})

app.post('/game', async (req, res) => {

	const rb = req.body
	const id = rb.id
	if(!id) {return res.sendStatus(400)}
	const fs = rb.FinalScores
	const Attributes = { 
		SessionName: rb.SessionName,
		InputType: rb.InputType,
		LastPlayed: rb.LastPlayed,
		List_PlayerOrder: rb.List_PlayerOrder,
	}

	//____________________UpdateSession____________________

	Sessions.update( Attributes, { where: { UserID: req.id, id: id } }).then(async () => {

		for(const p of rb.List_Players) {
			await Players.update(
				{ 
					Name: p.Name,
					Color: p.Color,
					Wins: p.Wins,
				}, { where: { id: p.id, UserID: req.id, SessionID: id } }).catch((err) => {
				console.log(err)
				return res.sendStatus(400)
			})
		}

		FinalScores.create({ 
			UserID: req.id, 
			SessionID: id, 
			...fs 
		}).then(() => {
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

function getSessionJSON(s, list_players) {

	return {
		id: s.id,
		SessionName: s.SessionName,
		Columns: s.Columns,
		JoinCode: s.JoinCode,
		InputType: s.InputType,
		LastPlayed: s.LastPlayed,
		CreatedDate: s.CreatedDate,
		List_PlayerOrder: s.List_PlayerOrder,
		List_Players: list_players,
	}

}

function getPlayerJSON(p) {

	return {
		id: p.id,
		Name: p.Name,
		Alias: p.Alias,
		Color: p.Color,
		Wins: p.Wins,
	}

}

function getFinalScoreJSON(f) {

	return {
		Start: f.Start,
		End: f.End,
		Columns: f.Columns,
		Surrender: f.Surrender,
		List_Winner: f.List_Winner,
		PlayerScores: f.PlayerScores,
	}

}

app.post('/selectsession', async (req, res) => {

	const { id, Columns, List_Players } = req.body

	try {

		await Sessions.update({ Columns }, { where: { UserID: req.id, id: id } })
		for(const p of List_Players) {
			await Players.update({ Name: p.Name, Color: p.Color }, { where: { UserID: req.id, SessionID: id, id: p.id } })
		}
		res.sendStatus(204)

	} catch(err) {

		console.log(err)
		res.sendStatus(500)

	}
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

	Sessions.findOne({ where: { id: req.query.id, UserID: req.id }, include: [ Players, FinalScores ] }).then((s) => {

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
		res.sendStatus(404)
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

app.post('/updatelistplayers', async (req, res) => {

	const { id, List_Players } = req.body
	const UserID = req.id

	Sessions.update({ List_Players: List_Players }, { where: { id, UserID }}).then((s) => {
		res.sendStatus(204)
	}).catch(() => {
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
