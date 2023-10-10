

require('dotenv').config()

const express = require('express')
const app = express()

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
app.get('/home', (req, res) => {
	res.send('home')
})




//handling page not found (404)
app.all('*', (req, res) => {
	res.sendStatus(404)
})




db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 10001, () => { console.log('Listening') })
})
