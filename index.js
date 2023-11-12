

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
Users.hasMany(Sessions, { foreignKey: 'userId' })
Sessions.belongsTo(Users, { foreignKey: 'userId' })

Sessions.hasMany(FinalScores, { foreignKey: 'sessionId' })
FinalScores.belongsTo(Sessions, { foreignKey: 'sessionId' })

Sessions.hasMany(Players, { foreignKey: 'sessionId' })
Players.belongsTo(Sessions, { foreignKey: 'sessionId' })

Sessions.hasMany(PlayerTable, { foreignKey: 'sessionId' })
PlayerTable.belongsTo(Sessions, { foreignKey: 'sessionId' })

Sessions.hasMany(UpperTable, { foreignKey: 'sessionId' })
UpperTable.belongsTo(Sessions, { foreignKey: 'sessionId' })

Sessions.hasMany(BottomTable, { foreignKey: 'sessionId' })
BottomTable.belongsTo(Sessions, { foreignKey: 'sessionId' })





//____________________Routers____________________

app.use('/auth', require('./routes/Auth'))
app.use('/refreshtoken', require('./routes/RefreshToken'))
app.use('/logout', require('./routes/Logout'))


io.on('connection', (socket) => {

	socket.on('Test', (data) => {
		console.log(data)
	})

	socket.on('Finish', (data) => {
		console.log(data)
	})

	socket.on('UpdateGnadenwurf', (data) => {
		console.log(data)

		

	})

})

//use middleware to auth user
const verifyJWT = require('./middleware/verifyJWT')
const bcrypt = require('bcrypt')
app.use(verifyJWT)

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


	//____________________AddNewSession____________________

	Sessions.create( { ...Attributes, CreatedDate: rb.CreatedDate, Columns: rb.Columns, userId: req.id } ).then(async (s) => {

		const list = []
		for(const p of rb.List_Players) {
			await Players.create({ 
				userId: req.id, 
				sessionId: s.id, 
				Name: p.Name,
				Alias: p.Alias,
				Color: p.Color,
				Wins: p.Wins,
			}).then((p) => {
				list.push(getPlayerJSON(p))
			})
		}

		res.json({ sessionid: s.id, List_Players: list })

	}).catch((err) => {
		console.log(err)
		res.sendStatus(500)
	})

})

app.get('/game', (req, res) => {
	res.sendStatus(200)
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

	Sessions.update( Attributes, { where: { userId: req.id, id: id } }).then(async () => {

		for(const p of rb.List_Players) {
			await Players.update(
				{ 
					Name: p.Name,
					Color: p.Color,
					Wins: p.Wins,
				}, { where: { id: p.id, userId: req.id, sessionId: id } }).catch((err) => {
				console.log(err)
				return res.sendStatus(400)
			})
		}

		FinalScores.create({ 
			userId: req.id, 
			sessionId: id, 
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

	Sessions.findOne({ where: { id: req.query.id, userId: req.id }, include: Players }).then((s) => {

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


	Sessions.findAll({ where: { userId: req.id }, include: Players }).then((tmp) => {

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

		await Sessions.update({ Columns }, { where: { userId: req.id, id: id } })
		for(const p of List_Players) {
			await Players.update({ Name: p.Name, Color: p.Color }, { where: { userId: req.id, sessionId: id, id: p.id } })
		}
		res.sendStatus(204)

	} catch(err) {

		console.log(err)
		res.sendStatus(500)

	}
})

app.delete('/selectsession', async (req, res) => {

	const userId = req.id
	const sessionId = req.query.id

	try {

		await Players.destroy({ where: { userId: userId, sessionId: sessionId } })
		await FinalScores.destroy({ where: { userId: userId, sessionId: sessionId } })
		await Sessions.destroy({ where: { userId: userId, id: sessionId } })

		res.sendStatus(204)

	} catch {
		res.sendStatus(500)
	}

})

app.get('/sessionpreview', async (req, res) => {

	Sessions.findOne({ where: { id: req.query.id, userId: req.id }, include: [ Players, FinalScores ] }).then((s) => {

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
	const userId = req.id

	Sessions.update({ List_Players: List_Players }, { where: { id, userId }}).then((s) => {
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
