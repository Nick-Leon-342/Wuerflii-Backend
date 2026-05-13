

import express from 'express'
const router = express.Router()

import { filter__association_sessions_and_players_and_table_columns, filter__association_users_and_sessions, filter__player, filter__session } from '../../Filter_DatabaseJSON.js'
import { Zod__Session_PATCH, Zod__Session_POST, type Type__Session } from '../../types/Zod__Session.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { Zod__Session_Date__PATCH } from '../../types/Zod__Session_Date.js'
import { List__Months_Enum } from '../../types/Type___List__Months.js'
import type { Users } from '../../../generated/prisma/index.js'
import { Zod__Query } from '../../types/Zod__Query..js'
import { handle_error } from '../../handle_error.js'
import { prisma } from '../../index.js'

import route__session_players from './Session_Players.js'
router.use('/players', route__session_players)





router.get('', (req, res) => {

	// Verify query
	const zod_result = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { session_id } = zod_result.data

	const { UserID } = req


	prisma.users.findUnique({
		where: { id: UserID }, 
		include: {
			List___Association__Users_And_Sessions: {
				where: { SessionID: session_id }, 
				include: {
					Session: true
				}
			}
		}
	}).then(user => {

		if(!user											) throw new Custom__Handled_Error(404, 'User not found.')
		if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error(404, 'Session not found.')

		res.json({
			...filter__session(user.List___Association__Users_And_Sessions[0].Session), 
			...filter__association_users_and_sessions(user.List___Association__Users_And_Sessions[0])
		})


	}).catch(async err => {
		await handle_error(res, err, 'GET /session')
	})

})

router.post('', async (req, res) => {
	
	// Verify input
	const zod_result = Zod__Session_POST.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { Name, Color, Columns } = zod_result.data

	const { UserID } = req
	const date = new Date()


	try {
		await prisma.$transaction(async (tx) => {
	
			const user = await tx.users.findUnique({ where: { id: UserID } })
			if(!user) throw new Custom__Handled_Error(404, 'User not found.')
	
			const session = await tx.sessions.create({
				data: {
					Name:				Name, 
					Color:				Color, 
					Columns:			Columns, 
					View__List_Years: 	[], 
					LastPlayed:			date, 
				},
			})
	
			const association = await tx.association__Users_And_Sessions.create({
				data: {
					UserID:						user.id, 
					SessionID: 					session.id, 
		
					Input_Type:					'SELECT',
					Show_Scores:	 			true, 
			
					View: 						'SHOW__ALL', 
					View__Month: 				List__Months_Enum[date.getMonth()] || 'JANUARY', 
					View__Year: 				date.getFullYear(), 
					View__Custom_Date: 			date, 
		
					Statistics__Show_Border:	true, 
					Statistics__View: 			'STATISTICS_OVERALL', 
					Statistics__View_Month: 	List__Months_Enum[date.getMonth()] || 'JANUARY', 
					Statistics__View_Year: 		date.getFullYear(), 
				}
			})
	
			res.json({
				...filter__session(session), 
				...filter__association_users_and_sessions(association)
			})

		})
	} catch(err) {
		await handle_error(res, err, 'POST /session')
	}

})

router.patch('', async (req, res) => {
	
	// Verify query
	const zod_result__query = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result__query.success) return res.status(400).send(zod_result__query.error.message)
	const { session_id } = zod_result__query.data
	
	// Verify input
	const zod_result = Zod__Session_PATCH.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const {
		Name, 
		Color, 
		Columns, 

		Input_Type, 
		Show_Scores, 

		View, 
		View__Month, 
		View__Year, 

		Statistics__View, 
		Statistics__View_Month, 
		Statistics__View_Year, 
		Statistics__Show_Border, 
	} = zod_result.data

	const { UserID } = req


	try {
		await prisma.$transaction(async (tx) => {
			
			const user = await tx.users.findUnique({
				where: { id: UserID },  
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: session_id }, 
						include: {
							Session: true
						}
					}
				}
			})
			
			if(!user											) throw new Custom__Handled_Error(404, 'User not found.')
			if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error(404, 'Session not found.')
	

			const json_session: any = {}
			if(Name		) json_session.Name = Name
			if(Color	) json_session.Color = Color
			if(Columns	) json_session.Columns = Columns

			if(Object.keys(json_session).length > 0) {
				await tx.sessions.update({
					where: { id: session_id }, 
					data: json_session
				})
			}
	

			const json_association: any = {}
			if(Input_Type	) json_association.Input_Type  = Input_Type
			if(Show_Scores	) json_association.Show_Scores  = Show_Scores

			if(View			) json_association.View  = View
			if(View__Month	) json_association.View__Month  = View__Month
			if(View__Year	) json_association.View__Year  = View__Year

			if(Statistics__View			) json_association.Statistics__View  = Statistics__View
			if(Statistics__View_Month	) json_association.Statistics__View_Month  = Statistics__View_Month
			if(Statistics__View_Year	) json_association.Statistics__View_Year  = Statistics__View_Year
			if(Statistics__Show_Border	) json_association.Statistics__Show_Border  = Statistics__Show_Border
			
			if(Object.keys(json_association).length > 0) {
				await tx.association__Users_And_Sessions.update({
					where: {
						SessionID: session_id, 
						UserID, 
					}, 
					data: json_association,
				})
			}
			

			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'PATCH /session')
	}

})

router.delete('', async (req, res) => {

	const { UserID } = req
	const SessionID = Number(req.query.session_id)
	
	if(isNaN(SessionID)) return res.status(400).send('SessionID invalid.')


	try {
		await prisma.$transaction(async (tx) => {
	
			const user = await tx.users.findUnique({ 
				where: { id: UserID}, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: SessionID }, 
						include: {
							Session: {
								include: {
									List___Association__Players_And_FinalScores_And_Sessions: true, 
									List___Association__Sessions_And_Players_And_Table_Columns: true, 
								}
							}
						}	
					}
				}
			})
	
			if(!user											) throw new Custom__Handled_Error(404, 'User not found.')
			if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error(404, 'Session not found.')

			const session = user.List___Association__Users_And_Sessions[0].Session

			await tx.final_Scores.deleteMany({
				where: {
					List___Association__Players_And_FinalScores_And_Sessions: {
						some: {
							SessionID: session.id
						}
					}
				}
			})

			await tx.players.deleteMany({
				where: {
					Association__Sessions_And_Players_And_Table_Columns: {
						SessionID: session.id
					}
				}
			})

			await tx.sessions.delete({ where: { id: session.id } })
	
	
			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'DELETE /session')
	}

})





router.get('/all', async (req, res) => {

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
									List___Association__Sessions_And_Players_And_Table_Columns: {
										orderBy: { Order_Index: 'asc' }, 
										include: {
											Player: true
										}
									}
								}
							}
						}
					}
				}, 
			})
			if(!user) throw new Custom__Handled_Error(404, 'User not found.')
	
			const list__sessions: Array<Type__Session> = []
			for(const association of user.List___Association__Users_And_Sessions) {

				const list__players = association.Session.List___Association__Sessions_And_Players_And_Table_Columns.map(asso => ({
					...filter__association_sessions_and_players_and_table_columns(asso), 
					...filter__player(asso.Player), 
				}))

				const session: Type__Session = {
					...filter__session(association.Session), 
					...filter__association_users_and_sessions(association), 
					List__Players: 				list__players, 
					Checkbox_Checked_To_Delete:	false, 
				}

				list__sessions.push(session)
			}
	
			res.json(sort__list_sessions(user, list__sessions))

		})
	} catch(err) {
		await handle_error(res, err, 'GET /session/all')
	}

})

function sort__list_sessions(user: Users, list__sessions: Array<Type__Session>) {

	const view = user.View__Sessions
	const desc = user.View__Sessions_Desc

	switch(view) {
		case 'CREATED':
			return list__sessions.sort((a, b) => desc ? a.createdAt.getTime() - b.createdAt.getTime() : b.createdAt.getTime() - a.createdAt.getTime())

		case 'NAME':
			return list__sessions.sort((a, b) => desc ? a.Name.localeCompare(b.Name, 'de', { sensitivity: 'base' }) : b.Name.localeCompare(a.Name, 'de', { sensitivity: 'base' }))

		default:
			return list__sessions.sort((a, b) => desc ? b.LastPlayed.getTime() - a.LastPlayed.getTime() : a.LastPlayed.getTime() - b.LastPlayed.getTime())

	}

}





// __________________________________________________ New CustomDate __________________________________________________

router.patch('/date', async (req, res) => {

	// Verify query
	const zod_result__query = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result__query.success) return res.status(400).send(zod_result__query.error.message)
	const { session_id } = zod_result__query.data

	// Verify input
	const zod_result = Zod__Session_Date__PATCH.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { View__Custom_Date} = zod_result.data

	const { UserID } = req


	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({ 
				where: { id: UserID },
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: session_id }, 
						include: {
							Session: {
								include: {
									List___Association__Sessions_And_Players_And_Table_Columns: {
										include: {
											Player: true
										}
									}
								}
							}
						}
					}
				}
			})

			if(!user																	) throw new Custom__Handled_Error(404, 'User not found.')
			if(!user.List___Association__Users_And_Sessions[0]							) throw new Custom__Handled_Error(404, 'Session not found.')
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(!session.List___Association__Sessions_And_Players_And_Table_Columns[0]	) throw new Custom__Handled_Error(404, 'Players not found.')
	
	
			// __________________________________________________ Update session with customdate __________________________________________________
	
			await tx.association__Users_And_Sessions.update({ 
				where: {
					SessionID: session_id, 
					UserID, 
				},
				data: { View__Custom_Date: View__Custom_Date },
			})
	
	
			// __________________________________________________ Update scores of finalscores __________________________________________________
	
			const list_finalscores = await tx.final_Scores.findMany({
				include: {
					List___Association__Players_And_FinalScores_And_Sessions: {
						where: { SessionID: session_id },
					}
				},
				orderBy: { End: 'asc'}, 
			}) 
	
	
			let wins_before	: Record<string, number> = {}
			let wins_after	: Record<string, number> = {}
			for(const association of session.List___Association__Sessions_And_Players_And_Table_Columns) { wins_after[association.PlayerID] = 0 }
	
			for(const finalscore of list_finalscores) {
				if(new Date(finalscore.End) >= new Date(View__Custom_Date)) {
	
					wins_before = structuredClone(wins_after)
	
					// Add wins to wins_after
	
					for(const association of finalscore.List___Association__Players_And_FinalScores_And_Sessions) {
						if(association.IsWinner) wins_after[association.PlayerID] = (wins_after[association.PlayerID] || 0) + 1
	
						await tx.association__Players_And_FinalScores_And_Sessions.update({
							where: { id: association.id },
							data: {
								Wins__Before_SinceCustomDate:	wins_before[association.PlayerID] || 0, 
								Wins__After_SinceCustomDate:	wins_after[association.PlayerID] || 0, 
							}, 
						})
					}
	
				} else {
	
					// Finalscore isn't later than customdate, therefore set scores to null
					for(const association of finalscore.List___Association__Players_And_FinalScores_And_Sessions) {
	
						await tx.association__Players_And_FinalScores_And_Sessions.update({
							where: { id: association.id }, 
							data: {
								Wins__Before_SinceCustomDate:	null, 
								Wins__After_SinceCustomDate:	null, 
							}
						})
					}
	
				}
			}
	
			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'PATCH /session/date')
	}

})





export default router
