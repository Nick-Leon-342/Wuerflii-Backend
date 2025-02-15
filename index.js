

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
const nodemailer		= require('nodemailer')
const { PORT, DB_RETRIES, DB_RETRY_TIMEOUT_IN_SECONDS, EMAIL_SMTP_HOST, EMAIL_SMTP_PORT, EMAIL_SMTP_SSL, EMAIL_SMTP_USERNAME, EMAIL_SMTP_PASSWORD, EMAIL_OF_ADMIN, EMAIL_SMTP_REPLYTOEMAIL } = require('./utils')

const { format } = require('date-fns')

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





// __________________________________________________ Middleware __________________________________________________

app.use(require('./middleware/verifyJWT'))

app.use('/user', require('./routes/User'))
app.use('/player', require('./routes/Player'))
app.use('/game', require('./routes/Game/Game'))
app.use('/session', require('./routes/Session/Session'))
app.use('/analytics', require('./routes/Analytics/Analytics'))





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
                await new Promise((resolve) => setTimeout(resolve, DB_RETRY_TIMEOUT_IN_SECONDS * 1000))		// Wait until next try
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

}).catch(async err => {

	console.error('Failed to start server:', err.message)

	// Send error email if all data has been provided
	if(EMAIL_SMTP_HOST && EMAIL_SMTP_PORT && EMAIL_SMTP_SSL && EMAIL_SMTP_USERNAME && EMAIL_SMTP_PASSWORD && EMAIL_SMTP_REPLYTOEMAIL && EMAIL_OF_ADMIN) {
		
		console.error('Sending email.')

		const email_transporter = nodemailer.createTransport({
			host: EMAIL_SMTP_HOST, 
			port: EMAIL_SMTP_PORT, 
			secure: EMAIL_SMTP_SSL, 
			auth: {
				user: EMAIL_SMTP_USERNAME, 
				pass: EMAIL_SMTP_PASSWORD, 
			}
		})
		await email_transporter.sendMail({
			from: `"Kniffel Server" <${EMAIL_SMTP_REPLYTOEMAIL}>`, 
			to: EMAIL_OF_ADMIN, 
			subject: `Kniffel - Server can't connect to database.`, 
			text: `Server couldn't connect to database.\nTimestamp: ${format(new Date(), 'HH:mm dd.MM.yyyy')}`, 
		}).then(() => {
			console.error('Done')
		}).catch(err_email => console.err('Some error occured during sending email:\n', err_email))

	}

	process.exit(1)

})
