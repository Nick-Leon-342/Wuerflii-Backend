

import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { List__Months_Enum } from '../../types/Type___List__Months.js'
import { handle_error } from '../../handle_error.js'
import { prisma } from '../../index.js'

import route__analytics_session from './Analytics_Session.js'
router.use('/session', route__analytics_session)





router.get('', async (req, res) => {

	const { UserID } = req

	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						include: {
							Session: {
								include: {
									List___Association__Players_And_FinalScores_And_Sessions: {
										include: {
											Final_Score: true
										}
									}
								}
							}
						}
					} 
				}
			})
	
			if(!user) throw new Custom__Handled_Error('User not found.', 404)
	
	
			const statistics__view 		= user.Statistics__View
			const statistics__view_month = user.Statistics__View_Month
			const statistics__view_year 	= user.Statistics__View_Year
	
			
			// __________________________________________________ Search for all finalscores in that selected time __________________________________________________
	
			const list__years		: Array<number> 		= []	// List of all the years in which games were played
			const list__final_scores 	= []
			for(const association__users_and_sessions of user.List___Association__Users_And_Sessions) {
				
				const session = association__users_and_sessions.Session
				const list__final_scores__filtered = [...new Map(session.List___Association__Players_And_FinalScores_And_Sessions.map(item => [item.Final_ScoreID, item.Final_Score])).values()] // dedublicate finalscores

				for(const final_score of list__final_scores__filtered) {	
					const date = new Date(final_score.End)
					if(!list__years.includes(date.getFullYear())) list__years.push(date.getFullYear())
					if(statistics__view === 'STATISTICS_YEAR' && date.getFullYear() !== statistics__view_year) continue
					if(statistics__view === 'STATISTICS_MONTH' && (date.getFullYear() !== statistics__view_year || List__Months_Enum[date.getMonth()] !== statistics__view_month)) continue
					list__final_scores.push(final_score)
				}
			}
	
	
	

			const json 								= { Games_Played: 0 }
			const Data: Record<string, typeof json> = {}
	
	
			// __________________________________________________ Init years/months/days of data with zeros __________________________________________________
	
			if(statistics__view === 'STATISTICS_OVERALL') list__years.forEach(year => Data[year] = structuredClone(json))
			if(statistics__view === 'STATISTICS_YEAR') {
				for(let month = 1; 12 >= month; month++) {
					Data[month] = structuredClone(json)
				}
			}
			if(statistics__view === 'STATISTICS_MONTH') {
				const daysInMonth = new Date(statistics__view_year, List__Months_Enum.indexOf(statistics__view_month) + 1, 0).getDate()
				const list_days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
				for(const day of list_days) {
					Data[day] = structuredClone(json)
				}
			}
	
			
			// __________________________________________________ Iterate through finalscores and calculate scores, wins etc. __________________________________________________
	
			for(const final_score of list__final_scores) {
				
				const date 	= new Date(final_score.End)
	
				// Init the selected time -> selected year or month or day
				let time: number = 0
				if(statistics__view === 'STATISTICS_OVERALL') time = date.getFullYear()
				if(statistics__view === 'STATISTICS_YEAR'	) time = date.getMonth() + 1
				if(statistics__view === 'STATISTICS_MONTH'	) time = date.getDate()
					
					
				// Increase games_played count in specific time
				const target = Data[time]
				if(!target || target.Games_Played === undefined) throw new Custom__Handled_Error('Something went wrong while creating statistics.', 500)
				target.Games_Played++
	
			}

			const total = {
				Total__Sessions: 		user.List___Association__Users_And_Sessions.length, 
				Total__Games_Played: 	list__final_scores.length, 
				Data: 					Data, 
			}
	
			res.json({ 
				Total: 			total, 
				List__Years:	list__years, 
			})

		})
	} catch(err) {
		await handle_error(res, err, 'GET /analytics')
	}

})





export default router
