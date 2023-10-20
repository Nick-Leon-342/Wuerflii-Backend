

require('dotenv').config()

const express = require('express')
const app = express()

const { Users, Sessions } = require('./models')
Users.hasMany(Sessions, { foreignKey: 'userId' })
Sessions.belongsTo(Users, { foreignKey: 'userId' })

const db = require('./models')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = require('./config/allowedOrigins')
const cors = require('cors')
const corsOptions = {
	origin: allowedOrigins,
	credentials: true
}
app.use(cors(corsOptions))





//____________________Routers____________________

app.use('/auth', require('./routes/Auth'))
app.use('/refreshtoken', require('./routes/RefreshToken'))
app.use('/logout', require('./routes/Logout'))

//use middleware to auth user
const verifyJWT = require('./middleware/verifyJWT')
app.use(verifyJWT)
app.post('/game', async (req, res) => {

	const { Attributes, List_Players, FinalScores } = req.body
	const sessionName = JSON.parse(Attributes).SessionName

	await Users.findOne({ where: { id: req.id }, include: Sessions }).then(async (user) => {
		for(let i = 0; user.Sessions.length >= i; i++) {
			const currentSession = user.Sessions[i]
			if(sessionName === '' && !currentSession) {
			
				//add new session with free session_index
				const a = JSON.parse(Attributes)
				a.SessionName = `session_${i}`
				await Sessions.create({ 
					Attributes: JSON.stringify(a), 
					List_Players, 
					List_FinalScores: JSON.stringify([FinalScores]), 
					userId: req.id 
				}).then(() => {
					return res.sendStatus(201)
				}).catch(() => {
					return res.sendStatus(500)
				})
				break

			} else if(currentSession && JSON.parse(currentSession.Attributes).SessionName === sessionName) {

				//update session
				const tmp = [...JSON.parse(currentSession.List_FinalScores)]
				tmp.unshift(FinalScores)
				const list_updated = JSON.stringify(tmp)

				await currentSession.update({
					Attributes,
					List_Players,
					List_FinalScores: list_updated
				}).then(() => {
					return res.sendStatus(200)
				}).catch(() => {
					return res.sendStatus(500)
				})
				break

			}
		}
	}).catch(() => {
		return res.sendStatus(403)
	})

})

app.get('/selectsession', async (req, res) => {

	const list_sessions = []

	Users.findOne({ where: { id: req.id }, include: Sessions }).then((user) => {
		
		if(!user.Sessions) return res.sendStatus(404)
		for(const s of user.Sessions) {
			list_sessions.push({ Attributes: s.Attributes, List_Players: s.List_Players })
		}
		return res.json(list_sessions)

	}).catch(() => {
		return res.sendStatus(403)
	})

})

app.delete('/selectsession', async (req, res) => {

	const attributes = { 
		Columns: req.query.Columns,
		LastPlayed: req.query.LastPlayed,
		CreatedDate: req.query.CreatedDate,
		SessionName: req.query.SessionName
	}

	Sessions.destroy({
		where: { 
			userId: req.id,
			Attributes: JSON.stringify(attributes)
		}
	}).then(() => {
		res.sendStatus(204)
	}).catch(() => {
		res.sendStatus(500)
	})

})

app.get('/sessionpreview', async (req, res) => {
	
	Users.findOne({ where: { id: req.id }, include: Sessions }).then((user) => {

		const sessionName = req.query.SessionName
		for(const s of user.Sessions) {
			if(JSON.parse(s.Attributes).SessionName === sessionName) {
				return res.json(s.List_FinalScores)
			}
		}

	}).catch(() => {
		return res.sendStatus(403)
	})

})





//handling page not found (404)
app.all('*', (req, res) => {
	res.sendStatus(404)
})




db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 10001, () => { console.log('Listening') })
})
