

const express = require('express')
const router = express.Router()

const CreateNewGame = require('../../CreateNewGame')
const { Players, Sessions, sequelize } = require('../../models')
const { isInt, isArray, isString, isColor } = require('../../IsDataType')
const { MAX_LENGTH_PLAYER_NAME, MAX_PLAYERS, MAX_COLUMNS } = require('../../utils_env')





router.get('/', (req, res) => {

	res.json({
		MAX_PLAYERS,
		MAX_COLUMNS,
		MAX_LENGTH_PLAYER_NAME
	})

})

router.post('/', async (req, res) => {

	const { UserID } = req
	const { Name, Columns, List_Players } = req.body
	const date = new Date()

	if(
		!Name || !isString(Name) || 
		!Columns || !isInt(Columns) || Columns < 1 || Columns > MAX_COLUMNS || 
		!List_Players || !isArray(List_Players) || List_Players.length < 1 || List_Players.length > MAX_PLAYERS || 
		List_Players.some(player => (!player.Name || !isString(player.Name) || player.Name.length > MAX_LENGTH_PLAYER_NAME || !player.Color || !isColor(player.Color)))
	) return res.sendStatus(400)


	// Create session 
	const transaction = await sequelize.transaction()
	try {

		const session = await Sessions.create({
			UserID, 
			Name,
			Columns, 
			InputType: 'type',
			List_PlayerOrder: [0],
			ShowScores: true, 

			LastPlayed: date, 
		}, { transaction })
		

		const list_created_players = []
		for(const p of List_Players) {
			const player = await Players.create({ 
				SessionID: session.id, 
				Name: p.Name, 
				Color: p.Color, 
				Gnadenwurf: false, 
			}, { transaction })
			list_created_players.push(player)
		}

		console.log(list_created_players.map(p => p.id))
		await session.update({ List_PlayerOrder: list_created_players.map(p => p.id) }, { transaction })

		await CreateNewGame({
			List_Players: list_created_players, 
			transaction, 
			session, 
			Columns, 
			UserID, 
		})

		await transaction.commit()
		res.json({ SessionID: session.id })


	} catch(err) {
		await transaction.rollback()
		console.log('POST /game/create\n', err)
		res.sendStatus(500)
	}

})





module.exports = router
