

const express = require('express')
const router = express.Router()

const { 
	Association__Players_And_FinalScores_With_Sessions, 

	Users, 
	Sessions, 
	FinalScores, 

	sequelize, 
} = require('../../models')
const { filter_user } = require('../../Filter_DatabaseJSON')

router.use('/session', require('./Analytics_Session'))





router.get('', async (req, res) => {

	const { UserID } = req

	const transaction = await sequelize.transaction()
	try {


		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				include: [{
					model: Association__Players_And_FinalScores_With_Sessions, 
					as: 'association', 
				}],  
			}], 
		})


		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}

		const list_finalscores = []
		for(const session of user.Sessions) {
			for(const association of session.association) {
				if(list_finalscores.filter(finalscore => finalscore.id === association.FinalScoreID).length > 0) continue
				const finalscore = await FinalScores.findByPk(association.FinalScoreID, { transaction })
				list_finalscores.push(finalscore)
			}
		}

		
		const counts = list_finalscores.reduce((acc, item) => {
			const date = new Date(item.End)
			const year = date.getFullYear()
			const month = date.getMonth() + 1
			const day = date.getDate()
		
			if (!acc[year]) acc[year] = { Total: 0 }
			if (!acc[year][month]) acc[year][month] = { Total: 0 }
			if (!acc[year][month][day]) acc[year][month][day] = 0
		
			acc[year][month][day]++
			acc[year][month].Total++
			acc[year].Total++
		
			return acc
		}, {})


		await transaction.commit()
		res.json({ 
			Counts: counts, 
			User: filter_user(user), 
			Total_Sessions: user.Sessions.length, 
			Total_Games_Played: list_finalscores.length, 
		})


	} catch(err) {
		console.error('GET /analytics\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
