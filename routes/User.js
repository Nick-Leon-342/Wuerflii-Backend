

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { 
	Users, 
	sequelize
} = require('../models')
const sendToken = require('./SendToken')
const { isBoolean, isString } = require('../IsDataType')
const { REFRESH_TOKEN_SAMESITE, REFRESH_TOKEN_SECURE, REFRESH_TOKEN_MAX_AGE_IN_MINUTES } = require('../utils')






router.patch('', async (req, res) => {

	const { UserID } = req
	const { Name, Password, DarkMode } = req.body

	if(
		(Name && !isString(Name)) || 
		(Password && !isString(Password)) || 
		((DarkMode !== undefined || DarkMode !== null) && !isBoolean(DarkMode))
	) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({
			where: { id: UserID }, 
			transaction
		})

		if(!user) {
			await transaction.rollback()
			return res.sendStatus(404)
		}
		

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


		await user.update(updateJSON, { transaction })

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

router.delete('', async (req, res) => {

	const { UserID } = req

	Users.destroy({ where: { id: UserID } }).then(() => {

		res.clearCookie('Kniffel_RefreshToken', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
		res.sendStatus(204)

	}).catch(err => {
		console.log('DELETE /user\n', err)
		res.sendStatus(500)
	})

})





module.exports = router
