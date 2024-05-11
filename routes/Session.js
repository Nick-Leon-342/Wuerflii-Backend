

const express = require('express')
const router = express.Router()
const { Players, Users, Sessions, FinalScores, PlayerTable, UpperTable, BottomTable, TableArchive } = require('../models')
const { filter_player, filter_session, filter_finalscore, filter_tablearchive } = require('../Filter_DatabaseJSON')
const { isInt } = require('../IsDataType')
const { generateJoinCode } = require('../CreateNewGame')





// __________________________________________________ Select __________________________________________________

router.get('/select', async (req, res) => {

	const { UserID } = req

	Sessions.findAll({ where: { UserID }, include: Players }).then((list_sessions) => {


		const list = []

		for(const session of list_sessions) {
			
			const list_players = []
			for(const p of session.Players) {list_players.push(filter_player(p))}

			list.push({
				...filter_session(session), 
				List_Players: list_players
			})

		}

		res.json(list)


	}).catch((err) => {
		console.log('GET /session/select', err)
		res.sendStatus(500)
	})

})

router.post('/select', async (req, res) => {

	const { UserID } = req
	const { SessionID } = req.body

	if(!isInt(SessionID)) return res.sendStatus(400)

	PlayerTable.findOne({ where: { SessionID, UserID } }).then((p) => {


		const json = { Exists: Boolean(p) }
		if(p) json.JoinCode = p.JoinCode

		res.json(json)


	}).catch((err) => {
		console.log('POST /session/select', err)
		res.sendStatus(500)
	})

})

router.delete('/select', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.sendStatus(400)

	try {

		const json = { UserID, SessionID }

		await TableArchive.destroy({ where: json })

		await PlayerTable.destroy({ where: json })
		await UpperTable.destroy({ where: json })
		await BottomTable.destroy({ where: json })

		await Players.destroy({ where: json })
		await FinalScores.destroy({ where: json })

		await Sessions.destroy({ where: { UserID, id: SessionID } })

		res.sendStatus(204)

	} catch(err) {
		console.log('DELETE /session/select', err)
		res.sendStatus(500)
	}

})





// __________________________________________________ Preview __________________________________________________

router.get('/preview', async (req, res) => {

	const { UserID } = req
	const session_id = +req.query.session_id

	if(!session_id) return res.sendStatus(400)

	Sessions.findOne({ where: { id: session_id, UserID }, include: [ Players, FinalScores ] }).then((s) => {


		if(!s) return res.sendStatus(404)
		
		const session = filter_session(s)

		const list_players = []
		for(const p of s.Players) {list_players.push(filter_player(p))}

		const list_finalScores = []
		for(const f of s.FinalScores) {list_finalScores.push(filter_finalscore(f))}


		res.json({ 
			Session: session, 
			List_Players: list_players, 
			List_FinalScores: list_finalScores
		})


	}).catch((err) => {
		console.log('GET /session/preview', err)
		res.sendStatus(500)
	})

})

router.post('/preview', async (req, res) => {

	const { UserID } = req
	const JoinCode = generateJoinCode()
	const { SessionID } = req.body

	if(!isInt(SessionID)) return res.sendStatus(400)

	if(await destroyGame(SessionID, UserID) === 500) return res.sendStatus(500)
	

	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then(async (s) => {


		if(!s) return res.sendStatus(404)

		await s.update({ JoinCode })
		await createNewGame(new Date(), UserID, s.Players, SessionID, s.Columns, JoinCode)
		res.json({ JoinCode })


	}).catch((err) => {
		console.log('POST /session/preview', err)
		res.sendStatus(500)
	})

})





// __________________________________________________ Preview - Table __________________________________________________

router.get('/preview-table', async (req, res) => {

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





// __________________________________________________ Date __________________________________________________

router.post('/date', async (req, res) => {

	const { UserID } = req
	const { SessionID, CustomDate } = req.body

	if(!SessionID || !isInt(SessionID) || !CustomDate || !isDate(new Date(CustomDate))) return res.sendStatus(500)

	Sessions.findOne({ where: { id: SessionID, UserID }, include: [ FinalScores, Players ] }).then((session) => {

		if(!session === 0) return res.sendStatus(404)

		session.update({ CustomDate: new Date(CustomDate) }).then(async () => {
			
			let scoresBefore = {}
			let scoresAfter = {}

			for(const p of session.Players) {scoresAfter[p.Alias] = 0}


			// Get finalScores later than customdate
			const list_finalscores = []
			for(const f of session.FinalScores) {
				if(new Date(f.End) >= new Date(CustomDate)) {
					list_finalscores.push(f)
				}
			}
			list_finalscores.sort((a, b) => new Date(a.End) - new Date(b.End))


			// Initialize ScoresAfter/ScoresBefore for correct finalScores
			for(const f of list_finalscores) {

				scoresBefore = { ...scoresAfter }

				// Add wins to scoresAfter
				for(const playerAlias of f.List_Winner) {
					scoresAfter[playerAlias] = scoresAfter[playerAlias] + 1
				}

				// Update finalScore
				await f.update({ ScoresBefore_SinceCustomDate: scoresBefore, ScoresAfter_SinceCustomDate: scoresAfter }).catch((err) => {
					console.log('POST /session/date update finalscore', err)
					return res.sendStatus(500)
				})

			}
			
			res.sendStatus(204)
			

		}).catch((err) => {
			console.log('POST /session/date session update', err)
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('POST /customdate', err)
		res.sendStatus(500)
	})

})





// __________________________________________________ Update __________________________________________________

router.post('/update', (req, res) => {

	const { UserID } = req
	const { SessionID, Columns, List_Players } = req.body
	
	if(!List_Players) return res.sendStatus(400)

	const List_PlayerOrder = List_Players.map((p) => p.Alias)
	const updatedSession = { List_PlayerOrder }
	if(Columns) {
		if(!isInt(Columns) || Columns < 1 || Columns > ( process.env.MAX_COLUMNS || 16 )) return res.sendStatus(400)
		updatedSession['Columns'] = Columns
	}


	Sessions.findOne({ where: { id: SessionID, UserID }, include: Players }).then(async (s) => {


		if(!s) return res.sendStatus(404)

		//Check if List_Players is valid
		if(s.Players.length !== List_Players.length) return res.sendStatus(400)
		for(const p of s.Players) {

			let found = false

			for(const newP of List_Players) {
				if(newP.id === p.id) {
					if(!newP.Color || !isColor(newP.Color) || !newP.Name || !isString(newP.Name)) {
						break
					} else {
						found = true
						break
					}
				}
			}

			if(!found) return res.sendStatus(400)

		}


		s.update(updatedSession).then(async (s) => {


			if(s[0] === 0) return res.sendStatus(404)
			
			for(const tmp of List_Players) {
				for(const p of s.Players) {
					if(tmp.Alias === p.Alias) {
	
						await p.update({
							Name: tmp.Name,
							Color: tmp.Color,
						})
						break
	
					}
				}
			}
	
			res.sendStatus(204)


		}).catch((err) => {
			console.log('POST /session/update update session', err)
			res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('POST /session/update', err)
		res.sendStatus(500)
	})

})





module.exports = router
