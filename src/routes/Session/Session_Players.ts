

import express from 'express'
const router = express.Router()

import { filter__association_sessions_and_players_and_table_columns, filter__player } from '../../Filter_DatabaseJSON.js'
import { Zod__Player_List__PATCH, Zod__Player_List__POST } from '../../types/Zod__Player.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { Zod__Query } from '../../types/Zod__Query..js'
import { handle_error } from '../../handle_error.js'
import { prisma } from '../../index.js'





router.get('', (req, res) => {

	const { UserID } = req

	// Verify query
	const zod_result = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { session_id } = zod_result.data


	prisma.users.findUnique({
		where: { id: UserID }, 
		include: { 
			List___Association__Users_And_Sessions: {
				where: { SessionID: session_id },
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
		}
	}).then(user => {

		if(!user											) return res.status(404).send('User not found.')
		if(!user.List___Association__Users_And_Sessions[0]	) return res.status(404).send('Session not found.')

		const list__associations_players = user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns
		const list__players = list__associations_players.map(asso => ({
			...filter__association_sessions_and_players_and_table_columns(asso), 
			...filter__player(asso.Player)
		}))
		
		res.json(list__players)

	}).catch(async err => {
		await handle_error(res, err, 'GET /session/players')
	})

})

router.post('', async (req, res) => {

	// ____________________________________________________________________________________________________ Add players to session (first time) ____________________________________________________________________________________________________

	const { UserID } = req
	
	// Verify query
	const zod_result__query = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result__query.success) return res.status(400).send(zod_result__query.error.message)
	const { session_id } = zod_result__query.data

	// Verify List__Players
	const zod_result__list_players = Zod__Player_List__POST.safeParse(req.body.List__Players)
	if(!zod_result__list_players.success) return res.status(400).send(zod_result__list_players.error.message)
	const List__Players = zod_result__list_players.data


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
	
			if(!user											) throw new Custom__Handled_Error('User not found.', 404)	
			if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error('Session not found.', 404)
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(session.List___Association__Sessions_And_Players_And_Table_Columns.length > 0) new Custom__Handled_Error('Players already exist.', 409)
			
	
			// __________________________________________________ Create players __________________________________________________
	
			const list_players = await Promise.all(
				List__Players.map(async (tmp_player, index) => {

					const player = await tx.players.create({ 
						data: {
							Name:	tmp_player.Name, 
							Color:	tmp_player.Color, 
						}
					})
					
					const association = await tx.association__Sessions_And_Players_And_Table_Columns.create({
						data: {
							SessionID:	session.id, 
							PlayerID:	player.id, 
			
							Gnadenwurf_Used:	false, 
							Order_Index: 		index, 
						}
					})
		
					return {
						...filter__player(player), 
						...filter__association_sessions_and_players_and_table_columns(association)
					}

				})
			)
	
			res.json(list_players)

		})
	} catch(err) {
		await handle_error(res, err, 'POST /session/players')
	}

})

router.patch('', async (req, res) => {

	const { UserID } = req
	
	// Verify query
	const zod_result__query = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result__query.success) return res.status(400).send(zod_result__query.error.message)
	const { session_id } = zod_result__query.data

	// Verify List__Players
	const zod_result__list_players = Zod__Player_List__PATCH.safeParse(req.body.List__Players)
	if(!zod_result__list_players.success) return res.status(400).send(zod_result__list_players.error.message)
	const List__Players = zod_result__list_players.data

	
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
									List___Association__Sessions_And_Players_And_Table_Columns: true
								}
							}
						}
					}
				}
			})
	
			if(!user																			) throw new Custom__Handled_Error('User not found.', 404)	
			if(!user.List___Association__Users_And_Sessions[0]									) throw new Custom__Handled_Error('Session not found.', 404)
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(session.List___Association__Sessions_And_Players_And_Table_Columns.length === 0	) throw new Custom__Handled_Error(`Players don't exist.`, 409)
	
	
			// __________________________________________________ Check if every player exists in both lists __________________________________________________
	
			const tmp__list_associations = user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns
			if(
				tmp__list_associations.length !== List__Players.length || 
				!tmp__list_associations.every(association => List__Players.some(p => p.id === association.PlayerID))
			) throw new Custom__Handled_Error(`List__Players doesn't match.`, 400)
	
	
			// __________________________________________________ Update players __________________________________________________

			await Promise.all(List__Players.map((player, index) => {
				return tx.players.update({
					where: { id: player.id }, 
					data: {
						Name:	player.Name, 
						Color:	player.Color, 
						Association__Sessions_And_Players_And_Table_Columns: {
							update: {
								where: {
									SessionID:	session_id, 
									PlayerID:	player.id, 
								}, 
								data: { Order_Index: index }
							}
						}
					}
				})
			}))
	
			res.sendStatus(204)

		})	
	} catch(err) {
		await handle_error(res, err, 'PATCH /session/players')
	}

})





export default router
