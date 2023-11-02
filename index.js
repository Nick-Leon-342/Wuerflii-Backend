

require('dotenv').config()

const express = require('express')
const app = express()

const { Users, Sessions, FinalScores } = require('./models')
Users.hasMany(Sessions, { foreignKey: 'userId' })
Sessions.belongsTo(Users, { foreignKey: 'userId' })
Sessions.hasMany(FinalScores, { foreignKey: 'sessionId' })
FinalScores.belongsTo(Sessions, { foreignKey: 'sessionId' })

const sendToken = require('./routes/SendToken')
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
const bcrypt = require('bcrypt')
app.use(verifyJWT)

app.get('/creategame', (req, res) => {
	res.sendStatus(200)
})

app.get('/enternames', (req, res) => {
	res.sendStatus(200)
})

app.get('/game', (req, res) => {
	res.sendStatus(200)
})

app.post('/game', async (req, res) => {

	const { id, Attributes, List_Players, FinalScores } = req.body

	if(id) {
			
		//____________________UpdateSession____________________

		Sessions.findOne({ where: { userId: req.id, id: id } }).then((s) => {

			const tmp = [...JSON.parse(s.List_FinalScores)]
			tmp.unshift(FinalScores)
			const list_updated = JSON.stringify(tmp)

			s.update({
				Attributes,
				List_Players,
				List_FinalScores: list_updated
			}).then(() => {
				return res.sendStatus(204)
			}).catch(() => {
				return res.sendStatus(500)
			})

		}).catch(() => res.sendStatus(400))

	} else {

		//____________________AddNewSession____________________

		Sessions.create({ 
			Attributes,
			List_Players, 
			List_FinalScores: JSON.stringify([FinalScores]), 
			userId: req.id 
		}).then(() => {
			return res.sendStatus(201)
		}).catch(() => {
			return res.sendStatus(500)
		})

	}

})

app.get('/endscreen', (req, res) => {
	res.sendStatus(200)
})

app.get('/selectsession', async (req, res) => {

	Sessions.findAll({ where: { userId: req.id } }).then((list) => {
		
		return res.json(list)

	}).catch(() => {
		return res.sendStatus(500)
	})

})

app.post('/selectsession', async (req, res) => {

	const session = req.body

	Sessions.findOne({ where: { userId: req.id, id: session.id }}).then(async (s) => {

		s.update({ Attributes: JSON.stringify(session.Attributes), List_Players: JSON.stringify(session.List_Players) }).then(() => {
			res.sendStatus(204)
		}).catch((e) => {
			console.log(e)
			res.sendStatus(500)
		})

	}).catch((e) => {
		console.log(e)
		res.sendStatus(500)
	})

})

app.delete('/selectsession', async (req, res) => {

	Sessions.destroy({
		where: { 
			userId: req.id,
			id: req.query.id
		}
	}).then(() => {
		res.sendStatus(204)
	}).catch(() => {
		res.sendStatus(500)
	})

})

app.get('/sessionpreview', async (req, res) => {

	Sessions.findOne({ where: { id: req.query.id, userId: req.id }}).then((s) => {

		if(!s) return res.sendStatus(404)

		return res.json(s.List_FinalScores)

	}).catch((e) => {
		console.log(e)
		return res.sendStatus(403)
	})

})

app.post('/changecredentials', async (req, res) => {

	const { Name, Password } = req.body
	const tmp = await Users.findOne({ where: { Name: Name } })
	if(tmp) return res.sendStatus(409)

	let hashedPassword
	if(Password) hashedPassword = await bcrypt.hash(Password, 10).then((hP) => {return hP})

	Users.findOne({ where: { id: req.id }}).then(async (user) => {
		await user.update({ Name, Password: hashedPassword }).then(() => {
			sendToken(res, user)
		}).catch(() => {
			res.sendStatus(500)
		})
	}).catch(() => {
		res.sendStatus(403)
	})

})

app.post('/updatelistplayers', async (req, res) => {

	const { id, List_Players } = req.body
	const userId = req.id

	Sessions.update({ List_Players: List_Players }, { where: { id, userId }}).then((s) => {
		res.sendStatus(204)
	}).catch(() => {
		res.sendStatus(500)
	})

})





//handling page not found (404)
app.all('*', (req, res) => {
	res.sendStatus(404)
})




db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 10001, () => { console.log('Listening') })
})
