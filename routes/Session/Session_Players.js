

const express = require('express')
const router = express.Router()

const CreateNewGame = require('../../CreateNewGame')
const { MAX_PLAYERS, MAX_LENGTH_PLAYER_NAME } = require('../../utils')
const { isArray, isString, isColor, isInt } = require('../../IsDataType')
const { filter_player, filter_user } = require('../../Filter_DatabaseJSON')

const { 
	Players, 
	Sessions, 
	Users,
	sequelize,
} = require('../../models')





router.get('', (req, res) => {

	const { UserID } = req
	const { session_id } = req.query


	Users.findOne({ 
		where: { id: UserID }, 
		include: [{
			model: Sessions, 
			where: { id: session_id }, 
			include: Players, 
		}], 
	}).then(user => {


		if(!user) return res.status(404).send('User not found.')
		if(session_id && !user.Sessions[0]) return res.status(404).send('Session not found.')

		res.json({
			MAX_PLAYERS,
			MAX_LENGTH_PLAYER_NAME, 
			User: filter_user(user), 
			List_Players: user.Sessions[0].Players.map(player => filter_player(player))
		})


	}).catch(err => {
		console.log('GET /session/players\n', err)
		res.sendStatus(500)
	})

})

router.post('', async (req, res) => {

	const { UserID } = req
	const { SessionID, List_Players } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID not provided or invalid.')
	if(
		!List_Players || !isArray(List_Players) || List_Players.length < 1 || List_Players.length > MAX_PLAYERS || 
		List_Players.some(player => (!player.Name || !isString(player.Name) || player.Name.length > MAX_LENGTH_PLAYER_NAME || !player.Color || !isColor(player.Color)))
	) return res.status(400).send('List_Players not provided or invalid.')


	const transaction = await sequelize.transaction()
	try {

		const session = await Sessions.findOne({ 
			transaction, 
			where: {
				id: SessionID, 
				UserID, 
			}, 
		})
		

		const list_created_players = []
		for(let i = 0; List_Players.length > i; i++) {
			const player = await Players.create({ 
				SessionID: session.id, 
				Name: List_Players[i].Name, 
				Color: List_Players[i].Color, 
				Gnadenwurf: false, 
				Order_Index: i, 
			}, { transaction })
			list_created_players.push(player)
		}


		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		console.log('POST /session/players\n', err)
		res.sendStatus(500)
	}

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, List_Players } = req.body

	if(
		!SessionID || !isInt(SessionID) || 
		!List_Players || 
		!List_Players.every(p => (
			p.id && isInt(p.id) && 
			p.Name && isString(p.Name) &&
			p.Color && isColor(p.Color)
		))
	) return res.sendStatus(400)

	// Check if length of user.Name-length is valid
	if(!List_Players.every(p => p.Name.length > 0 && p.Name.length <= MAX_LENGTH_PLAYER_NAME)) return res.status(409).send('Name length not valid.')

	
	const transaction = await sequelize.transaction()
	try {

		
		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: Players
			}]
		})


		// ____________________ Check if everything has been found ____________________

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}


		// ____________________ Check if every player exists in both lists ____________________

		const tmp_list_players = user.Sessions[0].Players
		if(
			tmp_list_players.length !== List_Players.length || 
			!tmp_list_players.every(player => List_Players.some(p => p.id === player.id))
		) {
			await transaction.rollback()
			return res.sendStatus(400)
		}


		// ____________________ Update players ____________________

		for(let i = 0; List_Players.length > i; i++) {
			const p = List_Players[i]

			for(const player of tmp_list_players) {
				if(player.id === p.id) {
					await player.update({
						Name: p.Name, 
						Color: p.Color, 
						Order_Index: i
					}, { transaction })
					continue
				}
			}
		}

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.log('PATCH /session/players\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
