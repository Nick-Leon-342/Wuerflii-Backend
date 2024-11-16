

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
const { PORT }			= require('./utils_env')

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))





const { 
	FinalScores, 
	
	Sessions, 

	Players, 

	Table_Archives, 
	Table_Columns, 

	Users, 

	sequelize
} = require('./models')

// __________________________________________________ Users __________________________________________________

Users.hasMany(Sessions, { foreignKey: 'UserID', onDelete: 'CASCADE' })



// __________________________________________________ Sessions __________________________________________________

Sessions.belongsTo(Users, { foreignKey: 'UserID' })

Sessions.hasMany(Players, { foreignKey: 'SessionID', onDelete: 'CASCADE' })
Sessions.hasMany(FinalScores, { foreignKey: 'SessionID', onDelete: 'CASCADE' })



// __________________________________________________ Players __________________________________________________

Players.belongsTo(Sessions, { foreignKey: 'SessionID' })

Players.hasMany(Table_Columns, { foreignKey: 'PlayerID', onDelete: 'CASCADE' })



// __________________________________________________ Table_Columns __________________________________________________

Table_Columns.belongsTo(Players, { foreignKey: 'PlayerID' })



// __________________________________________________ FinalScores __________________________________________________

FinalScores.belongsTo(Sessions, { foreignKey: 'SessionID' })

FinalScores.hasOne(Table_Archives, { foreignKey: 'FinalScoresID', onDelete: 'CASCADE' })



// __________________________________________________ Table_Archives __________________________________________________

Table_Archives.belongsTo(FinalScores, { foreignKey: 'FinalScoresID'})










// __________________________________________________ Routers __________________________________________________

app.use('/auth', require('./routes/Auth'))
app.use('/refreshtoken', require('./routes/RefreshToken'))
app.use('/logout', require('./routes/Logout'))





// __________________________________________________ Middleware __________________________________________________

app.use(require('./middleware/verifyJWT'))

app.use('/user', require('./routes/User'))
app.use('/player', require('./routes/Player'))
app.use('/game', require('./routes/Game/Game'))
app.use('/session', require('./routes/Session/Session'))





// handling page not found (404)
app.all('*', (req, res) => {
	res.sendStatus(404)
})





sequelize.sync().then(() => {
    httpServer.listen(PORT, () => { 
		console.log('Listening on port', PORT) 
	})
})
