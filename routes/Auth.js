

const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const sendToken = require('./SendToken')
const { isString } = require('../IsDataType')
const { handle_error } = require('../handle_error')

const { 
	Users, 
	sequelize
} = require('../models')

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
} = require('../utils')





router.get('/regex', (req, res) => {

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

	if(!Name && !isString(Name)) return res.status(400).send('Name invalid.')
	if(!Password && !isString(Password)) return res.status(400).send('Password invalid.')


	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const user = await Users.findOne(
			{ where: { Name } }, 
			transaction, 
		)

		if(!user || !await bcrypt.compare(Password, user.Password)) {
			await transaction.rollback()
			return res.status(409).send('Wrong credentials!')
		}
		

		// __________________________________________________ Response __________________________________________________

		await sendToken({
			UserID: user.id, 
			transaction, 
			res, 
		})


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'POST /auth/login')
	}

})

router.post('/registration', async (req, res) => {
	
	const { Name, Password } = req.body
	
	if(!Name || !(new RegExp(NAME_REGEX)).test(Name)) return res.status(400).send('Name invalid.')
	if(!Password || !(new RegExp(PASSWORD_REGEX)).test(Password)) return res.status(400).send('Password invalid.')


	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const tmp__user = await Users.findOne({ where: { Name: Name }, transaction })
		if(tmp__user) return res.status(409).send('Username already taken.')
	

		// __________________________________________________ Hash Password __________________________________________________

		const hashedPassword = await bcrypt.hash(Password, 10)


		// __________________________________________________ Create New User __________________________________________________

		const user = await Users.create({
			Password: hashedPassword, 
			DarkMode: false, 
			Name: Name,

			Show_Session_Names: true, 
			Show_Session_Date: true, 
			View_Sessions: 'Last_Played', 
			View_Sessions_Desc: true, 

			Statistics_View: 'statistics_overall', 
			Statistics_View_Month: new Date().getMonth() + 1, 
			Statistics_View_Year: new Date().getFullYear(), 
		}, { transaction })


		// __________________________________________________ Response __________________________________________________

		await sendToken({
			UserID: user.id, 
			transaction, 
			res, 
		})


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'POST /auth/registration')
	}

})





module.exports = router
