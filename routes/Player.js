

const express = require('express')
const router = express.Router()
const { filter_player, filter_session, filter_finalscore, filter_tablearchive } = require('../Filter_DatabaseJSON')
const { isInt, isArray, isBoolean, isString, isColor } = require('../IsDataType')
const { generateJoinCode, createNewGame } = require('../CreateNewGame')
const { 
	Players, 
	Users, 
	Sessions,
	sequelize, 
} = require('../models')





router.patch('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const { PlayerID, Gnadenwurf } = req.body

	if(!SessionID || ((Gnadenwurf !== null && Gnadenwurf !== undefined) && !isBoolean(Gnadenwurf))) return res.sendStatus(400)

	
	const transaction = await sequelize.transaction()
	try {

		
		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					where: { id: PlayerID }, 
				}]
			}]
		})

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}

		await user.Sessions[0].Players[0].update({
			Gnadenwurf
		}, { transaction })

		await transaction.commit()

		res.sendStatus(204)


	} catch(err) {
		console.log('PATCH /player\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
