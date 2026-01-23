

import express from 'express'
const router = express.Router()

import { isArray, isString, isColor, isInt } from '../../IsDataType.js'
import { MAX_PLAYERS, MAX_LENGTH_PLAYER_NAME } from '../../utils.js'
import { filter__player } from '../../Filter_DatabaseJSON.js'
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
			List__Association_Users_And_Sessions: {
				where: { SessionID },
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
		}
	})
	// Users.findByPk(UserID, { 
	// 	include: [{
	// 		model: Sessions, 
	// 		required: false, 
	// 		where: { id: SessionID }, 
	// 		include: [{
	// 			model: Players, 
	// 			through: { as: 'asso' }, 
	// 		}], 
	// 	}], 
	// }).then(user => {


	// 	if(!user) return res.status(404).send('User not found.')
	// 	if(!user.Sessions[0]) return res.status(404).send('Session not found.')

	// 	res.json(sort__list_players(user.Sessions[0].Players).map(filter__player))


	// }).catch(async err => {
	// 	await handle_error(res, err, 'GET /session/players')
	// })

})

router.post('', async (req, res) => {

	// ____________________________________________________________________________________________________ Add players to session (first time) ____________________________________________________________________________________________________

	const { UserID } = req
	const { SessionID, List_Players } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(
		!List_Players || !isArray(List_Players) || List_Players.length < 1 || List_Players.length > MAX_PLAYERS || 
		List_Players.some(player => (!player.Name || !isString(player.Name) || player.Name.length > MAX_LENGTH_PLAYER_NAME || !player.Color || !isColor(player.Color)))
	) return res.status(400).send('List_Players invalid.')


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

		// Check if session already has players
		if(user.Sessions[0].Players.length > 0) {
			await transaction.rollback()
			return res.status(409).send('Players already exist.')
		}
		

		// __________________________________________________ Create players __________________________________________________

		const list_players = []
		for(let i = 0; List_Players.length > i; i++) {
			const player = await Players.create({ 
				Name: List_Players[i].Name, 
				Color: List_Players[i].Color, 
			}, { transaction })
			
			const asso = await Association__Sessions_And_Players.create({
				SessionID: user.Sessions[0].id, 
				PlayerID: player.id, 

				Gnadenwurf_Used: false, 
				Order_Index: i, 
			}, { transaction })

			list_players.push(filter__player({
				...player.dataValues, 
				asso, 
			}))
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(list_players)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'POST /session/players')
	}

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, List_Players } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(
		!List_Players || 
		!List_Players.every(p => (
			p.id && isInt(p.id) && 
			p.Name && isString(p.Name) &&
			p.Color && isColor(p.Color)
		)) ||
		!List_Players.every(p => p.Name.length > 0 && p.Name.length <= MAX_LENGTH_PLAYER_NAME)
	) return res.status(400).send('List_Players invalid.')

	
	const transaction = await sequelize.transaction()
	try {

		
		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					through: { as: 'asso' }, 
				}], 
			}]
		})

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}

		// Check if session exists
		if(!user.Sessions[0]){
			await transaction.rollback()
			return res.status(404).send('Session not found.')
		}

		// Check if players exist
		if(!user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.status(404).send('Players not found.')
		}


		// __________________________________________________ Check if every player exists in both lists __________________________________________________

		const tmp_list_players = user.Sessions[0].Players
		if(
			tmp_list_players.length !== List_Players.length || 
			!tmp_list_players.every(player => List_Players.some(p => p.id === player.id))
		) {
			await transaction.rollback()
			return res.status(400).send(`List_Players doesn't match.`)
		}


		// __________________________________________________ Update players __________________________________________________

		for(let i = 0; List_Players.length > i; i++) {
			const p = List_Players[i]

			for(const player of tmp_list_players) {
				if(player.id === p.id) {
					await player.update({
						Name: p.Name, 
						Color: p.Color, 
					}, { transaction })

					await Association__Sessions_And_Players.update({ Order_Index: i }, {
						transaction, 
						where: {
							SessionID: user.Sessions[0].id, 
							PlayerID: player.id, 
						}, 
					})
					continue
				}
			}
		}


		// __________________________________________________ Response __________________________________________________
		
		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
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
