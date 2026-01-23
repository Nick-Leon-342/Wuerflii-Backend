

import express from 'express'
const router = express.Router()

import { isDate } from 'util/types'
import sort__list_players from '../../Functions.js'
import { handle_error } from '../../handle_error.js'
import { MAX_COLUMNS, MAX_LENGTH_SESSION_NAME } from '../../utils.js'
import { isInt, isBoolean, isString, isColor } from '../../IsDataType.js'
import { filter__association_users_and_sessions, filter__player, filter__session } from '../../Filter_DatabaseJSON.js'

import route__session_players from './Session_Players.js'
import { prisma } from '../../index.js'
import { List__Months } from '../../types/Type___List__Months.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
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


		// Check if user exists
		if(!user) return res.status(404).send('User not found.')

		// Check if session exists
		console.log(user)
		if(!user.List__Association_Users_And_Sessions) return res.status(404).send('Session not found.')

		// Response
		res.json(filter__session(user.Sessions[0]))


	}).catch(async err => {
		await handle_error(res, err, 'GET /session')
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
					View__Month: 				List__Months[date.getMonth()] || 'JANUARY', 
					View__Year: 				date.getFullYear(), 
					View__Custom_Date: 			date, 
		
					Statistics__Show_Border:	true, 
					Statistics__View: 			'STATISTICS_OVERALL', 
					Statistics__View_Month: 	List__Months[date.getMonth()] || 'JANUARY', 
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
		View_Month, 
		View_Year, 
		
		InputType, 
		Scores_Visible, 

		Statistics_Show_Border, 
		Statistics__View, 
		Statistics__View_Month, 
		Statistics__View_Year, 
	} = req.body
	
	if(!SessionID || !isInt(SessionID)) 	return res.status(400).send('SessionID invalid.')
	if(Name && !isString(Name)) 			return res.status(400).send('Name invalid.')
	if(Color && !isColor(Color)) 			return res.status(400).send('Color invalid.')
	if(Columns && !isInt(Columns)) 			return res.status(400).send('Columns invalid.')

	if(View && (!isString(View) || !['show_month', 'show_year', 'show_custom_date', 'show_all'].includes(View)))	return res.status(400).send('View invalid.')
	if(View_Month && (!isInt(View_Month) || ![ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].includes(View_Month))) 		return res.status(400).send('View_Month invalid.')
	if(View_Year && !isInt(View_Year)) 																				return res.status(400).send('View_Year invalid.')
	if(InputType && (!isString(InputType) || !['select', 'select_and_type', 'type'].includes(InputType))) 			return res.status(400).send('InputType invalid.')
	if(Scores_Visible !== undefined && !isBoolean(Scores_Visible)) 													return res.status(400).send('Scores_Visible invalid.')
		
	if(Statistics_Show_Border !== undefined && !isBoolean(Statistics_Show_Border)) 																		return res.status(400).send('Statistics_Show_Border invalid.')
	if(Statistics__View && (!isString(Statistics__View) || ![ 'statistics_overall', 'statistics_year', 'statistics_month' ].includes(Statistics__View))) 	return res.status(400).send('Statistics__View invalid.')
	if(Statistics__View_Month && (!isInt(Statistics__View_Month) || ![ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].includes(Statistics__View_Month))) 			return res.status(400).send('Statistics__View_Month invalid.')
	if(Statistics__View_Year && !isInt(Statistics__View_Year)) 																							return res.status(400).send('Statistics__View_Year invalid.')


	const transaction = await sequelize.transaction()
	try {
		

		// __________________________________________________ User __________________________________________________
		
		const user = await Users.findByPk(UserID, { 
			transaction, 
			include: [{
				model: Sessions, 
				required: false, 
				where: { id: SessionID }, 
			}]
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


		// __________________________________________________ Update session __________________________________________________

		await user.Sessions[0].update({
			Name, 
			Color, 
			Columns, 
			Scores_Visible, 
		}, { transaction })


		// Update association if there are some variables to change
		const json_updates_association = {
			InputType, 
			Scores_Visible, 

			View, 
			View_Month, 
			View_Year, 

			Statistics_Show_Border, 
			Statistics__View, 
			Statistics__View_Month, 
			Statistics__View_Year, 
		}

		await Association__Users_And_Sessions.update(json_updates_association, {
			where: {
				SessionID: user.Sessions[0].id, 
				UserID, 
			}, 
			transaction, 
		})
		

		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'PATCH /session')
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

	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ Temporary user to get attributes for 'real' query __________________________________________________

		const tmp__user = await Users.findByPk(UserID, { transaction })

		// Check if user exists
		if(!tmp__user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}


		// __________________________________________________ Get all sessions __________________________________________________

		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				include: [{
					model: Players, 
					through: { 
						as: 'asso', 
						attributes: [ 'Gnadenwurf_Used', 'Order_Index' ] 
					}, 
				}], 
			}], 
			order: [[ { model: Sessions }, ...getOrder(tmp__user) ]]
		})

		const list_sessions = []
		for(const session of user.Sessions) {
			const tmp_session = filter__session(session)
			tmp_session.List_Players = sort__list_players(session.Players).map(filter__player)
			list_sessions.push({ ...tmp_session, Checkbox_Checked: false })
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(list_sessions)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'GET /session/all')
	}

})

function getOrder(user) {

	const view = user.View__Sessions
	const desc = user.View__Sessions_Desc

	switch(view) {
		case 'Created':
			return [ 'createdAt', desc ? 'ASC' : 'DESC' ]

		case 'Name':
			return [ 'Name', desc ? 'ASC' : 'DESC' ]

		default:
			return [ 'LastPlayed', desc ? 'DESC' : 'ASC' ]

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
