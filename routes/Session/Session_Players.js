

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

	if(
		!SessionID || !isInt(SessionID) || 
		!List_Players || !isArray(List_Players) || List_Players.length < 1 || List_Players.length > MAX_PLAYERS || 
		List_Players.some(player => (!player.Name || !isString(player.Name) || player.Name.length > MAX_LENGTH_PLAYER_NAME || !player.Color || !isColor(player.Color)))
	) return res.sendStatus(400)


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


		await CreateNewGame({
			List_Players: list_created_players, 
			date: session.CurrentGameStart, 
			Columns: session.Columns, 
			Session: session, 
			transaction, 
		})


		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		console.log('POST /session/players\n', err)
		res.sendStatus(500)
	}

})





module.exports = router
