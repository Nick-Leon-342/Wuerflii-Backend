

import express from 'express'
const router = express.Router()

import { handle_error } from '../../handle_error.js'
import { prisma } from '../../index.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import type { Final_Scores } from '../../../generated/prisma/index.js'
import { List__Months_Enum } from '../../types/Type___List__Months.js'





router.get('', async (req, res) => {

	const { UserID } = req
	const SessionID = Number(req.query.session_id)

	if(isNaN(SessionID)) return res.status(400).send('SessionID invalid.')


	try {
		await prisma.$transaction(async (tx) => {
	
			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: SessionID }, 
						include: {
							Session: {
								include: {
									List___Association__Players_And_FinalScores_And_Sessions: {
										include: {
											Player: true, 
											Final_Score: {
												include: {
													List___Association__Players_And_FinalScores_And_Sessions: true
												}	
											},
										}
									}
								}
							}
						}
					}
				}
			})
	
			if(!user																) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]						) throw new Custom__Handled_Error('Session not found.', 404)
			const session = user.List___Association__Users_And_Sessions[0].Session
	
			if(!session.List___Association__Players_And_FinalScores_And_Sessions[0]	) throw new Custom__Handled_Error('Players not found.', 404)
	
			const association__users_and_sessions	= user.List___Association__Users_And_Sessions[0]
			const statistics__view 					= association__users_and_sessions.Statistics__View
			const statistics__view_month 			= association__users_and_sessions.Statistics__View_Month
			const statistics__view_year				= association__users_and_sessions.Statistics__View_Year
	
			
			// __________________________________________________ Search for all finalscores in that selected time __________________________________________________
	
			const list__years 		: Array<number>			= []	// List of all the years in which games were played
			const list__final_scores = []
			for(const association__users_and_sessions of user.List___Association__Users_And_Sessions) {
				
				const session = association__users_and_sessions.Session
				const list__final_scores__filtered = [...new Map(session.List___Association__Players_And_FinalScores_And_Sessions.map(item => [item.Final_ScoreID, item.Final_Score])).values()] // dedublicate finalscores

				for(const final_score of list__final_scores__filtered) {	
					const date = new Date(final_score.End)
					if(!list__years.includes(date.getFullYear())) list__years.push(date.getFullYear())
					if(statistics__view === 'STATISTICS_YEAR' && date.getFullYear() !== statistics__view_year) break
					if(statistics__view === 'STATISTICS_MONTH' && (date.getFullYear() !== statistics__view_year || List__Months_Enum[date.getMonth()] !== statistics__view_month)) break
					list__final_scores.push(final_score)
				}
			}
	
	
			// __________________________________________________ Prepare response JSON __________________________________________________
	
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
	
	
			// __________________________________________________ Init years/months/days of data with zeros __________________________________________________
	
			if(statistics__view === 'STATISTICS_OVERALL') list__years.forEach(year => Data[year] = structuredClone(json))
			if(statistics__view === 'STATISTICS_YEAR') {
				for(let month = 0; 12 >= month; month++) {
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
	
	
			// __________________________________________________ Init Scores_... for each player with zero __________________________________________________
	
			for(const association of session.List___Association__Players_And_FinalScores_And_Sessions) {
				const player_id = association.PlayerID
	
				Scores__Lowest[player_id] 	= 0
				Scores__Highest[player_id]	= 0
				Scores__Total[player_id] 	= 0
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
	
	
					if(Scores__Lowest[player_id] === undefined || Scores__Highest[player_id] === undefined || Scores__Total[player_id] === undefined) throw new Custom__Handled_Error('Something went wrong while creating statistics.', 500)

					const score = association.Score
					if(Scores__Lowest[player_id] > score || Scores__Lowest[player_id] === 0) Scores__Lowest[player_id] = score
					if(Scores__Highest[player_id] < score) Scores__Highest[player_id] = score
					Scores__Total[player_id] = Scores__Total[player_id] + score
	
				})
	
			}
	
	
			// Calculate average scores
			const list__players = list__final_scores[0]?.List___Association__Players_And_FinalScores_And_Sessions.map(association => association.PlayerID)
			if(list__players) {
				for(const player_id of list__players) {
					Scores__Average[player_id] = Math.round((Scores__Total[player_id] || 0) / Total__Games_Played)
				}
			}
			const total = {
				Total__Games_Played:	Total__Games_Played, 
				Total__Wins: 			Total__Wins,		// Wins of each player
				Total__Draws: 			Total__Draws, 
	
				Scores__Lowest: 		Scores__Lowest, 	// Lowest scores of each player
				Scores__Average: 		Scores__Average, 	// Average scores of each player
				Scores__Highest: 		Scores__Highest, 	// Highest scores of each player
				Scores__Total: 			Scores__Total,		// Every score of each player combined
				
				Data: 					Data, 
			}
	
	
			res.json({ 
				Total: total, 
				list__years: list__years, 
			})

		})
	} catch(err) {
		await handle_error(res, err, 'GET /analytics/session')
	}

})





export default router
