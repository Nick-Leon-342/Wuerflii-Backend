

const express = require('express')
const router = express.Router()

const { isInt, isBoolean } = require('../IsDataType')
const { 
	Association__Sessions_And_Players, 

	Players, 
	Sessions,
	Users, 

	sequelize, 
} = require('../models')





router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, PlayerID, Gnadenwurf_Used } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid')
	if(!isBoolean(Gnadenwurf_Used)) return res.status(400).send('Gnadenwurf_Used invalid.')

	
	const transaction = await sequelize.transaction()
	try {

		
		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, { 
			transaction, 
			include: [{
				model: Sessions, 
				required: false, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					required: false, 
					where: { id: PlayerID }, 
					through: { attributes: [ 'Gnadenwurf_Used' ] }, 
				}]
			}]
		})

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}

		// Check if session exists
		if(!user.Sessions[0]) {
			await transaction.rollback()
			return res.status(404).send('Session not found.')
		}

		// Check if players exist
		if(!user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.status(404).send('Player not found.')
		}


		// __________________________________________________ Update Gnadenwurf __________________________________________________

		await Association__Sessions_And_Players.update({ Gnadenwurf_Used }, { 
			transaction, 
			where: {
				PlayerID, 
				SessionID, 
			}
		})


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'PATCH /player')
	}

})





module.exports = router
