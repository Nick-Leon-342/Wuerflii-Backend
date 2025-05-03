

const express = require('express')
const router = express.Router()

const { handle_error } = require('../../handle_error')
const { sort__list_players } = require('../../Functions')
const { filter_player } = require('../../Filter_DatabaseJSON')
const { MAX_PLAYERS, MAX_LENGTH_PLAYER_NAME } = require('../../utils')
const { isArray, isString, isColor, isInt } = require('../../IsDataType')

const { 
	Association__Sessions_And_Players, 

	Players, 
	Sessions, 
	Users,
	sequelize,
} = require('../../models')





router.get('', (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!SessionID) return res.status(400).send('SessionID invalid.')


	Users.findByPk(UserID, { 
		include: [{
			model: Sessions, 
			required: false, 
			where: { id: SessionID }, 
			include: [{
				model: Players, 
				through: { as: 'asso' }, 
			}], 
		}], 
	}).then(user => {


		if(!user) return res.status(404).send('User not found.')
		if(!user.Sessions[0]) return res.status(404).send('Session not found.')

		res.json(sort__list_players(user.Sessions[0].Players).map(filter_player))


	}).catch(async err => {
		await handle_error(res, err, 'GET /session/players')
	})

})

router.post('', async (req, res) => {

	// ____________________________________________________________________________________________________ Add players to session (first time) ____________________________________________________________________________________________________

	const { UserID } = req
	const { SessionID, List_Players } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(
		!List_Players || !isArray(List_Players) || List_Players.length < 1 || List_Players.length > MAX_PLAYERS || 
		List_Players.some(player => (!player.Name || !isString(player.Name) || player.Name.length > MAX_LENGTH_PLAYER_NAME || !player.Color || !isColor(player.Color)))
	) return res.status(400).send('List_Players invalid.')


	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				required: false, 
				where: { id: SessionID }, 
				include: Players, 
			}], 
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

		// Check if session already has players
		if(user.Sessions[0].Players.length > 0) {
			await transaction.rollback()
			return res.status(409).send('Players already exist.')
		}
		

		// __________________________________________________ Create players __________________________________________________

		const list_players = []
		for(let i = 0; List_Players.length > i; i++) {
			const player = await Players.create({ 
				Name: List_Players[i].Name, 
				Color: List_Players[i].Color, 
			}, { transaction })
			
			const asso = await Association__Sessions_And_Players.create({
				SessionID: user.Sessions[0].id, 
				PlayerID: player.id, 

				Gnadenwurf_Used: false, 
				Order_Index: i, 
			}, { transaction })

			list_players.push(filter_player({
				...player.dataValues, 
				asso, 
			}))
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json({ List_Players: list_players })


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'POST /session/players')
	}

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, List_Players } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(
		!List_Players || 
		!List_Players.every(p => (
			p.id && isInt(p.id) && 
			p.Name && isString(p.Name) &&
			p.Color && isColor(p.Color)
		)) ||
		!List_Players.every(p => p.Name.length > 0 && p.Name.length <= MAX_LENGTH_PLAYER_NAME)
	) return res.status(400).send('List_Players invalid.')

	
	const transaction = await sequelize.transaction()
	try {

		
		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					through: { as: 'asso' }, 
				}], 
			}]
		})

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}

		// Check if session exists
		if(!user.Sessions[0]){
			await transaction.rollback()
			return res.status(404).send('Session not found.')
		}

		// Check if players exist
		if(!user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.status(404).send('Players not found.')
		}


		// __________________________________________________ Check if every player exists in both lists __________________________________________________

		const tmp_list_players = user.Sessions[0].Players
		if(
			tmp_list_players.length !== List_Players.length || 
			!tmp_list_players.every(player => List_Players.some(p => p.id === player.id))
		) {
			await transaction.rollback()
			return res.status(400).send(`List_Players doesn't match.`)
		}


		// __________________________________________________ Update players __________________________________________________

		for(let i = 0; List_Players.length > i; i++) {
			const p = List_Players[i]

			for(const player of tmp_list_players) {
				if(player.id === p.id) {
					await player.update({
						Name: p.Name, 
						Color: p.Color, 
					}, { transaction })

					await Association__Sessions_And_Players.update({ Order_Index: i }, {
						transaction, 
						where: {
							SessionID: user.Sessions[0].id, 
							PlayerID: player.id, 
						}, 
					})
					continue
				}
			}
		}


		// __________________________________________________ Response __________________________________________________
		
		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'PATCH /session/players')
	}

})





module.exports = router
