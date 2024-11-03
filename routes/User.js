

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { 
	Users, 
	sequelize
} = require('../models')
const sendToken = require('./SendToken')






router.patch('/', async (req, res) => {

	const { UserID } = req
	const { Name, Password } = req.body

	if(!Name && !Password) return res.sendStatus(400)


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


		await Users.update(
			{ where: { id: UserID } }, 
			transaction, 
			updateJSON, 
		)

		await sendToken({
			transaction, 
			UserID, 
			res, 
		})


	} catch(err) {
		await transaction.fallback()
		console.log('PATCH /user\n', err)
		res.sendStatus(500)
	}

})





module.exports = router
