

const express = require('express')
const router = express.Router()

const { isInt } = require('../../IsDataType')
const CreateNewGame = require('../../CreateNewGame')
const { handle_error } = require('../../handle_error')
const { sort__list_players } = require('../../Functions')
const { filter_table_column } = require('../../Filter_DatabaseJSON')

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

router.use('/table_columns', require('./Game__Table_Columns'))





router.get('', async (req, res) => {
	
	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.status(400).send('SessionID invalid.')


	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, { 
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


		// __________________________________________________ Create new game if it doesn't exist __________________________________________________

		if(!user.Sessions[0].CurrentGameStart) {

			await CreateNewGame({
				List_Players: sort__list_players(user.Sessions[0].Players), 
				Columns: user.Sessions[0].Columns, 
				Session: user.Sessions[0], 
				date: new Date(),
				transaction, 
			})

		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(204)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'GET /game')
	}

})

router.post('', async (req, res) => {
	
	// ____________________________________________________________________________________________________ Game has been finished or surrendered ____________________________________________________________________________________________________

	const { UserID } = req
	const { SessionID, Surrendered_PlayerID } = req.body
	const date = new Date()

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(Surrendered_PlayerID && !isInt(Surrendered_PlayerID)) return res.status(400).send('Surrendered_PlayerID invalid.')


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
					include: Table_Columns
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
		let same_year = final_score && new Date(final_score.End).getFullYear() === date.getFullYear() ? true : false
		let same_month = final_score && same_year && new Date(final_score.End).getMonth() === date.getMonth() ? true : false


		// Calculate which player has won (could also be a draw and therefore multiple "winners")
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


		// If surrendered, initialize that winner and therefore @Override List_Winner
		if(Surrendered_PlayerID) {
			List_Winner.length = 0
			List_Winner.push(Surrendered_PlayerID)
		}


		// Create all associations between newly created final_score and each player with their scores before and after this game
		for(const player of list_players) {
			const id = player.id
			const a = final_score?.Players.filter(p => p.id === id)[0]?.asso		// Association between player and finalscore

			const IsWinner = List_Winner.includes(id)
			const add_win = IsWinner ? 1 : 0

			const Wins__Before = a?.Wins__After || 0
			const Wins__Before_Year = same_year ? a.Wins__After_Year : 0		// If same_year = true then previous final_score exists
			const Wins__Before_Month = same_month ? a.Wins__After_Month : 0		// If same_month = true then previous final_score exists
			const Wins__Before_SinceCustomDate = a?.Wins__After_SinceCustomDate || 0


			await Association__Players_And_FinalScores_With_Sessions.create({
				SessionID, 
				PlayerID: id, 
				FinalScoreID: created_final_score.id, 

				IsWinner, 
				Score: PlayerScores[id], 

				Wins__Before, 
				Wins__After: 					Wins__Before + add_win, 
				Wins__Before_Year, 
				Wins__After_Year: 				Wins__Before_Year + add_win, 
				Wins__Before_Month, 
				Wins__After_Month: 				Wins__Before_Month + add_win, 
				Wins__Before_SinceCustomDate, 
				Wins__After_SinceCustomDate: 	Wins__Before_SinceCustomDate + add_win, 
			}, { transaction })
		}


		// __________________________________________________ Destroy/Delete current game __________________________________________________

		for(const player of list_players) {
			for(const tc of player.Table_Columns) {
				await tc.destroy({ transaction })
			}
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json({ FinalScoreID: created_final_score.id })


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'POST /game')
	}

})

router.delete('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!SessionID) return res.status(400).send('SessionID invalid.')


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
					include: Table_Columns
				}]
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


		// __________________________________________________ Delete game __________________________________________________

		await user.Sessions[0].update({ CurrentGameStart: null }, { transaction })

		for(const player of user.Sessions[0].Players) {
			await player.update({ Gnadenwurf: false }, { transaction })
			for(const tc of player.Table_Columns) {
				await tc.destroy({ transaction })
			}
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'DELETE /game')
	}

})





module.exports = router
