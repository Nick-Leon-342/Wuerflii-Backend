

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { Users } = require('../models')
const jwt = require('jsonwebtoken')





//__________________________________________________Login__________________________________________________

router.post('/login', async (req, res) => {

    const { Name, Password } = req.body
	if (!Name || !Password) return res.sendStatus(400)
	const user = await Users.findOne({ where: { Name: Name } })

	if(!user || !await bcrypt.compare(Password, user.Password)) 
		return res.status(401).send('Wrong credentials!')

	sendToken(res, user)

})




//__________________________________________________Registration__________________________________________________

router.post('/registration', async (req, res) => {
	
	try {

		const { Name, Password } = req.body
		if (!Name || !Password) return res.sendStatus(401)

		const tmp = await Users.findOne({ where: { Name: Name } })
		if(tmp) return res.sendStatus(409)

		bcrypt.hash(Password, 10).then( async (hashedPassword) => {

			await Users.create({
				Name: Name,
				Password: hashedPassword
			})

			const user = await Users.findOne({ where: { Name: Name, Password: hashedPassword } })

			sendToken(res, user)
			
		})

	} catch {
		res.sendStatus(500)
	}

})





//__________________________________________________SendToken__________________________________________________

async function sendToken(res, user) {

	//create both token
	const id = user.id
	const accessToken = jwt.sign(
		{ 'id': id },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: '10s' }
	)
	const refreshToken = jwt.sign(
		{ 'id': id },
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: '1d' }
	)

	//save in database
	const updatedRefreshToken = { RefreshToken: refreshToken }
	await Users.update(updatedRefreshToken, { where: { id: id } })
	
	//send refreshtoken as cookie and accesstoken as response in json
	res.cookie('RefreshToken', refreshToken, { httpOnly: true, sameSite:'None', maxAge: 24 * 60 * 60 * 1000, secure: true })
	res.json({ accessToken })

}





module.exports = router
