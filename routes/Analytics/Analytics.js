

const express = require('express')
const router = express.Router()

const { handle_error } = require('../../handle_error')

const { 
	Association__Players_And_FinalScores_With_Sessions, 

	Users, 
	Sessions, 
	FinalScores, 

	sequelize, 
} = require('../../models')

router.use('/session', require('./Analytics_Session'))





router.get('', async (req, res) => {

	const { UserID } = req

	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				include: [{
					model: Association__Players_And_FinalScores_With_Sessions, 
					as: 'association', 
				}],  
			}], 
		})

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}


		const statistics_view = user.Statistics_View
		const statistics_view_month = user.Statistics_View_Month
		const statistics_view_year = user.Statistics_View_Year

		
		// __________________________________________________ Search for all finalscores in that selected time __________________________________________________

		const list_years = []	// List of all the years in which games were played
		const list_finalscores = []
		for(const session of user.Sessions) {
			for(const association of session.association) {
				if(list_finalscores.filter(finalscore => finalscore.id === association.FinalScoreID).length > 0) continue
				const finalscore = await FinalScores.findByPk(association.FinalScoreID, { transaction })

				const date = new Date(finalscore.End)
				if(!list_years.includes(date.getFullYear())) list_years.push(date.getFullYear())
				if(statistics_view === 'statistics_year' && date.getFullYear() !== statistics_view_year) continue
				if(statistics_view === 'statistics_month' && (date.getFullYear() !== statistics_view_year || date.getMonth() !== statistics_view_month - 1)) continue
				list_finalscores.push(finalscore)
			}
		}



		const json = { Games_Played: 0 }
		const total = {
			Total_Sessions: user.Sessions.length, 
			Total_Games_Played: list_finalscores.length, 
			Data: {}, 
		}


		// __________________________________________________ Init years/months/days of data with zeros __________________________________________________

		if(statistics_view === 'statistics_overall') list_years.forEach(year => total.Data[year] = structuredClone(json))
		if(statistics_view === 'statistics_year') {
			for(let month = 1; 12 >= month; month++) {
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

		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json({ 
			Total: total, 
			List_Years: list_years, 
		})


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'GET /analytics')
	}

})





module.exports = router
