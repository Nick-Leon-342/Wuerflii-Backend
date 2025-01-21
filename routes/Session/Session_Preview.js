

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
const { MAX_FINALSCORES_LIMIT } = require('../../utils')





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


		if(!user) return res.status(404).send('User not found.')
		if(!user.Sessions[0]) return res.status(404).send('Session not found.')

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
	const offset_block = +req.query.offset_block

	if(!SessionID) return res.status(400).send('SessionID invalid.')
	if(!offset_block) return res.status(400).send('Offset invalid.')


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


		const list_finalscores = await FinalScores.findAndCountAll({
			where: {
				...getQuery(user.Sessions[0]), 
				SessionID, 
			},
			offset: (offset_block - 1) * MAX_FINALSCORES_LIMIT,
			transaction, 
			order: [['End', 'DESC']],
			limit: MAX_FINALSCORES_LIMIT,
		}) 

		await transaction.commit()

		res.json({ 
			Has_More: list_finalscores.count > offset_block * MAX_FINALSCORES_LIMIT, 
			List: list_finalscores.rows.map(f => filter_finalscore(f)), 
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
		
		
		// Check if user exists
		if(!user) return res.status(404).send('User not found.')
		if(!user.Sessions[0]) return res.status(404).send('Session not found.')
		if(!user.Sessions[0].Players[0]) return res.status(404).send('Players not found.')
		if(!user.Sessions[0].FinalScores[0]) return res.status(404).send('Finalscores not found.')
		if(!user.Sessions[0].FinalScores[0].Table_Archive) return res.status(404).send('Table_Archive not found.')
		

		const List_Players = []
		for(const player of user.Sessions[0].Players) {
			const tmp_player = filter_player(p)

			for(const table_archive of user.Sessions[0].FinalScores[0].Table_Archive.Table) {
				if(table_archive.PlayerID === player.id) {
					tmp_player.List_Table_Columns = table_archive.List_Table_Columns
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
