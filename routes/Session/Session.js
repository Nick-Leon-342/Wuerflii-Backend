

const express = require('express')
const router = express.Router()

const { filter_player, filter_session, filter_user } = require('../../Filter_DatabaseJSON')
const { isInt, isBoolean, isString } = require('../../IsDataType')
const { isDate } = require('util/types')

const { 
	FinalScores, 
	Players, 
	Sessions, 
	Users,
	sequelize, 
} = require('../../models')

router.use('/preview', require('./Session_Preview'))





router.get('/all', async (req, res) => {

	const { UserID } = req

	Users.findOne({ 
		where: { id: UserID }, 
		include: [{
			model: Sessions, 
			include: Players
		}], 
		order: [
			[ { model: Sessions }, 'LastPlayed', 'DESC' ],
			[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
		]
	}).then(user => {


		if(!user) return res.sendStatus(404)

		res.json({
			User: filter_user(user), 
			List_Sessions: user.Sessions.map(s => {
				return {
					...filter_session(s), 
					List_Players: s.Players.map(p => filter_player(p))
				}
			})
		})



	}).catch((err) => {
		console.log('GET /session/all\n', err)
		res.sendStatus(500)
	})

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { 
		SessionID,

		View, 
		View_Month, 
		View_Year, 

		InputType, 
		ShowScores, 
	} = req.body
	
	if(
		!SessionID || !isInt(SessionID) || 

		(View && (!isString(View) || !['show_month', 'show_year', 'custom_date', 'show_all'].includes(View))) || 
		(View_Month && (!isInt(View_Month) || ![ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].includes(View_Month))) || 
		(View_Year && !isInt(View_Year)) || 
		
		(InputType && (!isString(InputType) || !['select', 'select_and_type', 'type'].includes(InputType))) || 
		(ShowScores !== null && ShowScores !== undefined && !isBoolean(ShowScores))
	) return res.sendStatus(400)


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
		


		if(!user || !user.Sessions[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}


		const json = {}
		if(View) json.View = View
		if(View_Month) json.View_Month = View_Month
		if(View_Year) json.View_Year = View_Year
		
		if(InputType) json.InputType = InputType
		if(ShowScores !== null && ShowScores !== undefined) json.ShowScores = ShowScores



		await user.Sessions[0].update(json, { transaction })
		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.log('PATCH /session\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})

router.delete('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
			}], 
		})

		if(!user || !user.Sessions[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}

		await user.Sessions[0].destroy({ transaction })

		await transaction.commit()

		res.sendStatus(204)


	} catch(err) {
		console.log('DELETE /session/select\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





// __________________________________________________ New CustomDate __________________________________________________

router.post('/date', async (req, res) => {

	const { UserID } = req
	const { SessionID, CustomDate } = req.body

	if(!SessionID || !isInt(SessionID) || !CustomDate || !isDate(new Date(CustomDate))) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [ Players, FinalScores ]
			}], 
			order: [
				[ { model: Sessions }, { model: FinalScores }, 'End', 'ASC' ]
			]
		})


		// ____________________ Check if everything has been found ____________________

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}


		// ____________________ Update session with customdate ____________________

		const session = user.Sessions[0]
		await session.update({ CustomDate }, { transaction })


		// ____________________ Update scores of finalscores ____________________

		let scoresBefore = {}
		let scoresAfter = {}
		for(const p of session.Players) { scoresAfter[p.id] = 0 }

		for(const finalscore of session.FinalScores) {
			if(new Date(finalscore.End) >= new Date(CustomDate)) {

				scoresBefore = { ...scoresAfter }

				// Add wins to scoresAfter
				for(const player_id of finalscore.List_Winner) { scoresAfter[player_id] = scoresAfter[player_id] + 1 }
	
				await finalscore.update({ 
					ScoresBefore_SinceCustomDate: scoresBefore, 
					ScoresAfter_SinceCustomDate: scoresAfter 
				}, { transaction })

			} else {

				// Finalscore isn't later than customdate, therefore set scores to null
				await finalscore.update({ 
					ScoresBefore_SinceCustomDate: null, 
					ScoresAfter_SinceCustomDate: null 
				}, { transaction })

			}
		}


		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.log('POST /session/date\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
