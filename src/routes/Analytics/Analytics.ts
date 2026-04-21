

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


			// ____________________ This section gets the time range in which the final_scores should be analyzed ____________________

			const tmp_user = await tx.users.findUnique({ where: { id: UserID } })
			if(!tmp_user) throw new Custom__Handled_Error('User not found.', 404)
	
			const view 			= tmp_user.Statistics__View
			const view_month	= tmp_user.Statistics__View_Month
			const view_year 	= tmp_user.Statistics__View_Year


			let where = {}
			if(view === 'STATISTICS_YEAR') {
				where = {
					Final_Score: {
						End: {
							gte: new Date(`${view_year}-01-01`), 
							lte: new Date(`${view_year}-12-31T23:59:59.999`), 
						}
					}
				}
			}
			if(view === 'STATISTICS_MONTH') {
				const month = List__Months_Enum.indexOf(view_month)
				where = {
					Final_Score: {
						End: {
							gte: new Date(Date.UTC(view_year, month, 1)), 
							lte: new Date(Date.UTC(view_year, month + 1, 0, 23, 59, 59, 999)), 
						}
					}
				}
			}



			// ____________________ This section actually gets the final_scores and dedublicates them ____________________

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
										}, 
										where: where,
										distinct: [ 'Final_ScoreID' ] // This prevents dublicates
									}
								}
							}
						}
					} 
				}
			})
	
			if(!user) throw new Custom__Handled_Error('User not found.', 404)

			const list__final_scores 				= user.List___Association__Users_And_Sessions.flatMap(association => association.Session.List___Association__Players_And_FinalScores_And_Sessions.map(asso => asso.Final_Score))
			const json 								= { Games_Played: 0 }
			const Data: Record<string, typeof json> = {}
	
	

			// ____________________ Init years/months/days of data with zeros ____________________
	
			if(view === 'STATISTICS_OVERALL') {
				const start = new Date(user.createdAt).getFullYear()
				const current = new Date().getFullYear()

				if(current >= start) {
					for(const year of Array.from({ length: current - start + 1 }, (_, index) => start + index)) {
						Data[year] = structuredClone(json)
					}
				}
			}

			if(view === 'STATISTICS_YEAR') {
				for(let month = 1; 12 >= month; month++) {
					Data[month] = structuredClone(json)
				}
			}

			if(view === 'STATISTICS_MONTH') {
				const daysInMonth = new Date(view_year, List__Months_Enum.indexOf(view_month) + 1, 0).getDate()
				const list_days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
				for(const day of list_days) {
					Data[day] = structuredClone(json)
				}
			}
	


			// ____________________ Iterate through finalscores and calculate scores, wins etc. ____________________
	
			for(const final_score of list__final_scores) {
				
				const date 	= new Date(final_score.End)
	
				// Init the selected time -> selected year or month or day
				let time: number = 0
				if(view === 'STATISTICS_OVERALL') time = date.getFullYear()
				if(view === 'STATISTICS_YEAR'	) time = date.getMonth() + 1
				if(view === 'STATISTICS_MONTH'	) time = date.getDate()
					
					
				// Increase games_played count in specific time
				const target = Data[time]
				if(!target || target.Games_Played === undefined) throw new Custom__Handled_Error('Something went wrong while creating statistics.', 500)
				target.Games_Played++
	
			}



			res.json({
				Total__Sessions: 		user.List___Association__Users_And_Sessions.length, 
				Total__Games_Played: 	list__final_scores.length, 
				Data: 					Data, 
			})

		})
	} catch(err) {
		await handle_error(res, err, 'GET /analytics')
	}

})





export default router
