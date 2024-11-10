

const express = require('express')
const router = express.Router()

const { filter_player, filter_session, filter_finalscore, filter_user } = require('../../Filter_DatabaseJSON')
const { isInt } = require('../../IsDataType')
const { isDate } = require('util/types')
const { Op } = require('sequelize')

const { 
	FinalScores, 
	Players, 
	Sessions, 
	Users,
	sequelize, 
} = require('../../models')
const { MAX_FINALSCORES_LIMIT } = require('../../utils_env')





router.get('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!isInt(SessionID)) return res.sendStatus(400)


	Users.findOne({ 
		where: { id: UserID }, 
		include: [{
			model: Sessions, 
			where: { id: SessionID }, 
			include: Players
		}], 
		order: [
			[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
		]
	}).then(user => {


		if(!user || !user.Sessions[0]) return res.sendStatus(404)

		const session = user.Sessions[0]
		
		res.json({
			Session: filter_session(session), 
			List_Players: session.Players.map(p => filter_player(p)), 
			User: filter_user(user), 
			Exists: Boolean(session.CurrentGameStart), 
		})


	}).catch(err => {
		console.log('GET /session/preview\n', err)
		res.sendStatus(500)
	})

})

router.get('/all', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const offset = +req.query.offset

	if(!SessionID || offset === null || offset === undefined) return res.sendStatus(400)


	const transaction = await sequelize.transaction()
	try {


		const tmp_user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
			}]
		})

		if(!tmp_user || !tmp_user.Sessions[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}

		const tmp_session = tmp_user.Sessions[0]


		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: FinalScores, 
					where: getQuery(tmp_session), 
					order: [['End', 'DESC']], 
					offset, 
					limit: MAX_FINALSCORES_LIMIT
				}]
			}], 
		})

		await transaction.commit()

		res.json({ List_FinalScores: user.Sessions[0].FinalScores.map(f => filter_finalscore(f)) })


	} catch(err) {
		console.log('GET /session/preview/all\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})

function getQuery( session ) {

	const year = session.View_Year
	const month = session.View_Month
	
	const startOfYear = new Date(`${year}-01-01`)
	const endOfYear = new Date(`${year}-12-31 23:59:59`)

	const startOfMonth = new Date(`${year}-${String(month).padStart(2, '0')}-01`)
	const endOfMonth = new Date(year, month, 0, 23, 59, 59)

	switch(session.View) {
		case 'show_month':
			return { End: { [Op.between]: [ startOfMonth, endOfMonth ] } }

		case 'show_year':
			return { End: { [Op.between]: [ startOfYear, endOfYear ] } }

		case 'custom_date':
			return { End: { [Op.gte]: new Date(session.CustomDate) } }

		default: 
			return {}
	}

}







// __________________________________________________ Preview - Table __________________________________________________

router.get('/table', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID || !FinalScoreID) return res.sendStatus(400)


	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then((s) => {

		if(!s) return res.sendStatus(404)

		FinalScores.findOne({ where: { id: FinalScoreID, UserID, SessionID }, include: TableArchive }).then((f) => {

			if(!f || !f.TableArchive) return res.sendStatus(404)

			const json = { 
				List_PlayerOrder: s.List_PlayerOrder, 
				List_Players: s.Players.map((p) => filter_player(p)), 
				FinalScores: filter_finalscore(f), 
				...filter_tablearchive(f.TableArchive)
			}

			res.json(json)


		}).catch((err) => {
			console.log('GET /session/preview-table finalscores', err)
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('GET /session/preview-table findone sessions', err)
		res.sendStatus(500)
	})

})





module.exports = router
