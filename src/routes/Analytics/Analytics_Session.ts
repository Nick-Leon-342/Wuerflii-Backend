

import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { List__Months_Enum } from '../../types/Type___List__Months.js'
import { Zod__Query } from '../../types/Zod__Query..js'
import { handle_error } from '../../handle_error.js'
import { prisma } from '../../index.js'





router.get('', async (req, res) => {

	// Verify query
	const zod_result = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { session_id } = zod_result.data

	const { UserID } = req


	try {
		await prisma.$transaction(async (tx) => {


			// ____________________ This section gets the time range in which the final_scores should be analyzed ____________________

			const tmp_user = await tx.users.findUnique({ 
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: session_id }, 
						include: { Session: true }
					}
				}
			})
			if(!tmp_user											) throw new Custom__Handled_Error(404, 'User not found.')
			if(!tmp_user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error(404, 'Session not found.')
	
			const tmp_association	= tmp_user.List___Association__Users_And_Sessions[0]
			const view 				= tmp_association.Statistics__View
			const view_month		= tmp_association.Statistics__View_Month
			const view_year 		= tmp_association.Statistics__View_Year


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
						where: { SessionID: session_id }, 
						include: {
							Session: {
								include: {
									List___Association__Sessions_And_Players_And_Table_Columns: {
										select: { PlayerID: true }
									}, 
									List___Association__Players_And_FinalScores_And_Sessions: {
										include: {
											Player: true, 
											Final_Score: {
												include: {
													List___Association__Players_And_FinalScores_And_Sessions: true
												}, 
											},
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
	
			if(!user											) throw new Custom__Handled_Error(404, 'User not found.')
			if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error(404, 'Session not found.')
			const session = user.List___Association__Users_And_Sessions[0].Session

			const list__final_scores 	= session.List___Association__Players_And_FinalScores_And_Sessions.map(asso => asso.Final_Score)
			if(list__final_scores.length === 0) throw new Custom__Handled_Error(409, 'Data to create statistics is missing.')

			const list__players			= session.List___Association__Sessions_And_Players_And_Table_Columns.map(association => association.PlayerID)
			if(!list__players) throw new Custom__Handled_Error(404, 'Players not found.')

	
	
			// ____________________ Prepare response JSON ____________________
	
			type Type__Wins 			= Record<string, number>
			type Type__Json				= { Games_Played: number, Wins: Type__Wins, Draws: number }
			const json 					: Type__Json					= { Games_Played: 0, Wins: {}, Draws: 0 }
			let Total__Draws			: number				 		= 0
			const Total__Games_Played	: number						= list__final_scores.length
			const Total__Wins			: Record<string, number> 		= {}
			const Scores__Lowest		: Record<string, number> 		= {}
			const Scores__Average		: Record<string, number> 		= {}
			const Scores__Highest		: Record<string, number> 		= {}
			const Scores__Total			: Record<string, number> 		= {}
			const Data					: Record<string, typeof json>	= {}



			// ____________________ Init years/months/days of data with zeros ____________________

			if(view === 'STATISTICS_OVERALL') {
				const start = new Date(session.createdAt).getFullYear()
				const current = new Date().getFullYear()

				if(current >= start) {
					for(const year of Array.from({ length: current - start + 1 }, (_, index) => start + index)) {
						Data[year] = structuredClone(json)
					}
				}
			}
	
			if(view === 'STATISTICS_YEAR') {
				for(let month = 0; 12 >= month; month++) {
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



			// ____________________ Init Scores_... for each player with zero ____________________
	
			for(const player_id of list__players) {	
				Scores__Lowest[player_id] 	= 0
				Scores__Highest[player_id]	= 0
				Scores__Total[player_id] 	= 0
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
				if(!target || target?.Games_Played === undefined) throw new Custom__Handled_Error(500, 'Something went wrong while creating statistics.')
				target.Games_Played++
	
	
				// Calculate if game was a draw
				if(final_score.List___Association__Players_And_FinalScores_And_Sessions.filter(association => association.IsWinner).length > 1) {
					Total__Draws++
					target.Draws++
				}
	
	
				final_score.List___Association__Players_And_FinalScores_And_Sessions.forEach(association => {
					const player_id = association.PlayerID
	
					// Increase wins of players that won
					if(association.IsWinner) {
						// Increase total wins
						if(!Total__Wins[player_id]) Total__Wins[player_id] = 0
						Total__Wins[player_id]++
		
						// Increase wins of the year/month/day
						if(!target.Wins[player_id]) target.Wins[player_id] = 0
						target.Wins[player_id]++
					}
	
	
					if(Scores__Lowest[player_id] === undefined || Scores__Highest[player_id] === undefined || Scores__Total[player_id] === undefined) throw new Custom__Handled_Error(500, 'Something went wrong while creating statistics.')

					const score = association.Score
					if(Scores__Lowest[player_id] > score || Scores__Lowest[player_id] === 0) Scores__Lowest[player_id] = score
					if(Scores__Highest[player_id] < score) Scores__Highest[player_id] = score
					Scores__Total[player_id] = Scores__Total[player_id] + score
	
				})
	
			}



			// ____________________ Calculate average scores ____________________
			if(list__players) {
				for(const player_id of list__players) {
					Scores__Average[player_id] = Math.round((Scores__Total[player_id] || 0) / Total__Games_Played)
				}
			}



			res.json({
				Total__Games_Played:	Total__Games_Played, 
				Total__Wins: 			Total__Wins,		// Wins of each player
				Total__Draws: 			Total__Draws, 
	
				Scores__Lowest: 		Scores__Lowest, 	// Lowest scores of each player
				Scores__Average: 		Scores__Average, 	// Average scores of each player
				Scores__Highest: 		Scores__Highest, 	// Highest scores of each player
				Scores__Total: 			Scores__Total,		// Every score of each player combined
				
				Data: 					Data, 
			})

		})
	} catch(err) {
		await handle_error(res, err, 'GET /analytics/session')
	}

})





export default router
