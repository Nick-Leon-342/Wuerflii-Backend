

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { 
	Users, 
	sequelize
} = require('../models')
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

router.post('/login', async (req, res) => {

    const { Name, Password } = req.body
	if (!Name || !Password) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne(
			{ where: { Name } }, 
			transaction, 
		)

		if(!user || !await bcrypt.compare(Password, user.Password)) {
			await transaction.rollback()
			res.status(409).send('Wrong credentials!')
			return 
		}
		
		await sendToken({
			UserID: user.id, 
			transaction, 
			res, 
		})


	} catch(err) {
		await transaction.rollback()
		console.log('POST /auth/login\n', err)
		res.sendStatus(500)
	}

})

router.post('/registration', async (req, res) => {
	
	const { Name, Password } = req.body
	if (!Name || !(new RegExp(NAME_REGEX)).test(Name) || !Password || !(new RegExp(PASSWORD_REGEX)).test(Password)) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const tmp = await Users.findOne({ where: { Name: Name }, transaction })
		if(tmp) return res.status(409).send('Username already taken.')
	
		const hashedPassword = await bcrypt.hash(Password, 10)
	
		const user = await Users.create({
			Password: hashedPassword, 
			DarkMode: false, 
			Name: Name,
			Show_Session_Names: true, 
			Show_Session_Date: true, 
			View_Sessions: 'Last_Played', 
			View_Sessions_Desc: true, 
		}, { transaction })

		await sendToken({
			UserID: user.id, 
			transaction, 
			res, 
		})


	} catch(err) {
		await transaction.rollback()
		console.log('POST /auth/registration\n', err)
		res.sendStatus(500)
	}

})





module.exports = router
