

const express = require('express')
const router = express.Router()

const { MAX_LENGTH_PLAYER_NAME, MAX_PLAYERS, MAX_COLUMNS, MAX_LENGTH_SESSION_NAME } = require('../../utils')
const { isInt, isArray, isString, isColor } = require('../../IsDataType')
const CreateNewGame = require('../../CreateNewGame')

const { 
	Players, 
	Sessions, 
	Users, 
	sequelize, 
} = require('../../models')
const { filter_user } = require('../../Filter_DatabaseJSON')





router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID } = req.body
	const date = new Date()

	if(!SessionID || !isInt(SessionID)) return res.sendStatus(400)
	

	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({ 
			where: { id: UserID }, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: Players
			}], 
			order: [
				[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
			]
		})

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}


		await CreateNewGame({
			List_Players: user.Sessions[0].Players, 
			transaction, 
			Session: user.Sessions[0], 
			Columns: user.Sessions[0].Columns, 
			date,
		})

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.log('PATCH /game/create\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
