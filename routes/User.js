

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const { 
	Association__Players_And_FinalScores_With_Sessions, 

	Users, 
	Sessions, 
	Players, 
	FinalScores, 
	sequelize, 
} = require('../models')

const sendToken = require('./SendToken')
const { isBoolean, isString } = require('../IsDataType')
const { REFRESH_TOKEN_SAMESITE, REFRESH_TOKEN_SECURE, REFRESH_TOKEN_MAX_AGE_IN_MINUTES, NAME_REGEX, PASSWORD_REGEX } = require('../utils')
const { filter_user } = require('../Filter_DatabaseJSON')






router.get('', (req, res) => {

	const { UserID } = req

	Users.findOne({ where: { id: UserID } }).then(user => {

		if(!user) return res.status(404).send('User not found.')

		res.json(filter_user(user))

	}).catch(err => {
		console.log('GET /user\n', err)
		res.sendStatus(500)
	})

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { 
		Name, 
		Password, 
		DarkMode, 
		Show_Session_Names, 
		Show_Session_Date, 
		View_Sessions, 
		View_Sessions_Desc, 
	} = req.body


	if(Name && !isString(Name)) return res.status(400).send('Name invalid.')
	if(Password && !isString(Password)) return res.status(400).send('Password invalid.')
	if(DarkMode !== undefined && !isBoolean(DarkMode)) return res.status(400).send('DarkMode invalid.')
	if(Show_Session_Names !== undefined && !isBoolean(Show_Session_Names)) return res.status(400).send('Show_Session_Names invalid.')
	if(Show_Session_Date !== undefined && !isBoolean(Show_Session_Date)) return res.status(400).send('Show_Session_Date invalid.')
	if(View_Sessions && !isString(View_Sessions) && ['Created', 'Last_Played', 'Name', 'Players'].includes(View_Sessions)) return res.status(400).send('View_Sessions invalid.')
	if(View_Sessions_Desc !== undefined && !isBoolean(View_Sessions_Desc)) return res.status(400).send('View_Sessions_Desc invalid.')


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({
			where: { id: UserID }, 
			transaction
		})


		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}
		

		const updateJSON = {}
		if(Name) {

			if(!(new RegExp(NAME_REGEX)).test(Name)) return res.status(400).send('Name invalid.')

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

			if(!(new RegExp(PASSWORD_REGEX)).test(Password)) return res.status(400).send('Password invalid.')

			const hashedPassword = await bcrypt.hash(Password, 10)
			updateJSON['Password'] = hashedPassword

		}

		if(isBoolean(DarkMode)) updateJSON.DarkMode = DarkMode
		if(isBoolean(Show_Session_Names)) updateJSON.Show_Session_Names = Show_Session_Names
		if(isBoolean(Show_Session_Date)) updateJSON.Show_Session_Date = Show_Session_Date
		if(View_Sessions) updateJSON.View_Sessions = View_Sessions
		if(isBoolean(View_Sessions_Desc)) updateJSON.View_Sessions_Desc = View_Sessions_Desc


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


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findByPk(UserID, { 
			transaction, 
			include: [{
				model: Sessions, 
				include: Players, 
			}], 
		})


		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}


		// Remove all sessions
		for(const session of user.Sessions) {

			// Get all associations
			const list_associations = await Association__Players_And_FinalScores_With_Sessions.findAll({
				where: { SessionID: session.id }, 
				transaction, 
			})
	
			// Remove finalscores through association
			for(const association of list_associations) {
				await FinalScores.destroy({
					where: { id: association.FinalScoreID }, 
					transaction, 
				})
			}
	
	
			// Remove players 
			for(const player of session.Players) {
				await player.destroy({ transaction })
			}
	
	
			// Remove session
			await session.destroy({ transaction })

		}

		await user.destroy({ transaction })


		await transaction.commit()
		res.clearCookie('Kniffel_RefreshToken', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
		res.sendStatus(204)


	} catch(err) {
		console.log('DELETE /user\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
