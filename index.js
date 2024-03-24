

require('dotenv').config()

const {
	createNewGame, 
	generateJoinCode
} = require('./CreateNewGame')

const { 
	filter_session,
	filter_player,
	filter_finalscore,
	filter_playertable,
	filter_uppertable,
	filter_bottomtable, 
	filter_tablearchive 
} = require('./Filter_DatabaseJSON')

const { isInt, isArray, isBoolean, isString, isColor } = require('./IsDataType')
const { destroyGame } = require('./DestroyGame')

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
const { isDate } = require('util/types')
const { DATE } = require('sequelize')
app.use(verifyJWT)





app.use('/game', require('./routes/Game'))







app.get('/endscreen', (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID || !FinalScoreID) return res.sendStatus(400)


	Players.findAll({ where: { SessionID, UserID } }).then((list_players) => {

		FinalScores.findOne({ where: { id: FinalScoreID, SessionID, UserID } }).then((f) => {


			// return console.log(list_players, f)

			if(list_players.length === 0 || !f) return res.sendStatus(404)

			const tmp_list_players = []
			for(const p of list_players) {
				tmp_list_players.push(filter_player(p))
			}
	
			res.json({ 
				List_Players: tmp_list_players, 
				FinalScore: filter_finalscore(f)
			})


		}).catch((err) => {
			console.log('POST /endscreen findone finalscores', err)
			return res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('GET /endscreen', err)
		res.sendStatus(500)
	})

})





app.get('/selectsession', async (req, res) => {

	const { UserID } = req

	Sessions.findAll({ where: { UserID }, include: Players }).then((list_sessions) => {


		const list = []

		for(const session of list_sessions) {
			
			const list_players = []
			for(const p of session.Players) {list_players.push(filter_player(p))}

			list.push({
				...filter_session(session), 
				List_Players: list_players
			})

		}

		res.json(list)


	}).catch((err) => {
		console.log('GET /selectsession', err)
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
		console.log('POST /selectsession', err)
		res.sendStatus(500)
	})

})

app.delete('/selectsession', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	
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
		console.log('DELETE /selectsession', err)
		res.sendStatus(500)
	}

})





app.get('/sessionpreview', async (req, res) => {

	const { UserID } = req
	const session_id = +req.query.session_id

	if(!session_id) return res.sendStatus(400)

	Sessions.findOne({ where: { id: session_id, UserID }, include: [ Players, FinalScores ] }).then((s) => {


		if(!s) return res.sendStatus(404)
		
		const session = filter_session(s)

		const list_players = []
		for(const p of s.Players) {list_players.push(filter_player(p))}

		const list_finalScores = []
		for(const f of s.FinalScores) {list_finalScores.push(filter_finalscore(f))}


		res.json({ 
			Session: session, 
			List_Players: list_players, 
			List_FinalScores: list_finalScores
		})


	}).catch((err) => {
		console.log('GET /sessionpreview', err)
		res.sendStatus(500)
	})

})

app.post('/sessionpreview', async (req, res) => {

	const { UserID } = req
	const JoinCode = generateJoinCode()
	const { SessionID } = req.body

	if(!isInt(SessionID)) return res.sendStatus(400)

	if(await destroyGame(SessionID, UserID) === 500) return res.sendStatus(500)
	

	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then(async (s) => {


		if(!s) return res.sendStatus(404)

		await s.update({ JoinCode })
		await createNewGame(new Date(), UserID, s.Players, SessionID, s.Columns, JoinCode)
		res.json({ JoinCode })


	}).catch((err) => {
		console.log('POST /sessionpreview', err)
		res.sendStatus(500)
	})

})





app.get('/sessionpreview-table', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID || !FinalScoreID) return res.sendStatus(400)


	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then((s) => {

		if(!s) return res.sendStatus(404)

		FinalScores.findOne({ where: { id: FinalScoreID, UserID, SessionID }, include: TableArchive }).then((f) => {

			if(!f || !f.TableArchive) return res.sendStatus(404)

			const json = { 
				List_PlayerOrder: s.List_PlayerOrder, 
				List_Players: s.Players.map((p) => filter_player(p)), 
				FinalScores: filter_finalscore(f), 
				...filter_tablearchive(f.TableArchive)
			}

			res.json(json)


		}).catch((err) => {
			console.log('GET /sessionpreview-table finalscores', err)
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('GET /sessionpreview-table findone sessions', err)
		res.sendStatus(500)
	})

})




app.post('/customdate', async (req, res) => {

	const { UserID } = req
	const { SessionID, CustomDate } = req.body

	if(!SessionID || !isInt(SessionID) || !CustomDate || !isDate(new Date(CustomDate))) return res.sendStatus(500)

	Sessions.findOne({ where: { id: SessionID, UserID }, include: [ FinalScores, Players ] }).then((session) => {

		if(!session === 0) return res.sendStatus(404)

		session.update({ CustomDate: new Date(CustomDate) }).then(async () => {
			
			let scoresBefore = {}
			let scoresAfter = {}

			for(const p of session.Players) {scoresAfter[p.Alias] = 0}


			// Get finalScores later than customdate
			const list_finalscores = []
			for(const f of session.FinalScores) {
				if(new Date(f.End) >= new Date(CustomDate)) {
					list_finalscores.push(f)
				}
			}
			list_finalscores.sort((a, b) => new Date(a.End) - new Date(b.End))


			// Initialize ScoresAfter/ScoresBefore for correct finalScores
			for(const f of list_finalscores) {

				scoresBefore = { ...scoresAfter }

				// Add wins to scoresAfter
				for(const playerAlias of f.List_Winner) {
					scoresAfter[playerAlias] = scoresAfter[playerAlias] + 1
				}

				// Update finalScore
				await f.update({ ScoresBefore_SinceCustomDate: scoresBefore, ScoresAfter_SinceCustomDate: scoresAfter }).catch((err) => {
					console.log('POST /customdate update finalscore', err)
					return res.sendStatus(500)
				})

			}
			
			res.sendStatus(204)
			

		}).catch((err) => {
			console.log('POST /customdate session update', err)
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('POST /customdate', err)
		res.sendStatus(500)
	})

})






app.post('/updatesession', (req, res) => {

	const { UserID } = req
	const { SessionID, Columns, List_Players } = req.body
	
	if(!List_Players) return res.sendStatus(400)

	const List_PlayerOrder = List_Players.map((p) => p.Alias)
	const updatedSession = { List_PlayerOrder }
	if(Columns) {
		if(!isInt(Columns) || Columns < 1 || Columns > ( process.env.MAX_COLUMNS || 16 )) return res.sendStatus(400)
		updatedSession['Columns'] = Columns
	}


	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then(async (s) => {


		if(!s) return res.sendStatus(404)

		//Check if List_Players is valid
		if(s.Players.length !== List_Players.length) return res.sendStatus(400)
		for(const p of s.Players) {

			let found = false

			for(const newP of List_Players) {
				if(newP.id === p.id) {
					if(!newP.Color || !isColor(newP.Color) || !newP.Name || !isString(newP.Name)) {
						break
					} else {
						found = true
						break
					}
				}
			}

			if(!found) return res.sendStatus(400)

		}


		s.update(updatedSession).then(async (s) => {


			if(s[0] === 0) return res.sendStatus(404)
			
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
			console.log('POST /updatesession update session', err)
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('POST /updatesession', err)
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
