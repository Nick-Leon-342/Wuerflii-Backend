

import express from 'express'
const router = express.Router()

import { filter__association_sessions_and_players_and_table_columns, filter__player } from '../../Filter_DatabaseJSON.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { isArray, isString, isColor, isInt } from '../../IsDataType.js'
import { MAX_PLAYERS, MAX_LENGTH_PLAYER_NAME } from '../../utils.js'
import type { Type__Player } from '../../types/Type__Player.js'
import { handle_error } from '../../handle_error.js'
import sort__list_players from '../../Functions.js'
import { prisma } from '../../index.js'





router.get('', (req, res) => {

	const { UserID } = req
	const SessionID = +(req.query.session_id || 0)

	if(isNaN(SessionID) || SessionID <= 0) return res.status(400).send('SessionID invalid.')


	prisma.users.findUnique({
		where: { id: UserID }, 
		include: { 
			List___Association__Users_And_Sessions: {
				where: { SessionID },
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
	}).then(user => {

		if(!user) return res.status(404).send('User not found.')
		if(!user.List___Association__Users_And_Sessions[0]) return res.status(404).send('Session not found.')

		const list__associations_players = user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns
		const list__players: Array<Type__Player> = list__associations_players.map(asso => ({
			...filter__association_sessions_and_players_and_table_columns(asso), 
			...filter__player(asso.Player)
		}))
		
		res.json(sort__list_players(list__players))

	}).catch(async err => {
		await handle_error(res, err, 'GET /session/players')
	})

})





interface Type__POST__Player {
	Name:	string
	Color:	string
}

function is_player_valid__POST(player: any): player is Type__POST__Player {
	return (
		player.Name && isString(player.Name) &&
		player.Name.length <= MAX_LENGTH_PLAYER_NAME && 
		player.Color && isColor(player.Color)
	)
}

router.post('', async (req, res) => {

	// ____________________________________________________________________________________________________ Add players to session (first time) ____________________________________________________________________________________________________

	const { UserID } = req
	const { SessionID, List__Players } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(
		!List__Players || !isArray(List__Players) || List__Players.length < 1 || List__Players.length > MAX_PLAYERS || 
		!List__Players.every(is_player_valid__POST)
	) return res.status(400).send('List_Players invalid.')


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
											Player: true
										}
									}
								}
							}
						}
					}
				}
			})
	
			if(!user) 																									throw new Custom__Handled_Error('User not found.', 404)	
			if(!user.List___Association__Users_And_Sessions[0]) 															throw new Custom__Handled_Error('Session not found.', 404)
			if(user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns.length > 0)	throw new Custom__Handled_Error('Players already exist.', 409)
			
	
			// __________________________________________________ Create players __________________________________________________
	
			const list_players: Array<Type__Player> = []
			for(let i = 0; List__Players.length > i; i++) {
				const player = await tx.players.create({ 
					data: {
						Name:	List__Players[i].Name, 
						Color:	List__Players[i].Color, 
					}
				})
				
				const association = await tx.association__Sessions_And_Players_And_Table_Columns.create({
					data: {
						SessionID:	user.List___Association__Users_And_Sessions[0].id, 
						PlayerID:	player.id, 
		
						Gnadenwurf_Used:	false, 
						Order_Index: 		i, 
					}
				})
	
				list_players.push({
					...filter__player(player), 
					...filter__association_sessions_and_players_and_table_columns(association)
				})
			}
	
			res.json(list_players)

		})
	} catch(err) {
		await handle_error(res, err, 'POST /session/players')
	}

})





interface Type__PATCH__Player {
	id:		number
	Name:	string
	Color:	string
}

function is_player_valid__PATCH(player: any): player is Type__PATCH__Player {
	return (
		player.id && isInt(player.id) &&
		player.Name && isString(player.Name) &&
		player.Name.length <= MAX_LENGTH_PLAYER_NAME && 
		player.Color && isColor(player.Color)
	)
}

router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, List_Players } = req.body

	if(!SessionID || !isInt(SessionID)) 														return res.status(400).send('SessionID invalid.')
	if(!List_Players || !isArray(List_Players) || !List_Players.every(is_player_valid__PATCH)) 	return res.status(400).send('List_Players invalid.')

	
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
											Player: true
										}
									}
								}
							}
						}
					}
				}
			})
	
			if(!user) 																									throw new Custom__Handled_Error('User not found.', 404)	
			if(!user.List___Association__Users_And_Sessions[0]) 															throw new Custom__Handled_Error('Session not found.', 404)
			if(user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns.length > 0)	throw new Custom__Handled_Error('Players already exist.', 409)
	
	
			// __________________________________________________ Check if every player exists in both lists __________________________________________________
	
			const tmp_list_players = user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns
			if(
				tmp_list_players.length !== List_Players.length || 
				!tmp_list_players.every(player => List_Players.some((p: Type__PATCH__Player) => p.id === player.id))
			) throw new Custom__Handled_Error(`List_Players doesn't match.`, 400)
	
	
			// __________________________________________________ Update players __________________________________________________
	
			for(let i = 0; List_Players.length > i; i++) {
				const p = List_Players[i]
	
				for(const player of tmp_list_players) {
					if(player.id === p.id) {
						await tx.players.update({
							where: { id: p.id }, 
							data: {
								Name:	p.Name, 
								Color:	p.Color, 
							}
						})
	
						await tx.association__Sessions_And_Players_And_Table_Columns.update({ 
							data: { Order_Index: i }, 
							where: {
								SessionID:	user.List___Association__Users_And_Sessions[0].SessionID, 
								PlayerID:	player.id, 	
							}
						})
						continue
					}
				}
			}
	
			res.sendStatus(204)

		})	
	} catch(err) {
		await handle_error(res, err, 'PATCH /session/players')
	}

})





router.get('/env', (req, res) => {

	const { UserID } = req

	prisma.users.findUnique({ where: { id: UserID } }).then(user => {

		if(!user) return res.status(404).send('User not found.')

		res.json({
			MAX_PLAYERS,
			MAX_LENGTH_PLAYER_NAME, 
		})

	}).catch(async err => {
		await handle_error(res, err, 'GET /session/player/env')
	})

})





export default router
