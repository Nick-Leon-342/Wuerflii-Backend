

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
const { PORT, DB_RETRIES, DB_RETRY_TIMEOUT_IN_SECONDS }			= require('./utils')

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






async function try_to_connect_to_database_with_retry() {
    for (let i = 1; i <= DB_RETRIES; i++) {
		console.log(`Database connection - Try ${i} of ${DB_RETRIES}.`)
        try {
            await sequelize.authenticate()		// Check connection to database
            console.log('Connected to database!')
            return true
        } catch (err) {
            console.error(`Connection to database failed:`, err.message)
            if (i < DB_RETRIES) {
				console.log(`Waiting ${DB_RETRY_TIMEOUT_IN_SECONDS} second${DB_RETRY_TIMEOUT_IN_SECONDS === 1 ? '' : 's'} for next try...`)
                await new Promise((resolve) => setTimeout(resolve, DB_RETRY_TIMEOUT_IN_SECONDS * 1000))		// Wait for until next try
            } else {
                throw new Error('Exceeded retry limit.')
            }
        }
    }
}

try_to_connect_to_database_with_retry().then(() => {
    
	sequelize.sync().then(() => {
		httpServer.listen(PORT, () => {
			console.log(`\nListening on port ${PORT}.\n`)
		})
	})

}).catch((err) => {
	console.error('Failed to start server:', err.message)
	process.exit(1)
	// TODO send an email
})
