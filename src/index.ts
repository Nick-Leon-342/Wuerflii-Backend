

import * as dotenv from 'dotenv'
dotenv.config()

import express 				from 'express'
import http					from 'http'
const app 					= express()
const httpServer			= http.createServer(app)
import cookieParser 		from 'cookie-parser'

import { ALLOWED_ORIGIN, DATABASE_URL, PORT } from './utils.js'
import package_json from '../package.json' with { type: 'json' }
import { send_email, log__error, log__info } from './handle_error.js'

import cors from 'cors'
const corsOptions = {
	origin: ALLOWED_ORIGIN,
	credentials: true
}
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))





// __________________________________________________ Prisma __________________________________________________

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/index.js'

const adapter = new PrismaPg({ connectionString: DATABASE_URL })
export const prisma = new PrismaClient({ adapter })





// __________________________________________________ Swagger API-Documentation __________________________________________________

import swaggerUi			from  'swagger-ui-express'
import getSwaggerDocument	from './docs/swagger.js'
const swaggerDocument 		= await getSwaggerDocument()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))





// __________________________________________________ Routers __________________________________________________

import route__auth from './routes/Auth.js'
import route__logout from './routes/Logout.js'
import route__refresh_token from './routes/Refresh_Token.js'

app.use('/auth', route__auth)
app.use('/logout', route__logout)
app.use('/refreshtoken', route__refresh_token)

app.get('/version', (_, res) => res.json(package_json.version))





// __________________________________________________ Middleware __________________________________________________

import verifyJWT from './middleware/verifyJWT.js'
app.use(verifyJWT)

import route__user from './routes/User.js'
import route__game from './routes/Game/Game.js'
import route__final_score from './routes/Final_Score.js'
import route__session from './routes/Session/Session.js'
import route__analytics from './routes/Analytics/Analytics.js'

app.use('/user', route__user)
app.use('/game', route__game)
app.use('/session', route__session)
app.use('/analytics', route__analytics)
app.use('/finalscore', route__final_score)





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
