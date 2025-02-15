

const express = require('express')
const router = express.Router()

const { filter_player, filter_user, filter_session } = require('../../Filter_DatabaseJSON')

const { 
	Association__Players_And_FinalScores_With_Sessions, 

	Users, 
	Players, 
	Sessions, 
	FinalScores, 

	sequelize, 
} = require('../../models')





router.get('', async (req, res) => {

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
				include: [
					{
						model: Players, 
						through: { as: 'asso' }, 
					}, {
						model: Association__Players_And_FinalScores_With_Sessions, 
						as: 'association', 
					}
				],
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


		const list_finalscores = []
		for(const association of user.Sessions[0].association) {
			if(list_finalscores.filter(finalscore => finalscore.id === association.FinalScoreID).length > 0) continue
			const finalscore = await FinalScores.findByPk(association.FinalScoreID, { 
				transaction, 
				include: [{
					model: Players, 
					through: { as: 'asso' }
				}]
			})
			list_finalscores.push(finalscore)
		}


		let draws = 0
		const total = {}

		
		const counts = list_finalscores.reduce((acc, item) => {

			const date = new Date(item.End)
			const year = date.getFullYear()
			const month = date.getMonth() + 1
			const day = date.getDate()
		
			if(!acc[year]) acc[year] = { Total: 0, Winners: {}, Draws: 0 }
			if(!acc[year][month]) acc[year][month] = { Total: 0, Winners: {}, Draws: 0 }
			if(!acc[year][month][day]) acc[year][month][day] = { Total: 0, Winners: {}, Draws: 0 }
		
			acc[year][month][day].Total++
			acc[year][month].Total++
			acc[year].Total++

			const list_winners = item.Players.filter(player => player.asso.IsWinner)

			if(list_winners.length > 1) {
				draws++
				acc[year].Draws++
				acc[year][month].Draws++
				acc[year][month][day].Draws++
			}

			list_winners.forEach(player => {
				const id = player.id

				// total
				if(!total[id]) total[id] = 0
				total[id]++
	
				// year
				if(!acc[year].Winners[id]) acc[year].Winners[id] = 0
				acc[year].Winners[id]++
	
				// month
				if(!acc[year][month].Winners[id]) acc[year][month].Winners[id] = 0
				acc[year][month].Winners[id]++
	
				// day
				if(!acc[year][month][day].Winners[id]) acc[year][month][day].Winners[id] = 0
				acc[year][month][day].Winners[id]++
			})
		
			return acc
			
		}, {})


		await transaction.commit()
		res.json({ 
			Total: total, 
			Draws: draws, 
			Counts: counts, 
			User: filter_user(user), 
			Session: filter_session(user.Sessions[0]), 
			Total_Games_Played: list_finalscores.length, 
			List_Players: user.Sessions[0].Players.map(player => filter_player(player))
		})


	} catch(err) {
		console.error('GET /analytics/session\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
