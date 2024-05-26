

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { Users } = require('../models')
const sendToken = require('./SendToken')

const {
	NAME_MIN_CHARACTER, 
	NAME_MAX_CHARACTER, 
	
	NAME_REGEX, 
	NAME_REGEX_MINMAX, 
	NAME_REGEX_LETTERFIRST, 
	NAME_REGEX_ALLOWEDCHARS, 


	PASSWORD_MIN_CHARACTER, 
	PASSWORD_MAX_CHARACTER, 

	PASSWORD_REGEX, 
	PASSWORD_REGEX_MINMAX, 
	PASSWORD_REGEX_ALLOWEDCHARS, 
	PASSWORD_REGEX_ALLOWEDSYMBOLS, 
} = require('../Regex')





router.get('/regex', async (req, res) => {

	res.json({
		NAME_MIN_CHARACTER, 
		NAME_MAX_CHARACTER, 
		
		NAME_REGEX, 
		NAME_REGEX_MINMAX, 
		NAME_REGEX_LETTERFIRST, 
		NAME_REGEX_ALLOWEDCHARS, 
	
	
		PASSWORD_MIN_CHARACTER, 
		PASSWORD_MAX_CHARACTER, 
	
		PASSWORD_REGEX, 
		PASSWORD_REGEX_MINMAX, 
		PASSWORD_REGEX_ALLOWEDCHARS, 
		PASSWORD_REGEX_ALLOWEDSYMBOLS, 
	})

})





// __________________________________________________ Login __________________________________________________

router.post('/login', async (req, res) => {

    const { Name, Password } = req.body
	if (!Name || !Password) return res.sendStatus(400)

	const user = await Users.findOne({ where: { Name } }).catch((err) => {
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

		if(!(new RegExp(NAME_REGEX)).test(Name)) return res.sendStatus(400)

		const tmp = await Users.findOne({ where: { Name } })
		if(tmp) return res.sendStatus(409)

		updateJSON['Name'] = Name

	} 
	
	if(Password) {

		if(!(new RegExp(PASSWORD_REGEX)).test(Password)) return res.sendStatus(400)

		const hashedPassword = await bcrypt.hash(Password, 10).then((hP) => {return hP})

		updateJSON['Password'] = hashedPassword

	}

	Users.findOne({ where: { id: UserID }}).then(async (user) => {

		user.update(updateJSON).then(() => {
			sendToken(res, user)
		}).catch(() => {
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('PATCH /login', err)
		res.sendStatus(403)
	})

})





// __________________________________________________ Registration __________________________________________________

router.post('/registration', async (req, res) => {
	
	const { Name, Password } = req.body
	if (!Name || !(new RegExp(NAME_REGEX)).test(Name) || !Password || !(new RegExp(PASSWORD_REGEX)).test(Password)) return res.sendStatus(400)

	const tmp = await Users.findOne({ where: { Name: Name } }).catch((err) => {
		console.log('POST /auth/registration findOne user', err)
		return res.sendStatus(500)
	})
	if(tmp) return res.sendStatus(409)

	bcrypt.hash(Password, 10).then( async (hashedPassword) => {

		Users.create({
			Name: Name,
			Password: hashedPassword
		}).then((user) => {

			sendToken(res, user)

		}).catch((err) => {
			console.log('POST /auth/registration create user', err)
			return res.sendStatus(500)
		})
		
	}).catch((err) => {
		console.log('POST /auth/registration bcrypt', err)
		res.sendStatus(500)
	})

})





module.exports = router
