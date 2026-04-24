

import * as dotenv from 'dotenv'
dotenv.config()

import session 				from 'express-session'
import express 				from 'express'
import http					from 'http'
const app 					= express()
const httpServer			= http.createServer(app)

import { ALLOWED_ORIGIN, COOKIE__MAX_AGE, COOKIE__SAMESITE, COOKIE__SECURE, DATABASE_URL, MAX_COLUMNS, MAX_FINALSCORES_LIMIT, MAX_LENGTH_PLAYER_NAME, MAX_LENGTH_SESSION_NAME, MAX_PLAYERS, NAME__MAX_CHARACTER, NAME__MIN_CHARACTER, NAME__REGEX, NAME__REGEX_ALLOWEDCHARS, NAME__REGEX_LETTERFIRST, NAME__REGEX_MINMAX, PASSWORD__MAX_CHARACTER, PASSWORD__MIN_CHARACTER, PASSWORD__REGEX, PASSWORD__REGEX_ALLOWEDCHARS, PASSWORD__REGEX_ALLOWEDSYMBOLS, PASSWORD__REGEX_MINMAX, PORT, REDIS__HOST, REDIS__PASSWORD, REDIS__PORT, SESSION__SECRET } from './utils.js'
import { send_email, log__error, log__info } from './handle_error.js'
import package_json from '../package.json' with { type: 'json' }

import cors from 'cors'
const corsOptions = {
	origin: ALLOWED_ORIGIN,
	credentials: true
}
app.set('trust proxy', 1)
app.use(cors(corsOptions))
app.use(express.json())





// __________ Redis for sessions __________

import { createClient }		from 'redis'
import { RedisStore } from 'connect-redis'
const redis_client = createClient({
	url: `redis://:${REDIS__PASSWORD}@${REDIS__HOST}:${REDIS__PORT}`,
})

redis_client.connect().catch(console.error)

app.use(session({
	store: new RedisStore({
		client: redis_client, 
	}), 
	secret:	SESSION__SECRET, 
	resave: false, 
	saveUninitialized: false, 
	cookie: {
		httpOnly: true, 
		secure: COOKIE__SECURE, 
		sameSite: COOKIE__SAMESITE, 
		maxAge: COOKIE__MAX_AGE, 
	}
}))





// __________________________________________________ Prisma __________________________________________________

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/index.js'

const adapter = new PrismaPg({ connectionString: DATABASE_URL })
export const prisma = new PrismaClient({ adapter })





// __________________________________________________ Swagger API-Documentation __________________________________________________

if(process.env.NODE_ENV !== 'production') {
	const swaggerUi				= await import('swagger-ui-express')
	const getSwaggerDocument	= await import('./docs/swagger.js')
	const swaggerDocument 		= await getSwaggerDocument.default()
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}





// __________________________________________________ Routes __________________________________________________

import route__auth 	from './routes/Auth.js'
app.use('/auth', 	route__auth)

app.get('/version', (_, res) => res.json(package_json.version))

app.get('/env', (_, res) => {
	res.json({
		NAME__MIN_CHARACTER, 
		NAME__MAX_CHARACTER, 

		NAME__REGEX, 
		NAME__REGEX_MINMAX, 
		NAME__REGEX_LETTERFIRST, 
		NAME__REGEX_ALLOWEDCHARS, 

		PASSWORD__MIN_CHARACTER, 
		PASSWORD__MAX_CHARACTER, 

		PASSWORD__REGEX, 
		PASSWORD__REGEX_MINMAX, 
		PASSWORD__REGEX_ALLOWEDCHARS, 
		PASSWORD__REGEX_ALLOWEDSYMBOLS, 

		MAX_LENGTH_SESSION_NAME, 
		MAX_PLAYERS, 
		MAX_LENGTH_PLAYER_NAME, 
		MAX_COLUMNS, 
		MAX_FINALSCORES_LIMIT, 
	})
})





// __________________________________________________ Middleware __________________________________________________

import is_authenticated 	from './middleware/is_authenticated.js'
app.use(is_authenticated)





// __________________________________________________ Protected Routes __________________________________________________

import route__user 			from './routes/User.js'
import route__game 			from './routes/Game/Game.js'
import route__final_score 	from './routes/Final_Score.js'
import route__session 		from './routes/Session/Session.js'
import route__analytics 	from './routes/Analytics/Analytics.js'

app.use('/user', 			route__user)
app.use('/game', 			route__game)
app.use('/session', 		route__session)
app.use('/analytics', 		route__analytics)
app.use('/finalscore', 		route__final_score)





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
