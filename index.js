

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
const cookieParser 		= require('cookie-parser')
const { PORT } = require('./utils')

const { send_email, log__error, log__info } = require('./handle_error')
const { version } = require('./package.json')

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))



const { 
	Association__Players_And_FinalScores_With_Sessions, 
	Association__Sessions_And_Players, 
	Association__Users_And_Sessions, 

	FinalScores, 
	
	Sessions, 

	Players, 

	Table_Archives, 
	Table_Columns, 

	Users, 

	sequelize
} = require('./models')





// __________________________________________________ Users __________________________________________________

Users.belongsToMany(Sessions, { through: Association__Users_And_Sessions, foreignKey: 'UserID' })



// __________________________________________________ Sessions __________________________________________________

Sessions.belongsToMany(Users, { through: Association__Users_And_Sessions, foreignKey: 'SessionID' })
Sessions.belongsToMany(Players, { through: Association__Sessions_And_Players, foreignKey: 'SessionID' })

Sessions.hasMany(Association__Players_And_FinalScores_With_Sessions, { as: 'association', foreignKey: 'SessionID', onDelete: 'CASCADE' })
Association__Players_And_FinalScores_With_Sessions.belongsTo(Sessions, { as: 'session', foreignKey: 'SessionID' })



// __________________________________________________ Players __________________________________________________

Players.belongsToMany(Sessions, { through: Association__Sessions_And_Players, foreignKey: 'PlayerID' })
Players.belongsToMany(FinalScores, { through: Association__Players_And_FinalScores_With_Sessions, foreignKey: 'PlayerID' })

Players.hasMany(Table_Columns, { foreignKey: 'PlayerID', onDelete: 'CASCADE' })



// __________________________________________________ Table_Columns __________________________________________________

Table_Columns.belongsTo(Players, { foreignKey: 'PlayerID' })



// __________________________________________________ FinalScores __________________________________________________

FinalScores.belongsToMany(Players, { through: Association__Players_And_FinalScores_With_Sessions, foreignKey: 'FinalScoreID' })

FinalScores.hasOne(Table_Archives, { foreignKey: 'FinalScoreID', onDelete: 'CASCADE' })



// __________________________________________________ Table_Archives __________________________________________________

Table_Archives.belongsTo(FinalScores, { foreignKey: 'FinalScoreID'})










// __________________________________________________ Routers __________________________________________________

app.use('/auth', require('./routes/Auth'))
app.use('/refreshtoken', require('./routes/RefreshToken'))
app.use('/logout', require('./routes/Logout'))

app.get('/version', (_, res) => res.json(version))





// __________________________________________________ Middleware __________________________________________________

app.use(require('./middleware/verifyJWT'))

app.use('/user', require('./routes/User'))
app.use('/player', require('./routes/Player'))
app.use('/game', require('./routes/Game/Game'))
app.use('/finalscore', require('./routes/FinalScore'))
app.use('/session', require('./routes/Session/Session'))
app.use('/analytics', require('./routes/Analytics/Analytics'))





// handling requested api not found (404)
app.all('*', (_, res) => { res.sendStatus(404) })




  
sequelize.sync().then(() => {
	httpServer.listen(PORT, () => {
		log__info('HTTP-Server up!')
		log__info(`Listening on port ${PORT}.\n\n`)
	})
})





process.on('uncaughtException', async err => {
	log__error('Server encountered an uncaught error!')
	console.error(err)
	await send_email(
		'Uncaught error!', 
		`Server encountered an uncaught error. Check it out and restart it.`, 
		err, 
	)
	process.exit(1)
})
  
process.on('unhandledRejection', async reason => {
	log__error('Server encountered an unhandled rejection!')
	console.error(reason)
	await send_email(
		'Unhandled rejection!', 
		`Server encountered an unhandled rejection. Check it out and restart it.`, 
		reason, 
	)
	process.exit(1)
})
