

const express = require('express')
const router = express.Router()

const { filter_player, filter_session, filter_user } = require('../../Filter_DatabaseJSON')
const { sort__list_players } = require('../../Functions')
const { isInt } = require('../../IsDataType')

const { 
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

	if(!isInt(SessionID)) return res.status(400).send('SessionID invalid.')


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
			Exists: Boolean(session.CurrentGameStart), // TODO diese GET-Funktion löschen, aber Exists durch eine Abfrage bei SessionPreview implementieren oder so
		})


	}).catch(err => {
		console.error('GET /session/preview\n', err)
		res.sendStatus(500)
	})

})

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
		console.error('GET /session/preview/table\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





module.exports = router
