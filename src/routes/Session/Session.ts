

import express from 'express'
const router = express.Router()

import { isDate } from 'util/types'
import sort__list_players from '../../Functions.js'
import { handle_error } from '../../handle_error.js'
import { MAX_COLUMNS, MAX_LENGTH_SESSION_NAME } from '../../utils.js'
import { isInt, isBoolean, isString, isColor } from '../../IsDataType.js'
import { filter__association_sessions_and_players, filter__association_users_and_sessions, filter__player, filter__session } from '../../Filter_DatabaseJSON.js'

import route__session_players from './Session_Players.js'
import { prisma } from '../../index.js'
import { List__Months_Enum } from '../../types/Type___List__Months.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { Enum___Association__Users_And_Sessions___Input_Type, Enum___Association__Users_And_Sessions___View, Enum___Statistics__View, type Users } from '../../../generated/prisma/index.js'
import type { Type__Session } from '../../types/Type__Session.js'
import type { Type__Player } from '../../types/Type__Player.js'
router.use('/players', route__session_players)





router.get('', (req, res) => {

	const { UserID } = req
	const SessionID = +(req.query.session_id || 0)

	if(isNaN(SessionID) || SessionID <= 0) return res.status(400).send('SessionID invalid.')


	prisma.users.findUnique({
		where: { id: UserID }, 
		include: {
			List__Association_Users_And_Sessions: {
				where: { SessionID: SessionID }, 
				include: {
					Session: true
				}
			}
		}
	}).then(user => {

		if(!user											) throw new Custom__Handled_Error('User not found.', 404)
		if(!user.List__Association_Users_And_Sessions[0]	) throw new Custom__Handled_Error('Session not found.', 404)

		res.json({
			...filter__session(user.List__Association_Users_And_Sessions[0].Session), 
			...filter__association_users_and_sessions(user.List__Association_Users_And_Sessions[0])
		})


	}).catch(async err => {
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'GET /session')
		}
	})

})

router.post('', async (req, res) => {

	const { UserID } = req
	const date = new Date()
	const { 
		Name, 
		Color, 
		Columns 
	} = req.body

	if(!Color || !isColor(Color)) 											return res.status(400).send('Color invalid.')
	if(!Name || !isString(Name) || Name.length > MAX_LENGTH_SESSION_NAME) 	return res.status(400).send('Name invalid.')
	if(!Columns || !isInt(Columns) || Columns < 1 || Columns > MAX_COLUMNS) return res.status(400).send('Columns invalid.')


	try {
		await prisma.$transaction(async (tx) => {
	
			const user = await tx.users.findUnique({ where: { id: UserID } })
			if(!user) throw new Custom__Handled_Error('User not found.', 404)
	
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
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'POST /session')
		}
	}

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { 
		SessionID,

		Name, 
		Color, 
		Columns, 

		View, 
		View__Month, 
		View__Year, 
		
		Input_Type, 
		Show_Scores, 

		Statistics__Show_Border, 
		Statistics__View, 
		Statistics__View_Month, 
		Statistics__View_Year, 
	} = req.body
	
	if(!SessionID || !isInt(SessionID)																										) return res.status(400).send('SessionID invalid.')
	if(Name && !isString(Name)																												) return res.status(400).send('Name invalid.')
	if(Color && !isColor(Color)																												) return res.status(400).send('Color invalid.')
	if(Columns && !isInt(Columns)																											) return res.status(400).send('Columns invalid.')

	if(View && (!isString(View) || !Object.values(Enum___Association__Users_And_Sessions___View).includes(View))							) return res.status(400).send('View invalid.')
	if(View__Month && (!isString(View__Month) || !Object.values(List__Months_Enum).includes(View__Month))										) return res.status(400).send('View__Month invalid.')
	if(View__Year && !isInt(View__Year)																										) return res.status(400).send('View__Year invalid.')
	if(Input_Type && (!isString(Input_Type) || !Object.values(Enum___Association__Users_And_Sessions___Input_Type).includes(Input_Type))	) return res.status(400).send('Input_Type invalid.')
	if(Show_Scores !== undefined && !isBoolean(Show_Scores)																					) return res.status(400).send('Show_Scores invalid.')
		
	if(Statistics__Show_Border !== undefined && !isBoolean(Statistics__Show_Border)															) return res.status(400).send('Statistics__Show_Border invalid.')
	if(Statistics__View && (!isString(Statistics__View) || !Object.values(Enum___Statistics__View).includes(Statistics__View))				) return res.status(400).send('Statistics__View invalid.')
	if(Statistics__View_Month && (!isInt(Statistics__View_Month) || !Object.values(List__Months_Enum).includes(Statistics__View_Month))			) return res.status(400).send('Statistics__View_Month invalid.')
	if(Statistics__View_Year && !isInt(Statistics__View_Year)																				) return res.status(400).send('Statistics__View_Year invalid.')


	try {
		await prisma.$transaction(async (tx) => {
			
			const user = await tx.users.findUnique({
				where: { id: UserID },  
				include: {
					List__Association_Users_And_Sessions: {
						where: { id: SessionID }, 
						include: {
							Session: true
						}
					}
				}
			})
	
			if(!user										) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List__Association_Users_And_Sessions[0]) throw new Custom__Handled_Error('Session not found.', 404)
	
	
			// __________________________________________________ Update session __________________________________________________
	
			await tx.sessions.update({
				where: { id: SessionID }, 
				data: {
					Name:		Name, 
					Color:		Color, 
					Columns:	Columns, 
				}
			})
	
	
			// Update association if there are some variables to change	
			await tx.association__Users_And_Sessions.update({
				where: {
					SessionID, 
					UserID, 
				}, 
				data: {
					Input_Type, 
					Show_Scores, 
		
					View, 
					View__Month, 
					View__Year, 
		
					Statistics__Show_Border, 
					Statistics__View, 
					Statistics__View_Month, 
					Statistics__View_Year, 
				},
			})
			
			res.sendStatus(204)

		})
	} catch(err) {
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'PATCH /session')
		}
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
				include: Players, 
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


		// __________________________________________________ Get all associations __________________________________________________

		const list_associations = await Association__Players_And_FinalScores_With_Sessions.findAll({
			where: { SessionID }, 
			transaction, 
		})


		// __________________________________________________ Remove __________________________________________________

		// ____________________ Remove finalscores through association ____________________

		for(const association of list_associations) {
			await FinalScores.destroy({
				where: { id: association.FinalScoreID }, 
				transaction, 
			})
		}


		// ____________________ Remove players ____________________

		for(const player of user.Sessions[0].Players) {
			await player.destroy({ transaction })
		}


		// ____________________ Remove session ____________________

		await user.Sessions[0].destroy({ transaction })


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'DELETE /session')
	}

})





router.get('/env', (req, res) => {

	const { UserID } = req

	prisma.users.findUnique({ where: { id: UserID } }).then(user => {

		if(!user) return res.status(404).send('User not found.')

		res.json({
			MAX_COLUMNS,
			MAX_LENGTH_SESSION_NAME, 
		})

	}).catch(async err => {
		await handle_error(res, err, 'GET /session/env')
	})

})

router.get('/all', async (req, res) => {

	const { UserID } = req

	try {
		await prisma.$transaction(async (tx) => {
	
			const user = await tx.users.findUnique({
				where: { id: UserID },
				include: {
					List__Association_Users_And_Sessions: {
						include: {
							Session: {
								include: {
									List__Association__Sessions_And_Players: {
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
			if(!user) throw new Custom__Handled_Error('User not found.', 404)
	
			const list__sessions: Array<Type__Session> = []
			for(const association of user.List__Association_Users_And_Sessions) {

				const list__players: Array<Type__Player> = association.Session.List__Association__Sessions_And_Players.map(asso => ({
					...filter__association_sessions_and_players(asso), 
					...filter__player(asso.Player), 
				}))

				const session: Type__Session = {
					...filter__session(association.Session), 
					...filter__association_users_and_sessions(association), 
					List__Players: 		sort__list_players(list__players), 
					Checkbox_Checked:	false, 
				}

				list__sessions.push(session)
			}
	
			res.json(sort__list_sessions(user, list__sessions))

		})
	} catch(err) {
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'GET /session/all')
		}
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

	const { UserID } = req
	const { SessionID, View_CustomDate } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(!View_CustomDate || !isDate(new Date(View_CustomDate))) return res.status(400).send('CustomDate invalid.')


	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, { 
			transaction, 
			include: [{
				model: Sessions, 
				required: false, 
				where: { id: SessionID }, 
				include: Players
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


		// __________________________________________________ Update session with customdate __________________________________________________

		const session = user.Sessions[0]
		await Association__Users_And_Sessions.update({ View_CustomDate }, { 
			transaction, 
			where: {
				SessionID, 
				UserID, 
			}
		})


		// __________________________________________________ Update scores of finalscores __________________________________________________

		const list_finalscores = await FinalScores.findAll({
			include: [{
				model: Players, 
				required: true, 
				through: {
					where: { SessionID }, 
					as: 'asso', 
					attributes: [ 
						'IsWinner', 
						'Wins__Before_SinceCustomDate', 
						'Wins__After_SinceCustomDate', 
					], 
				}
			}], 
			transaction, 
			order: [[ 'End', 'ASC' ]],
		}) 


		let wins_before = {}
		let wins_after = {}
		for(const p of session.Players) { wins_after[p.id] = 0 }

		for(const finalscore of list_finalscores) {
			if(new Date(finalscore.End) >= new Date(View_CustomDate)) {

				wins_before = structuredClone(wins_after)

				// Add wins to wins_after

				for(const player of finalscore.Players) {
					if(player.asso.IsWinner) wins_after[player.id] = wins_after[player.id] + 1

					await Association__Players_And_FinalScores_With_Sessions.update({
						Wins__Before_SinceCustomDate: wins_before[player.id], 
						Wins__After_SinceCustomDate: wins_after[player.id], 
					}, {
						transaction, 
						where: {
							SessionID, 
							FinalScoreID: finalscore.id, 
							PlayerID: player.id, 
						}
					})
				}

			} else {

				// Finalscore isn't later than customdate, therefore set scores to null
				for(const player of finalscore.Players) {

					await Association__Players_And_FinalScores_With_Sessions.update({
						Wins__Before_SinceCustomDate: null, 
						Wins__After_SinceCustomDate: null, 
					}, {
						transaction, 
						where: {
							SessionID, 
							FinalScoreID: finalscore.id, 
							PlayerID: player.id, 
						}
					})
				}

			}
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'PATCH /session/date')
	}

})





export default router
