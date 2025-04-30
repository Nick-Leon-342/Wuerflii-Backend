

const express = require('express')
const router = express.Router()

const { 
	FinalScores, 
	Sessions, 
	Players, 
	Users, 
	sequelize, 
} = require('../models')

const { Op } = require('sequelize')
const { MAX_FINALSCORES_LIMIT } = require('../utils')
const { filter_finalscore } = require('../Filter_DatabaseJSON')





router.get('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID) return res.status(400).send('SessionID invalid.')
	if(!FinalScoreID) return res.status(400).send('FinalScoreID invalid.')


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


		// __________________________________________________ FinalScore __________________________________________________

		const finalscore = await FinalScores.findByPk(FinalScoreID, {
			transaction, 
			include: [{
				model: Players, 
				required: true, 
				through: {
					where: { SessionID }, 
					as: 'asso', 
				}
			}], 
		})

		// Check if finalscore exists
		if(!finalscore) {
			await transaction.rollback()
			return res.status(404).send('FinalScore not found.')
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(filter_finalscore(finalscore))


	} catch(err) {
		console.error('GET /finalscore\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})

router.get('/all', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const offset_block = +req.query.offset_block

	if(!SessionID) return res.status(400).send('SessionID invalid.')
	if(!offset_block) return res.status(400).send('Offset invalid.')


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

		
		// __________________________________________________ Get all finalscores __________________________________________________

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


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json({ 
			Has_More: list_finalscores.count > offset_block * MAX_FINALSCORES_LIMIT, 
			List: list_finalscores.rows.map(filter_finalscore), 
		})


	} catch(err) {
		console.error('GET /session/preview/all\n', err)
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





module.exports = router
