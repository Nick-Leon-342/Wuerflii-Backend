

const express = require('express')
const router = express.Router()

const { filter_player, filter_session, filter_user } = require('../../Filter_DatabaseJSON')
const { isInt, isBoolean, isString, isColor } = require('../../IsDataType')
const { MAX_COLUMNS, MAX_LENGTH_SESSION_NAME } = require('../../utils')
const { sort__list_players } = require('../../Functions')
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
	const { session_id } = req.query

	if(session_id && !+session_id) return res.status(400).send('SessionID invalid.')


	// Init sequelize/sql query
	const json = { where: { id: UserID }}
	if(session_id) json.include = [{
		model: Sessions, 
		where: { id: +session_id }, 
	}]


	Users.findOne(json).then(user => {


		if(!user) return res.status(404).send('User not found.')
		if(session_id && !user.Sessions[0]) return res.status(404).send('Session not found.')

		const res_json = {
			MAX_COLUMNS,
			MAX_LENGTH_SESSION_NAME, 
			User: filter_user(user), 
		}
		if(session_id) res_json.Session = filter_session(user.Sessions[0])

		res.json(res_json)


	}).catch(err => {
		console.error('GET /session\n', err)
		res.sendStatus(500)
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


		const user = await Users.findByPk(UserID, { transaction })

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}


		// Create session
		const session = await Sessions.create({
			UserID, 

			Name, 
			Color, 
			Columns, 
			View_List_Years: [], 
			LastPlayed: date, 
		})

		
		// Create association
		await Association__Users_And_Sessions.create({
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
		})


		// Save changes to database and send response
		await transaction.commit()
		res.json({ SessionID: session.id })


	} catch(err) {
		console.error('POST /session\n', err)
		await transaction.rollback()
		res.sendStatus(500)
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
		
		
		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
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


		// Update session
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
		

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.error('PATCH /session\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})

router.delete('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.status(400).send('SessionID invalid.')


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findByPk(UserID, { 
			transaction, 
			include: [{
				model: Sessions, 
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


		// Get all associations
		const list_associations = await Association__Players_And_FinalScores_With_Sessions.findAll({
			where: { SessionID }, 
			transaction, 
		})

		// Remove finalscores through association
		for(const association of list_associations) {
			await FinalScores.destroy({
				where: { id: association.FinalScoreID }, 
				transaction, 
			})
		}


		// Remove players 
		for(const player of user.Sessions[0].Players) {
			await player.destroy({ transaction })
		}


		// Remove session
		await user.Sessions[0].destroy({ transaction })


		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.error('DELETE /session/select\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





router.get('/all', async (req, res) => {

	const { UserID } = req

	const transaction = await sequelize.transaction()
	try {


		const tmp_user = await Users.findByPk(UserID, { transaction })


		// Check if user exists
		if(!tmp_user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}


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
			order: [[ { model: Sessions }, ...getOrder(tmp_user) ]]
		})

		const List_Sessions = []
		for(const session of user.Sessions) {
			const tmp_session = filter_session(session)
			tmp_session.List_Players = sort__list_players(session.Players).map(player => filter_player(player))
			List_Sessions.push(tmp_session)
		}


		await transaction.commit()

		res.json({
			User: filter_user(user), 
			List_Sessions, 
		})


	} catch(err) {
		console.error('GET /session/all\n', err)
		await transaction.rollback()
		res.sendStatus(500)
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

router.post('/date', async (req, res) => {

	const { UserID } = req
	const { SessionID, View_CustomDate } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(!View_CustomDate || !isDate(new Date(View_CustomDate))) return res.status(400).send('CustomDate invalid.')


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [ Players ]
			}], 
		})


		// ____________________ Check if everything exists ____________________

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


		// ____________________ Update session with customdate ____________________

		const session = user.Sessions[0]
		await Association__Users_And_Sessions.update({ View_CustomDate }, { 
			transaction, 
			where: {
				SessionID, 
				UserID, 
			}
		})


		// ____________________ Update scores of finalscores ____________________

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


		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.error('POST /session/date\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
