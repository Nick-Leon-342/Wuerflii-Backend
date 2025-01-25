

const express = require('express')
const router = express.Router()

const { isInt } = require('../../IsDataType')
const CreateNewGame = require('../../CreateNewGame')
const { sort__list_players } = require('../../Functions')

const { 
	Association__Players_And_FinalScores_With_Sessions, 

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





router.get('', async (req, res) => {
	
	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		let user = await Users.findOne({ 
			where: { id: UserID }, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					through: { as: 'asso' }, 
					include: Table_Columns, 
				}]
			}], 
			order: [[ { model: Sessions }, { model: Players }, { model: Table_Columns }, 'Column', 'ASC' ]], 
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
			return res.status(404).send('Players not found.')
		}


		// Create new game if it doesn't exist
		let list_players
		if(!user.Sessions[0].Players[0].Table_Columns[0]) {

			list_players = await CreateNewGame({
				List_Players: sort__list_players(user.Sessions[0].Players), 
				Columns: user.Sessions[0].Columns, 
				Session: user.Sessions[0], 
				date: new Date(),
				transaction, 
			})

		}


		await transaction.commit()
		res.json({
			User: filter_user(user), 
			Session: filter_session(user.Sessions[0]),
			List_Players: list_players || sort__list_players(user.Sessions[0].Players).map(player => {
				return {
					...filter_player(player), 
					List_Table_Columns: player.Table_Columns.map(table_column => filter_table_column(table_column))
				}
			}), 
		})


	} catch(err) {
		console.log('GET /game\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

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
						through: { as: 'asso' }, 
						include: Table_Columns
					}, 
				]
			}], 
			order: [
				[ { model: Sessions }, { model: Players }, { model: Table_Columns }, 'Column', 'ASC' ], 
			]
		})

		
		
		// __________________________________________________ Check if everything exists __________________________________________________

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
			return res.status(404).send('Players not found.')
		}


		// Check if table_columns exist
		if(!user.Sessions[0].Players[0].Table_Columns[0]) {
			await transaction.rollback()
			return res.status(404).send('Table_Columns not found.')
		}



		// __________________________________________________ Check if some entries are missing __________________________________________________

		if(!Surrendered_PlayerID && user.Sessions[0].Players.some(p => p.Table_Columns.some(tc => !tc.Bottom_Table_TotalScore))) {
			await transaction.rollback()
			return res.status(409).send('Missing entries.')
		}



		const session = user.Sessions[0]
		const list_players = sort__list_players(session.Players)

		// Get latest finalscore
		const final_score = await FinalScores.findOne({
			order: [[ 'createdAt', 'DESC' ]], 
			transaction, 
			include: [{
				model: Players, 
				required: true, 
				through: {
					where: { SessionID }, 
					as: 'asso', 
				}
			}], 
		})



		// __________________________________________________ Create finalscore and tablearchive __________________________________________________

		const created_final_score = await FinalScores.create({ 
			Start: session.CurrentGameStart, 
			End: date,
			Columns: session.Columns, 
			Surrendered: Boolean(Surrendered_PlayerID),
		}, { transaction })

		await Table_Archives.create({ 
			FinalScoreID: created_final_score.id, 
			Table: list_players.map(player => {
				return {
					PlayerID: player.id, 
					List_Table_Columns: player.Table_Columns.map(table_column => filter_table_column(table_column))
				}
			}), 
		}, { transaction })


		// Add year to list for /session/preview if necessary (if game has been played in a new unlisted year)

		const tmp_view_list_years = [ ...session.View_List_Years ]
		if(!tmp_view_list_years.includes(date.getFullYear())) tmp_view_list_years.push(date.getFullYear())

		await session.update({ 
			LastPlayed: date, 
			CurrentGameStart: null, 
			View_List_Years: tmp_view_list_years, 
		}, { transaction })



		// __________________________________________________ Calculate scores and winner __________________________________________________

		const List_Winner = []
		let highestScore = 0
		const PlayerScores = {}

		for(const p of list_players) {

			let tmp_score = 0
			for(const tc of p.Table_Columns) { tmp_score += tc.TotalScore }
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


		for(const player of list_players) {
			const id = player.id
			let a	// Association between player and finalscore
			if(final_score) for(const p of final_score.Players) { if(p.id === id) a = p.asso }

			const IsWinner = List_Winner.includes(id)
			const add_win = IsWinner ? 1 : 0

			await Association__Players_And_FinalScores_With_Sessions.create({
				SessionID, 
				PlayerID: id, 
				FinalScoreID: created_final_score.id, 

				IsWinner, 
				Score: PlayerScores[id], 

				Wins__Before: 					0 + 		(!a ? 0 : a.Wins__After), 
				Wins__After: 					add_win + 	(!a ? 0 : a.Wins__After), 
				Wins__Before_Year: 				0 + 		(!a ? 0 : a.Wins__After_Year), 
				Wins__After_Year: 				add_win + 	(!a ? 0 : a.Wins__After_Year), 
				Wins__Before_Month: 			0 + 		(!a ? 0 : a.Wins__After_Month), 
				Wins__After_Month: 				add_win + 	(!a ? 0 : a.Wins__After_Month), 
				Wins__Before_SinceCustomDate: 	0 +			(!a ? 0 : a.Wins__After_SinceCustomDate), 
				Wins__After_SinceCustomDate: 	add_win + 	(!a ? 0 : a.Wins__After_SinceCustomDate), 
			}, { transaction })
		}



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

		await user.Sessions[0].update({ CurrentGameStart: null }, { transaction })

		for(const player of user.Sessions[0].Players) {
			await player.update({ Gnadenwurf: false }, { transaction })
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





router.get('/end', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID || !FinalScoreID) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {

		
		// Get user and session
		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					through: { 
						as: 'asso', 
						attributes: [ 'Order_Index' ], 
					}, 
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
			return res.status(404).send('Players not found.')
		}


		const finalscore = await FinalScores.findByPk(FinalScoreID, {
			transaction, 
			include: [{
				model: Players, 
				required: true, 
				through: {
					where: { SessionID }, 
					as: 'asso', 
				}
			}], 
		})


		// Check if finalscore exists
		if(!finalscore) {
			await transaction.rollback()
			return res.status(404).send('FinalScore not found.')
		}


		await transaction.commit()
		res.json({ 
			User: filter_user(user), 
			FinalScore: filter_finalscore(finalscore), 
			List_Players: sort__list_players(user.Sessions[0].Players).map(player => filter_player(player)), 
		})


	} catch(err) {
		console.log('GET /game/end\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
