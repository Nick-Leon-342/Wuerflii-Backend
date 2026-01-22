

import * as dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
const corsOptions 		= {
	origin: ['*'],
	credentials: true
}

import express 			from 'express'
import http				from 'http'
const app 				= express()
const httpServer		= http.createServer(app)
import cookieParser 	from 'cookie-parser'
import { DATABASE_URL, PORT } 		from './utils.js'

import { send_email, log__error, log__info } from './handle_error.js'
import package_json from '../package.json' with { type: 'json' }

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

import { PrismaClient } from '../generated/prisma/index.js'
export const prisma = new PrismaClient({
	accelerateUrl: DATABASE_URL
})






// __________________________________________________ Routers __________________________________________________

import route__auth from './routes/Auth.js'
import route__refresh_token from './routes/Token_Refresh.js'

app.use('/auth', route__auth)
app.use('/refreshtoken', route__refresh_token)
app.use('/logout', require('./routes/Logout'))

app.get('/version', (_, res) => res.json(package_json.version))





// __________________________________________________ Middleware __________________________________________________

app.use(require('./middleware/verifyJWT'))

app.use('/user', require('./routes/User'))
app.use('/player', require('./routes/Player'))
app.use('/game', require('./routes/Game/Game'))
app.use('/finalscore', require('./routes/FinalScore'))
app.use('/session', require('./routes/Session/Session'))
app.use('/analytics', require('./routes/Analytics/Analytics'))





// handling requested api not found (404)
// app.all('*', (_, res) => { res.sendStatus(404) })




  
httpServer.listen(PORT, () => {
	log__info('HTTP-Server up!')
	log__info(`Listening on port ${PORT}.\n\n`)
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
