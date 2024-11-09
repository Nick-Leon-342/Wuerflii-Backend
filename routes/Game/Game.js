

const express = require('express')
const router = express.Router()

const { isInt } = require('../../IsDataType')

const { 
	FinalScores, 
	Sessions, 
	Players, 
	Table_Columns, 
	Table_Archives, 
	Users, 
	sequelize, 
} = require('../../models')

const { 
	filter_player,
	filter_session,
	filter_finalscore,

	filter_table_column, 

	filter_user,
} = require('../../Filter_DatabaseJSON')

router.use('/create', require('./Game_Create'))





router.get('', (req, res) => {
	
	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.sendStatus(400)


	Users.findOne({ 
		where: { id: UserID }, 
		include: [{
			model: Sessions, 
			where: { id: SessionID }, 
			include: [{
				model: Players, 
				include: Table_Columns
			}]
		}], 
		order: [
			[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
			[ { model: Sessions }, { model: Players }, { model: Table_Columns }, 'Column', 'ASC' ]
		]
	}).then(user => {
		

		// TODO check if user etc. exists (return 404)

		res.json({
			User: filter_user(user), 
			Session: filter_session(user.Sessions[0]),
			List_Players: user.Sessions[0].Players.map(p => {
				return {
					...filter_player(p), 
					List_Table_Columns: p.Table_Columns.map(tc => filter_table_column(tc))
				}
			}), 
		})


	}).catch(err => {
		console.log('GET /game\n', err)
		res.sendStatus(500)
	})

})

router.post('', async (req, res) => {
	
	const { UserID } = req
	const { SessionID, Surrendered_PlayerID } = req.body
	const date = new Date()

	
	if(
		!SessionID || !isInt(SessionID) || 
		(Surrendered_PlayerID && !isInt(Surrendered_PlayerID))
	) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [
					{
						model: Players, 
						include: Table_Columns
					}, 
					{ model: FinalScores }, 
				]
			}], 
			order: [
				[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
				[ { model: Sessions }, { model: Players }, { model: Table_Columns }, 'Column', 'ASC' ], 
				[ { model: Sessions }, { model: FinalScores }, 'createdAt', 'DESC' ],
			]
		})



		// __________________________________________________ Check if everything has been found __________________________________________________

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0].Table_Columns[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}



		// __________________________________________________ Check if some entries are missing __________________________________________________

		if(user.Sessions[0].Players.some(p => p.Table_Columns.some(tc => !tc.Bottom_Table_TotalScore))) {
			await transaction.rollback()
			return res.status(409).send('Missing entries.')
		}



		const session = user.Sessions[0]
		const list_players = session.Players
		const final_score = session.FinalScores[0]



		// __________________________________________________ Initialize scores __________________________________________________

		const tmp_player_scores = {}
		for(const player of list_players) { tmp_player_scores[player.id] = 0 }
		const tmp_final_score = {
			ScoresBefore: { ...tmp_player_scores }, 
			ScoresAfter: { ...tmp_player_scores }, 
			ScoresBefore_Month: { ...tmp_player_scores }, 
			ScoresAfter_Month: { ...tmp_player_scores }, 
			ScoresBefore_Year: { ...tmp_player_scores }, 
			ScoresAfter_Year: { ...tmp_player_scores }, 
			ScoresBefore_SinceCustomDate: { ...tmp_player_scores }, 
			ScoresAfter_SinceCustomDate: { ...tmp_player_scores }, 
		}

		if(final_score) {

			tmp_final_score.ScoresBefore = { ...final_score.ScoresAfter }
			tmp_final_score.ScoresAfter = { ...final_score.ScoresAfter }

			if(new Date(final_score.End).getFullYear() === date.getFullYear() && new Date(final_score.End).getMonth() === date.getMonth()) {
				tmp_final_score.ScoresBefore_Month = { ...final_score.ScoresAfter_Month }
				tmp_final_score.ScoresAfter_Month = { ...final_score.ScoresAfter_Month }
			}

			if(new Date(final_score.End).getFullYear() === date.getFullYear()) {
				tmp_final_score.ScoresBefore_Year = { ...final_score.ScoresAfter_Year }
				tmp_final_score.ScoresAfter_Year = { ...final_score.ScoresAfter_Year }
			}

			if(final_score.ScoresAfter_SinceCustomDate) {
				tmp_final_score.ScoresBefore_SinceCustomDate = { ...final_score.ScoresAfter_SinceCustomDate }
				tmp_final_score.ScoresAfter_SinceCustomDate = { ...final_score.ScoresAfter_SinceCustomDate }
			}

		}



		// __________________________________________________ Calculate scores and winner __________________________________________________

		const List_Winner = []
		let highestScore = 0
		const PlayerScores = {}

		for(const p of list_players) { 
			tmp_final_score[p.id] = 0 

			let tmp_score = 0
			for(const tc of p.Table_Columns) { tmp_score += tc.Bottom_Table_TotalScore }
			PlayerScores[p.id] = tmp_score

			if(highestScore < tmp_score) {
				List_Winner.length = 0
				List_Winner.push(p.id)
				highestScore = tmp_score
			} else if(highestScore === tmp_score) {
				List_Winner.push(p.id)
			}

		}


		// If surrendered, initialize winner
		if(Surrendered_PlayerID) {
			List_Winner.length = 0
			List_Winner.push(Surrendered_PlayerID)
		}


		// Add +1 win for every winner of game
		for(const p of list_players) {
			if(List_Winner.includes(p.id)) {

				tmp_final_score.ScoresAfter[p.id] = tmp_final_score.ScoresBefore[p.id] + 1
				tmp_final_score.ScoresAfter_Month[p.id] = tmp_final_score.ScoresAfter_Month[p.id] + 1
				tmp_final_score.ScoresAfter_Year[p.id] = tmp_final_score.ScoresAfter_Year[p.id] + 1 

				if(tmp_final_score.ScoresAfter_SinceCustomDate) tmp_final_score.ScoresAfter_SinceCustomDate[p.id] = tmp_final_score.ScoresAfter_SinceCustomDate[p.id] + 1

			}
		}



		// __________________________________________________ Create finalscore and tablearchive __________________________________________________

		const created_final_score = await FinalScores.create({ 

			SessionID: session.id, 
			Start: session.CurrentGameStart, 
			End: date,
			Columns: session.Columns, 
			Surrender: Boolean(Surrendered_PlayerID), 
			List_Winner,  
			PlayerScores, 
			
			...tmp_final_score

		}, { transaction })

		await Table_Archives.create({ 
			FinalScoresID: created_final_score.id, 
			Table: list_players.map(p => {
				return {
					PlayerID: p.id, 
					List_Table_Columns: p.Table_Columns.map(tc => filter_table_column(tc))
				}
			}), 
		}, { transaction })

		await session.update({ 
			LastPlayed: date, 
			CurrentGameStart: null, 
		}, { transaction })




		// __________________________________________________ Destroy/Delete current game __________________________________________________

		for(const player of list_players) {
			for(const tc of player.Table_Columns) {
				await tc.destroy({ transaction })
			}
		}

		await transaction.commit()


		res.json({ FinalScoreID: created_final_score.id })


	} catch(err) {
		console.log('POST /game\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})

router.delete('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!SessionID) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [
					{
						model: Players, 
						include: Table_Columns
					}, 
				]
			}], 
		})

		if(!user || !user.Sessions[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}

		for(const player of user.Sessions[0].Players) {
			for(const tc of player.Table_Columns) {
				await tc.destroy({ transaction })
			}
		}

		await transaction.commit()

		res.sendStatus(204)


	} catch(err) {
		console.log('DELETE /game\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





router.get('/end', (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID || !FinalScoreID) return res.sendStatus(400)


	Users.findOne({ 
		where: { id: UserID }, 
		include: [{
			model: Sessions, 
			where: { id: SessionID }, 
			include: [
				{
					model: FinalScores, 
					where: { id: FinalScoreID }
				},
				Players, 
			]
		}], 
		order: [
			[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
		]
	}).then(user => {

		if(!user || !user.Sessions[0] || !user.Sessions[0].FinalScores[0]) return res.sendStatus(404)

		res.json({ 
			FinalScore: filter_finalscore(user.Sessions[0].FinalScores[0]), 
			List_Players: user.Sessions[0].Players.map(p => filter_player(p)), 
		})

	}).catch(err => {
		console.log('GET /game/end\n', err)
		res.sendStatus(500)
	})

})





module.exports = router
