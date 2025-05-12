

const express = require('express')
const router = express.Router()

const { filter_player, filter_session } = require('../../Filter_DatabaseJSON')
const { isInt, isBoolean, isString, isColor } = require('../../IsDataType')
const { MAX_COLUMNS, MAX_LENGTH_SESSION_NAME } = require('../../utils')
const { sort__list_players } = require('../../Functions')
const { handle_error } = require('../../handle_error')
const { isDate } = require('util/types')

const { 
	Association__Players_And_FinalScores_With_Sessions, 
	Association__Users_And_Sessions, 

	FinalScores, 
	Players, 
	Sessions, 
	Users,
	sequelize, 
} = require('../../models')

router.use('/preview', require('./Session_Preview'))
router.use('/players', require('./Session_Players'))





router.get('', (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!SessionID) return res.status(400).send('SessionID invalid.')


	Users.findByPk(UserID, {
		include: [{
			model: Sessions, 
			required: false, 
			where: { id: SessionID }, 
		}]
	}).then(user => {


		// Check if user exists
		if(!user) return res.status(404).send('User not found.')

		// Check if session exists
		if(!user.Sessions[0]) return res.status(404).send('Session not found.')

		// Response
		res.json(filter_session(user.Sessions[0]))


	}).catch(async err => {
		await handle_error(res, err, 'GET /session')
	})

})

router.post('', async (req, res) => {

	const { UserID } = req
	const { Name, Color, Columns } = req.body
	const date = new Date()

	if(!Color || !isColor(Color)) return res.status(400).status('Color invalid.')
	if(!Name || !isString(Name) || Name.length > MAX_LENGTH_SESSION_NAME) return res.status(400).send('Name invalid.')
	if(!Columns || !isInt(Columns) || Columns < 1 || Columns > MAX_COLUMNS) return res.status(400).send('Columns invalid.')


	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, { transaction })

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}


		// __________________________________________________ Create session __________________________________________________

		const session = await Sessions.create({
			UserID, 

			Name, 
			Color, 
			Columns, 
			View_List_Years: [], 
			LastPlayed: date, 
		}, { transaction })

		
		// __________________________________________________ Create association __________________________________________________

		const association = await Association__Users_And_Sessions.create({
			UserID, 
			SessionID: session.id, 

			InputType: 'select',
			Scores_Visible: true, 
	
			View: 'show_all', 
			View_Month: date.getMonth() + 1, 
			View_Year: date.getFullYear(), 
			View_CustomDate: date, 

			Statistics_Show_Border: false, 
			Statistics_View: 'statistics_overall', 
			Statistics_View_Month: date.getMonth() + 1, 
			Statistics_View_Year: date.getFullYear(), 
		}, { transaction })


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(filter_session({
			...session.dataValues, 
			Association__Users_And_Sessions: association, 
		}))


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'POST /session')
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
		Statistics_View, 
		Statistics_View_Month, 
		Statistics_View_Year, 
	} = req.body
	
	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(Name && !isString(Name)) return res.status(400).send('Name invalid.')
	if(Color && !isColor(Color)) return res.status(400).send('Color invalid.')
	if(Columns && !isInt(Columns)) return res.status(400).send('Columns invalid.')

	if(View && (!isString(View) || !['show_month', 'show_year', 'show_custom_date', 'show_all'].includes(View))) return res.status(400).send('View invalid.')
	if(View_Month && (!isInt(View_Month) || ![ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].includes(View_Month))) return res.status(400).send('View_Month invalid.')
	if(View_Year && !isInt(View_Year)) return res.status(400).send('View_Year invalid.')
	if(InputType && (!isString(InputType) || !['select', 'select_and_type', 'type'].includes(InputType))) return res.status(400).send('InputType invalid.')
	if(Scores_Visible !== undefined && !isBoolean(Scores_Visible)) return res.status(400).send('Scores_Visible invalid.')
		
	if(Statistics_Show_Border !== undefined && !isBoolean(Statistics_Show_Border)) return res.status(400).send('Statistics_Show_Border invalid.')
	if(Statistics_View && (!isString(Statistics_View) || ![ 'statistics_overall', 'statistics_year', 'statistics_month' ].includes(Statistics_View))) return res.status(400).send('Statistics_View invalid.')
	if(Statistics_View_Month && (!isInt(Statistics_View_Month) || ![ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].includes(Statistics_View_Month))) return res.status(400).send('Statistics_View_Month invalid.')
	if(Statistics_View_Year && !isInt(Statistics_View_Year)) return res.status(400).send('Statistics_View_Year invalid.')


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
			Statistics_View, 
			Statistics_View_Month, 
			Statistics_View_Year, 
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

	Users.findByPk(UserID).then(user => {


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
			const tmp_session = filter_session(session)
			tmp_session.List_Players = sort__list_players(session.Players).map(filter_player)
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

	const view = user.View_Sessions
	const desc = user.View_Sessions_Desc

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





module.exports = router
