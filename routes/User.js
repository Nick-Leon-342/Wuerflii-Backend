

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { 
	Users, 
	sequelize
} = require('../models')
const sendToken = require('./SendToken')
const { isBoolean, isString } = require('../IsDataType')






router.patch('/', async (req, res) => {

	const { UserID } = req
	const { Name, Password, DarkMode } = req.body

	if(
		(Name && !isString(Name)) || 
		(Password && !isString(Password)) || 
		((DarkMode !== undefined || DarkMode !== null) && !isBoolean(DarkMode))
	) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {
		

		const updateJSON = {}
		if(Name) {

			if(!(new RegExp(NAME_REGEX)).test(Name)) return res.sendStatus(400)

			const tmp = await Users.findOne({ 
				where: { Name }, 
				transaction, 
			})
			if(tmp) {
				await transaction.rollback()
				res.status(409).send('Username already taken.')
				return 
			}

			updateJSON['Name'] = Name

		} 
		
		if(Password) {

			if(!(new RegExp(PASSWORD_REGEX)).test(Password)) return res.sendStatus(400)

			const hashedPassword = await bcrypt.hash(Password, 10)
			updateJSON['Password'] = hashedPassword

		}

		if(isBoolean(DarkMode)) updateJSON.DarkMode = DarkMode


		await Users.update(
			updateJSON, 
			{ 
				where: { id: UserID }, 
				transaction, 
			}
		)

		await sendToken({
			transaction, 
			UserID, 
			res, 
		})


	} catch(err) {
		console.log('PATCH /user\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
