

const express = require('express')
const router = express.Router()

const { filter_player, filter_session, filter_finalscore, filter_user, filter_table_archive } = require('../../Filter_DatabaseJSON')
const { sort__list_players } = require('../../Functions')
const { MAX_FINALSCORES_LIMIT } = require('../../utils')
const { isInt } = require('../../IsDataType')

const { Op } = require('sequelize')

const { 
	Association__Players_And_FinalScores_With_Sessions, 

	FinalScores, 
	Players, 
	Sessions, 
	Table_Archives, 
	Users,

	sequelize, 
} = require('../../models')





router.get('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!isInt(SessionID)) return res.sendStatus(400)


	Users.findByPk(UserID, { 
		include: [{
			model: Sessions, 
			where: { id: SessionID }, 
			include: [{
				model: Players, 
				through: { 
					as: 'asso', 
					attributes: [ 'Order_Index' ],  
				}, 
			}]
		}], 
	}).then(user => {


		if(!user) return res.status(404).send('User not found.')
		if(!user.Sessions[0]) return res.status(404).send('Session not found.')

		const session = user.Sessions[0]
		
		res.json({
			Session: filter_session(session), 
			List_Players: sort__list_players(session.Players).map(p => filter_player(p)), 
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
			where: getQuery(user.Sessions[0]),  
			offset: (offset_block - 1) * MAX_FINALSCORES_LIMIT,
			include: [{
				model: Players, 
				required: true, 
				through: {
					where: { SessionID }, 
					as: 'asso', 
				}
			}], 
			transaction, 
			order: [[ 'End', 'DESC' ]],
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

	const asso = session.Association__Users_And_Sessions
	
	const year = asso.View_Year
	const month = asso.View_Month
	
	const startOfYear = new Date(`${year}-01-01`)
	const endOfYear = new Date(`${year}-12-31 23:59:59`)

	const startOfMonth = new Date(`${year}-${String(month).padStart(2, '0')}-01`)
	const endOfMonth = new Date(year, month, 0, 23, 59, 59)

	switch(asso.View) {
		case 'show_month':
			return { End: { [Op.between]: [ startOfMonth, endOfMonth ] } }

		case 'show_year':
			return { End: { [Op.between]: [ startOfYear, endOfYear ] } }

		case 'show_custom_date':
			return { End: { [Op.gte]: new Date(asso.View_CustomDate) } }

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
	

	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findByPk(UserID, {
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


		const finalscore = await FinalScores.findByPk(FinalScoreID, {
			include: [
				Table_Archives, 
				{
					model: Players, 
					required: true, 
					through: {
						where: { SessionID }, 
						as: 'asso', 
					}
				}
			], 
			transaction, 
		})


		// Check if association exists
		if(!finalscore) {
			await association.rollback()
			return res.status(404).send('FinalScore not found.')
		}


		const tmp_list_players = sort__list_players(finalscore.Players)
		const List_Players = []
		for(const player of tmp_list_players) {
			const tmp_player = filter_player(player)

			for(const table_archive of finalscore.Table_Archive.Table) {
				if(table_archive.PlayerID === player.id) {
					tmp_player.List_Table_Columns = table_archive.List_Table_Columns
					continue
				}
			}

			List_Players.push(tmp_player)
		}


		res.json({
			User: filter_user(user), 
			Session: filter_session(user.Sessions[0]),
			List_Players
		})



	} catch(err) {
		console.log('GET /session/preview/table\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
