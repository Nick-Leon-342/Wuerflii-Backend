

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
app.use(verifyJWT)





app.use('/game', require('./routes/Game'))
app.use('/session', require('./routes/Session'))





app.get('/endscreen', (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID || !FinalScoreID) return res.sendStatus(400)


	Players.findAll({ where: { SessionID, UserID } }).then((list_players) => {

		FinalScores.findOne({ where: { id: FinalScoreID, SessionID, UserID } }).then((f) => {


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





//handling page not found (404)
app.all('*', (req, res) => {
	res.sendStatus(404)
})





db.sequelize.sync().then(() => {
    httpServer.listen(process.env.PORT || 10001, () => { console.log('Listening') })
})
