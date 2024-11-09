

const express = require('express')
const router = express.Router()

const { MAX_LENGTH_PLAYER_NAME, MAX_PLAYERS, MAX_COLUMNS } = require('../../utils_env')
const { isInt, isArray, isString, isColor } = require('../../IsDataType')
const { Players, Sessions, sequelize } = require('../../models')
const CreateNewGame = require('../../CreateNewGame')





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
			InputType: 'select',
			List_PlayerOrder: [0],
			ShowScores: true, 

			View_Month: new Date().getMonth(), 
			View_Year: new Date().getFullYear(), 
			View: 'show_total', 

			LastPlayed: date, 
		}, { transaction })
		

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
			transaction, 
			session, 
			Columns, 
			UserID, 
			date,
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
