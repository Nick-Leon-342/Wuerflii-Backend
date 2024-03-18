

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { Users } = require('../models')
const sendToken = require('./SendToken')
const { NAME_REGEX, PASSWORD_REGEX } = require('../utils')





//__________________________________________________Login__________________________________________________

router.post('/login', async (req, res) => {

    const { Name, Password } = req.body
	if (!Name || !Password) return res.sendStatus(400)
	const user = await Users.findOne({ where: { Name: Name } }).catch((err) => {
		console.log('POST /Login', err)
		return res.sendStatus(500)
	})

	if(!user || !await bcrypt.compare(Password, user.Password)) return res.status(401).send('Wrong credentials!')
	
	sendToken(res, user)

})


router.patch('/login', async (req, res) => {

	const { UserID } = req
	const { Name, Password } = req.body

	if(!Name && !Password) return res.sendStatus(400)

	const updateJSON = {}
	if(Name) {

		if(!NAME_REGEX.test(Name)) return res.sendStatus(400)

		const tmp = await Users.findOne({ where: { Name } })
		if(tmp) return res.sendStatus(409)

		updateJSON['Name'] = Name

	} 
	
	if(Password) {

		if(!PASSWORD_REGEX.test(Password)) return res.sendStatus(400)

		const hashedPassword = await bcrypt.hash(Password, 10).then((hP) => {return hP})

		updateJSON['Password'] = hashedPassword

	}

	Users.findOne({ where: { id: UserID }}).then(async (user) => {

		await user.update(updateJSON).then(() => {
			sendToken(res, user)
		}).catch(() => {
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('PATCH /login', err)
		res.sendStatus(403)
	})

})





//__________________________________________________Registration__________________________________________________

router.post('/registration', async (req, res) => {
	
	try {

		const { Name, Password } = req.body
		if (!Name || !NAME_REGEX.test(Name) || !Password || !PASSWORD_REGEX.test(Password)) return res.sendStatus(400)

		const tmp = await Users.findOne({ where: { Name: Name } })
		if(tmp) return res.sendStatus(409)

		bcrypt.hash(Password, 10).then( async (hashedPassword) => {

			await Users.create({
				Name: Name,
				Password: hashedPassword
			})

			const user = await Users.findOne({ where: { Name: Name, Password: hashedPassword } }).catch((err) => {
				console.log('POST /Registration', err)
				return res.sendStatus(500)
			})

			sendToken(res, user)
			
		})

	} catch (err) {
		console.log('POST /Registration', err)
		res.sendStatus(500)
	}

})





module.exports = router
