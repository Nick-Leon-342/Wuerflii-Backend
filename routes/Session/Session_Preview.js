

const express = require('express')
const router = express.Router()

const { filter_player, filter_session, filter_finalscore, filter_user, filter_table_archive } = require('../../Filter_DatabaseJSON')
const { isInt } = require('../../IsDataType')
const { Op } = require('sequelize')

const { 
	FinalScores, 
	Players, 
	Sessions, 
	Table_Archives, 
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
	const offset = +req.query.offset_int

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


		const finalscores = await FinalScores.findAndCountAll({
			where: {
				...getQuery(tmp_session), 
				SessionID
			},
			offset,
			transaction, 
			order: [['End', 'DESC']],
			limit: MAX_FINALSCORES_LIMIT,
		}) 

		await transaction.commit()

		res.json({ 
			List_Length: finalscores.count, 
			List: finalscores.rows.map(f => filter_finalscore(f)), 
		})


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
	
	
	Users.findOne({ 
		where: { id: UserID }, 
		include: [{
			model: Sessions, 
			where: { id: SessionID }, 
			include: [ Players, {
				model: FinalScores, 
				where: { id: FinalScoreID }, 
				include: Table_Archives
			}]
		}], 
		order: [
			[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
			[ { model: Sessions }, { model: Players }, 'Order_Index', 'ASC' ],
		]
	}).then(user => {
		
		
		if(
			!user || 
			!user.Sessions[0] || 
			!user.Sessions[0].Players[0] || 
			!user.Sessions[0].FinalScores[0] || 
			!user.Sessions[0].FinalScores[0].Table_Archive
		) return res.sendStatus(404)

		const List_Players = []
		for(const p of user.Sessions[0].Players) {
			const tmp = filter_player(p)

			for(const ta of user.Sessions[0].FinalScores[0].Table_Archive.Table) {
				if(ta.PlayerID === p.id) {
					tmp.List_Table_Columns = ta.List_Table_Columns
					continue
				}
			}

			List_Players.push(tmp)
		}

		res.json({
			User: filter_user(user), 
			Session: filter_session(user.Sessions[0]),
			List_Players
		})


	}).catch(err => {
		console.log('GET /session/preview/table\n', err)
		res.sendStatus(500)
	})

})





module.exports = router
