

import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { filter__table_column } from '../../Filter_DatabaseJSON.js'
import { handle_error } from '../../handle_error.js'
import { isInt } from '../../IsDataType.js'
import { prisma } from '../../index.js'

import route__table_columns from './Game__Table_Columns.js'
import route__gnadenwurf from './Gnadenwurf.js'
router.use('/table_columns', route__table_columns)
router.use('/gnadenwurf', route__gnadenwurf)





router.get('', async (req, res) => {
	
	const { UserID }	= req
	const SessionID		= Number(req.query.session_id)
	
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
									List___Association__Sessions_And_Players_And_Table_Columns: true
								}
							}
						}
					}
				}
			})
	
			if(!user											) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error('Session not found.', 404)

			const session = user.List___Association__Users_And_Sessions[0].Session
			if(session.List___Association__Sessions_And_Players_And_Table_Columns.length === 0) throw new Custom__Handled_Error('Players not found.', 404)
	
	
			// __________________________________________________ Create new game if it doesn't exist __________________________________________________
	
			if(!session.CurrentGameStart) {

				await tx.sessions.update({ 
					where: { id: session.id }, 
					data: { CurrentGameStart: new Date() }
				})
	
				await tx.association__Sessions_And_Players_And_Table_Columns.updateMany({
					where: { SessionID: SessionID }, 
					data: { Gnadenwurf_Used: false }
				})

				const array_columns = Array.from({ length: session.Columns }, (_, index) => index)

				for(const association of session.List___Association__Sessions_And_Players_And_Table_Columns) {
					for(const column of array_columns) {

						await tx.table_Columns.create({ 
							data: {
								Association__Sessions_And_Players_And_Table_ColumnsID: association.id, 

								Column:				column, 
								Upper_Table_Score: 	0, 
								Total_Score: 		0, 
							}
						})

					}
				}
	
			}
	
			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'GET /game')
	}

})

router.post('', async (req, res) => {
	
	// ____________________________________________________________________________________________________ Game has been finished or surrendered ____________________________________________________________________________________________________

	const { UserID } = req
	const { SessionID, Surrendered_PlayerID } = req.body
	const date = new Date()

	if(!SessionID || !isInt(SessionID)						) return res.status(400).send('SessionID invalid.')
	if(Surrendered_PlayerID && !isInt(Surrendered_PlayerID)	) return res.status(400).send('Surrendered_PlayerID invalid.')


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
									List___Association__Sessions_And_Players_And_Table_Columns: {
										include: {
											Player: true, 
											List__Table_Columns: {
												orderBy: {
													Column: 'asc'
												}
											}
										}
									}
								}
							}
						}
					}
				}
			})
			
			if(!user																									) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]															) throw new Custom__Handled_Error('Session not found.', 404)
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(session.List___Association__Sessions_And_Players_And_Table_Columns.length === 0							) throw new Custom__Handled_Error('Players not found.', 404)
			if(session.List___Association__Sessions_And_Players_And_Table_Columns[0]?.List__Table_Columns.length === 0	) throw new Custom__Handled_Error('Table_Columns not found.', 404)
	
	
			// __________________________________________________ Check if some entries are missing __________________________________________________
	
			if(!Surrendered_PlayerID && session.List___Association__Sessions_And_Players_And_Table_Columns.some(association => association.List__Table_Columns.some(tc => !tc.Bottom_Table_TotalScore))) throw new Custom__Handled_Error('Missing entries.', 409)
	
	
			// Get latest finalscore
			const final_score__latest_found = await tx.final_Scores.findFirst({
				where: {
					List___Association__Players_And_FinalScores_And_Sessions: {
						every: { SessionID: SessionID }, 
					}
				}, 
				orderBy: { createdAt: 'desc' }, 
				include: {
					List___Association__Players_And_FinalScores_And_Sessions: {
						include: {
							Player: true
						}
					}
				}
			})


			// __________________________________________________ Create finalscore and tablearchive __________________________________________________
	
			const final_score__new = await tx.final_Scores.create({ 
				data: {
					Start: 			session.CurrentGameStart as Date, 
					End: 			date,
					Columns: 		session.Columns, 
					Surrendered:	Boolean(Surrendered_PlayerID),
				}
			})
	
			await tx.table_Archives.create({ 
				data: {
					Final_ScoreID:	final_score__new.id, 
					Table:			session.List___Association__Sessions_And_Players_And_Table_Columns.map(association => {
						return {
							PlayerID: association.PlayerID, 
							List__Table_Columns: association.List__Table_Columns.map(table_column => filter__table_column(table_column))
						}
					}), 
				}
			})
	
	
			// Add year to list for /session/preview if necessary (if game has been played in a new unlisted year)
	
			const tmp___view__list_years = [ ...session.View__List_Years ]
			if(!tmp___view__list_years.includes(date.getFullYear())) tmp___view__list_years.push(date.getFullYear())
	
			await tx.sessions.update({ 
				where: { id: session.id }, 
				data: {
					LastPlayed: 		date, 
					CurrentGameStart: 	null, 
					View__List_Years:	tmp___view__list_years, 
				}
			})
	
	
			// __________________________________________________ Calculate scores and winner __________________________________________________
	
			const List_Winner	: Array<number>			= []
			let highestScore	: number				= 0
			const PlayerScores	: Record<string, number>= {}
			let same_year		: boolean				= final_score__latest_found && new Date(final_score__latest_found.End).getFullYear() === date.getFullYear() ? true : false
			let same_month		: boolean				= final_score__latest_found && same_year && new Date(final_score__latest_found.End).getMonth() === date.getMonth() ? true : false
	
	
			// Calculate which player has won (could also be a draw and therefore multiple "winners")
			for(const association of session.List___Association__Sessions_And_Players_And_Table_Columns) {
	
				let tmp_score = 0
				for(const table_column of association.List__Table_Columns) { tmp_score += table_column.Total_Score }
				PlayerScores[association.PlayerID] = tmp_score
	
				if(highestScore < tmp_score) {
					List_Winner.length = 0
					List_Winner.push(association.PlayerID)
					highestScore = tmp_score
				} else if(highestScore === tmp_score) {
					List_Winner.push(association.PlayerID)
				}
	
			}
	
	
			// If surrendered, initialize that winner and therefore @Override List_Winner
			if(Surrendered_PlayerID) {
				List_Winner.length = 0
				List_Winner.push(Surrendered_PlayerID)
			}
	

			// Create all associations between newly created final_score and each player with their scores before and after this game
			for(const association of session.List___Association__Sessions_And_Players_And_Table_Columns) {
				const player_id = association.PlayerID
				const a			= final_score__latest_found?.List___Association__Players_And_FinalScores_And_Sessions.filter(association__players_and_finalscores_and_sessions => association__players_and_finalscores_and_sessions.PlayerID === player_id)[0]		// Association of player and finalscore
	
				const IsWinner	= List_Winner.includes(player_id)
				const add_win	= IsWinner ? 1 : 0
	
				const Wins__Before 					: number = a?.Wins__After || 0
				const Wins__Before_Year 			: number = same_year ? a?.Wins__After_Year || 0 : 0		// If same_year = true then previous final_score exists
				const Wins__Before_Month 			: number = same_month ? a?.Wins__After_Month || 0 : 0		// If same_month = true then previous final_score exists
				const Wins__Before_SinceCustomDate 	: number = a?.Wins__After_SinceCustomDate || 0
	
	
				await tx.association__Players_And_FinalScores_And_Sessions.create({
					data: {
						SessionID:						session.id, 
						PlayerID: 						player_id, 
						Final_ScoreID:					final_score__new.id, 
		
						IsWinner:						IsWinner, 
						Score: 							PlayerScores[player_id] || 0, 
		
						Wins__Before:					Wins__Before, 
						Wins__After: 					Wins__Before + add_win, 
						Wins__Before_Year:				Wins__Before_Year,  
						Wins__After_Year: 				Wins__Before_Year + add_win, 
						Wins__Before_Month:				Wins__Before_Month, 
						Wins__After_Month: 				Wins__Before_Month + add_win, 
						Wins__Before_SinceCustomDate:	Wins__Before_SinceCustomDate, 
						Wins__After_SinceCustomDate: 	Wins__Before_SinceCustomDate + add_win, 
					}
				})
			}
	
	
			// __________________________________________________ Destroy/Delete current game __________________________________________________
	
			await tx.table_Columns.deleteMany({
				where: {
					Association__Sessions_And_Players_And_Table_Columns: {
						SessionID: session.id
					}
				}
			})
	
	
			res.json({ FinalScoreID: final_score__new.id })

		})
	} catch(err) {
		await handle_error(res, err, 'POST /game')
	}

})

router.delete('', async (req, res) => {

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
									List___Association__Sessions_And_Players_And_Table_Columns: true, 
								}
							}
						}
					}
				}
			})
	
			if(!user											) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error('Session not found.', 404)
	
	
			// __________________________________________________ Delete game __________________________________________________

			await tx.sessions.update({
				where: { id: SessionID }, 
				data: { CurrentGameStart: null }
			})

			await tx.table_Columns.deleteMany({
				where: {
					Association__Sessions_And_Players_And_Table_Columns: {
						SessionID: SessionID
					}
				}
			})
	
	
			res.sendStatus(204)

		})			
	} catch(err) {
		await handle_error(res, err, 'DELETE /game')
	}

})





export default router
