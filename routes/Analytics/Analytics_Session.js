

const express = require('express')
const router = express.Router()

const { handle_error } = require('../../handle_error')
const { sort__list_players } = require('../../Functions')

const { 
	Association__Players_And_FinalScores_With_Sessions, 

	Users, 
	Players, 
	Sessions, 
	FinalScores, 

	sequelize, 
} = require('../../models')





router.get('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!SessionID) return res.status(400).send('SessionID invalid.')


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [
					{
						model: Players, 
						through: { as: 'asso' }, 
					}, {
						model: Association__Players_And_FinalScores_With_Sessions, 
						as: 'association', 
					}
				],
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


		// Check if players exist
		if(!user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.status(404).send('Players not found.')
		}

		const association = user.Sessions[0].Association__Users_And_Sessions
		const statistics_view = association.Statistics_View
		const statistics_view_month = association.Statistics_View_Month
		const statistics_view_year = association.Statistics_View_Year

		
		// __________________________________________________ Search for all finalscores in that selected time __________________________________________________

		const list_years = []	// List of all the years in which games were played
		const list_finalscores = []
		for(const association of user.Sessions[0].association) {
			if(list_finalscores.filter(finalscore => finalscore.id === association.FinalScoreID).length > 0) continue
			const finalscore = await FinalScores.findByPk(association.FinalScoreID, { 
				transaction, 
				include: [{
					model: Players, 
					through: { as: 'asso' }
				}]
			})

			const date = new Date(finalscore.End)
			if(!list_years.includes(date.getFullYear())) list_years.push(date.getFullYear())
			if(statistics_view === 'statistics_year' && date.getFullYear() !== statistics_view_year) continue
			if(statistics_view === 'statistics_month' && (date.getFullYear() !== statistics_view_year || date.getMonth() !== statistics_view_month - 1)) continue
			list_finalscores.push(finalscore)
		}


		// __________________________________________________ Prepare response JSON __________________________________________________

		const json = { Games_Played: 0, Wins: {}, Draws: 0 }
		const total = {
			Total_Games_Played: list_finalscores.length, 
			Total_Wins: {}, 
			Total_Draws: 0, 

			Scores_Lowest: {}, 		// Lowest scores of each player
			Scores_Average: {}, 	// Average scores of each player
			Scores_Highest: {}, 	// Highest scores of each player
			Scores_Total: {}, 		// Every score of each player combined
			
			Data: {}, 
		}


		// __________________________________________________ Init years/months/days of data with zeros __________________________________________________

		if(statistics_view === 'statistics_overall') list_years.forEach(year => total.Data[year] = structuredClone(json))
		if(statistics_view === 'statistics_year') {
			for(let month = 0; 12 >= month; month++) {
				total.Data[month] = structuredClone(json)
			}
		}
		if(statistics_view === 'statistics_month') {
			const daysInMonth = new Date(statistics_view_year, statistics_view_month, 0).getDate()
			const list_days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
			for(const day of list_days) {
				total.Data[day] = structuredClone(json)
			}
		}


		// __________________________________________________ Init Scores_... for each player with zero __________________________________________________

		for(const player of user.Sessions[0].Players) {
			const id = player.id

			total.Scores_Lowest[id] = 0
			total.Scores_Highest[id] = 0
			total.Scores_Total[id] = 0
		}

		
		// __________________________________________________ Iterate through finalscores and calculate scores, wins etc. __________________________________________________

		for(const final_score of list_finalscores) {
			
			const date = new Date(final_score.End)
			const year = date.getFullYear()
			const month = date.getMonth() + 1
			const day = date.getDate()


			// Init the selected time -> selected year or month or day
			let time
			if(statistics_view === 'statistics_overall') time = year
			if(statistics_view === 'statistics_year') time = month
			if(statistics_view === 'statistics_month') time = day

			
			// Increase games_played count in specific time
			total.Data[time].Games_Played++


			// Calculate if game was a draw
			const list_winners = final_score.Players.filter(player => player.asso.IsWinner)
			if(list_winners.length > 1) {
				total.Total_Draws++
				total.Data[time].Draws++
			}


			//
			final_score.Players.forEach(player => {
				const id = player.id

				// Increase wins of players that won
				if(player.asso.IsWinner) {
					// Increase total wins
					if(!total.Total_Wins[id]) total.Total_Wins[id] = 0
					total.Total_Wins[id]++
	
					// Increase wins of the year/month/day
					if(!total.Data[time].Wins[id]) total.Data[time].Wins[id] = 0
					total.Data[time].Wins[id]++
				}


				const score = player.asso.Score
				if(total.Scores_Lowest[id] > score || total.Scores_Lowest[id] === 0) total.Scores_Lowest[id] = score
				if(total.Scores_Highest[id] < score) total.Scores_Highest[id] = score
				total.Scores_Total[id] = total.Scores_Total[id] + score

			})

		}


		// Calculate average scores
		for(const player of user.Sessions[0].Players) {
			total.Scores_Average[player.id] = Math.round(total.Scores_Total[player.id] / total.Total_Games_Played)
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json({ 
			Total: total, 
			List_Years: list_years, 
		})


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'GET /analytics/session')
	}

})





module.exports = router
