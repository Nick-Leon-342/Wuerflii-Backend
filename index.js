

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

	const { Attributes, List_Players, List_FinalScores } = req.body

	Users.findOne({ where: { id: req.id }, include: Sessions }).then(async (user) => {

		if(user.Sessions.length === 0) {

			//add first session for user
			Attributes.SessionName = 'session_0'
			await Sessions.create({ Attributes, List_Players, List_FinalScores: JSON.stringify([List_FinalScores]), userId: req.id }).then(() => {
				return res.sendStatus(201)
			}).catch(() => {
				return res.sendStatus(500)
			})

		}

		for(let i = 0; user.Sessions.length >= i; i++) {
			if(Attributes.SessionName === '' && !user.Sessions[i]) {
			
				//add new session with free session_index
				Attributes.SessionName = `session_${i}`
				await Sessions.create({ Attributes, List_Players, List_FinalScores: JSON.stringify([List_FinalScores]), userId: req.id }).then(() => {
					return res.sendStatus(201)
				}).catch(() => {
					return res.sendStatus(500)
				})

			} else if(user.Sessions[i].Attributes.SessionName === data.Attributes.SessionName) {

				//update session

			}
		}

	}).catch(() => {
		res.sendStatus(403)
	})

	return res.sendStatus(500)

})





//handling page not found (404)
app.all('*', (req, res) => {
	res.sendStatus(404)
})




db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 10001, () => { console.log('Listening') })
})
