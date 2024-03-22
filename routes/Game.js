

const express = require('express')
const router = express.Router()
const { Players, Users, Sessions, FinalScores, PlayerTable, UpperTable, BottomTable, TableArchive } = require('../models')
const { getSessionJSON, getPlayerJSON, getFinalScoreJSON, getPlayerTableJSON, getUpperTableJSON, getBottomTableJSON, getTableJSON } = require('../DatabaseElementToJSON')
const { isInt, isArray, isBoolean, isString, isColor } = require('../IsDataType')
const { possibleEntries_upperTable, possibleEntries_bottomTable } = require('../PossibleEntries')
const { destroyGame } = require('../DestroyGame')




router.get('', (req, res) => {
	
	const { UserID } = req
	const SessionID = +req.query.sessionid
	const JoinCode = +req.query.joincode
	if(!SessionID || !JoinCode) return res.sendStatus(400)

	Sessions.findOne({ where: { id: SessionID, UserID, JoinCode }, include: [ Players, PlayerTable, UpperTable, BottomTable] }).then((s) => {

		if(!s) return res.sendStatus(404)

		const TableColumns = []
		for(const ut of s.UpperTables) {	TableColumns.push(getUpperTableJSON(ut))	}
		for(const bt of s.BottomTables) {	TableColumns.push(getBottomTableJSON(bt))	}

		const Gnadenwürfe = getPlayerTableJSON(s.PlayerTables[0])

		const list_players = []
		for(const p of s.Players) {
			list_players.push(getPlayerJSON(p))
		}
		const Session = getSessionJSON(s, list_players)

		res.json({
			Session,
			Gnadenwürfe,
			TableColumns,
		})

	}).catch((err) => {
		console.log('GET /Game', err)
		res.sendStatus(500)
	})

})

router.post('', async (req, res) => {
	
	const { UserID } = req
	const date = new Date()

	const { SessionID, JoinCode, WinnerAlias, List_PlayerOrder, List_Players } = req.body

	
	if(!SessionID || !JoinCode || !List_PlayerOrder || !List_Players) return res.sendStatus(400)



	Sessions.findOne({ where: { id: SessionID, UserID }, include: [ Players, UpperTable, BottomTable, PlayerTable ] }).then(async (s) => {

		if(!s) return res.sendStatus(404)

		//Check if received lists have same players as stored in database
		if(List_PlayerOrder.length !== s.Players.length || List_Players.length !== s.Players.length) return res.sendStatus(400)
		for(const p of s.Players) {if(!List_PlayerOrder.includes(p.Alias) || !List_Players.some(item => item.id === p.id)) return res.sendStatus(400)}

		

		// Read scoresBefore or initialize them
		let scoresBefore
		let scoresAfter
		let scoresBefore_Month
		let scoresAfter_Month
		let scoresBefore_Year
		let scoresAfter_Year
		let scoresBefore_SinceCustomDate
		let scoresAfter_SinceCustomDate

		const fs = await FinalScores.findOne({
			where: {
				SessionID,
				UserID,
			},
			order: [['createdAt', 'DESC']],
		}).catch((err) => {
			console.log('POST /game findOne FinalScores', err)
			return res.sendStatus(500)
		})

		
		const tmp = {}
		for(const p of s.Players) {tmp[p.Alias] = 0}

		if(!fs) {

			scoresBefore = {...tmp}
			scoresAfter = {...tmp}
			scoresBefore_Month = {...tmp}
			scoresAfter_Month = {...tmp}
			scoresBefore_Year = {...tmp}
			scoresAfter_Year = {...tmp}

		} else {

			scoresBefore = fs.ScoresAfter
			scoresAfter = fs.ScoresAfter

			if(new Date(fs.End).getFullYear() === date.getFullYear() && new Date(fs.End).getMonth() === date.getMonth()) {
				scoresBefore_Month = fs.ScoresAfter_Month
				scoresAfter_Month = fs.ScoresAfter_Month
			} else {
				scoresBefore_Month = {...tmp}
				scoresAfter_Month = {...tmp}
			}

			if(new Date(fs.End).getFullYear() === date.getFullYear()) {
				scoresBefore_Year = fs.ScoresAfter_Year
				scoresAfter_Year = fs.ScoresAfter_Year
			} else {
				scoresBefore_Year = {...tmp}
				scoresAfter_Year = {...tmp}
			}

			if(fs.ScoresAfter_SinceCustomDate) {
				scoresBefore_SinceCustomDate = fs.ScoresAfter_SinceCustomDate
				scoresAfter_SinceCustomDate = fs.ScoresAfter_SinceCustomDate
			}

		}



		// Calculate scores of current game

		const tableColumns = []
		const PlayerScores = {}

		for(const p of s.Players) {PlayerScores[p.Alias] = 0}

		const calcUp = calculateScores(true, s.UpperTables, PlayerScores, tableColumns, WinnerAlias)
		const calcBo = calculateScores(false, s.BottomTables, PlayerScores, tableColumns, WinnerAlias)
		if(calcUp || calcBo) return res.sendStatus(409)



		// Find winner

		const List_Winner = []
		const List_WinnerNames = []
		let highestScore = 0

		for(const p of s.Players) {

			const currentScore = PlayerScores[p.Alias]
			if(highestScore < currentScore) {
				List_Winner.length = 0
				List_Winner.push(p.Alias)
				highestScore = currentScore
			} else if(highestScore === currentScore) {
				List_Winner.push(p.Alias)
			}

		}

		// If surrendered, initialize winner

		if(WinnerAlias) {
			List_Winner.length = 0
			List_Winner.push(WinnerAlias)
		}
	


		// Update Session

 		await s.update({ 
			LastPlayed: date,
			List_PlayerOrder: List_PlayerOrder,
		}).catch((err) => {
			console.log('POST /game update session', err)
			return res.sendStatus(500)
		})



		// Add +1 win for every winner of game
		for(const p of s.Players) {
			if(List_Winner.includes(p.Alias)) {

				scoresAfter[p.Alias] = scoresBefore[p.Alias] + 1
				scoresAfter_Month[p.Alias] = scoresAfter_Month[p.Alias] + 1
				scoresAfter_Year[p.Alias] = scoresAfter_Year[p.Alias] + 1 

				if(scoresAfter_SinceCustomDate) {
					scoresAfter_SinceCustomDate[p.Alias] = scoresAfter_SinceCustomDate[p.Alias] + 1
				}

				List_WinnerNames.push(p.Name)

			}
		}



		FinalScores.create({ 

			UserID, 
			SessionID, 
			Columns: s.Columns, 
			Surrender: Boolean(WinnerAlias), 
			List_Winner, 
			PlayerScores, 
			Start: s.PlayerTables[0].Start, 
			End: date,
			
			ScoresBefore: scoresBefore, 
			ScoresAfter: scoresAfter, 
			ScoresBefore_Month: scoresBefore_Month, 
			ScoresAfter_Month: scoresAfter_Month, 
			ScoresBefore_Year: scoresBefore_Year, 
			ScoresAfter_Year: scoresAfter_Year, 
			ScoresBefore_SinceCustomDate: scoresBefore_SinceCustomDate, 
			ScoresAfter_SinceCustomDate: scoresAfter_SinceCustomDate, 

		}).then(async (f) => {

			TableArchive.create({ UserID, SessionID, Table: tableColumns, FinalScoresID: f.id }).then(() => {
				
				destroyGame(SessionID, UserID)
				res.sendStatus(204)

			}).catch((err) => {
				console.log('POST /game create tablearchive', err)
				return res.sendStatus(500)
			})

		}).catch((err) => {
			console.log('POST /game create finalscore', err)
			return res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('POST /game find session', err)
		res.sendStatus(500)
	})

})

function calculateScores(isUpperTable, tables, PlayerScores, tableColumns, surrender) {
	
	const max = isUpperTable ? 6 : 7
	
	for(const t of tables) { 
	
		let tmp = 0
		for(let i = 0; max > i; i++) {
			if(t[i] === null && !surrender) return true
			tmp += t[i]
		}
		if(isUpperTable && tmp >= 63) tmp += 35

		PlayerScores[t.Alias] = PlayerScores[t.Alias] + tmp
		if(isUpperTable) {
			tableColumns.push(getUpperTableJSON(t))
		} else {
			tableColumns.push(getBottomTableJSON(t))
		}
	
	}
	
	return false

}

router.delete('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.SessionID

	if(!SessionID) return res.sendStatus(400)

	const status = await destroyGame(SessionID, UserID).catch((err) => {console.log('DELETE /Game', err)})
	res.sendStatus(status)

})







router.post('/entry', async (req, res) => {

	const { UserID } = req
	const { Alias, Column, Row, isUpperTable, JoinCode, Value } = req.body

	if(!isInt(JoinCode) || !isString(Alias) || !isInt(Column) || !isInt(Row) || !isBoolean(isUpperTable)) return res.sendStatus(400)


	let value = isInt(Value) ? Value : null

	const updateJSON = { [Row]: value }
	const json = { UserID, JoinCode, Alias, Column }


	//TODO if value isn't correct reply with error

	if(isUpperTable) {

		if(!possibleEntries_upperTable[Row].includes(value) && value !== null) return res.sendStatus(409)

		await UpperTable.update(updateJSON, { where: json }).then((l) => {

			if(l[0] === 0) return res.sendStatus(404)
			
			res.sendStatus(204)
			
		}).catch((err) => {
			console.log('POST /game/entry isUpperTable = true', err)
			res.sendStatus(500)
		})

	} else {
		
		if(!possibleEntries_bottomTable[Row].includes(value) && value !== null) return res.sendStatus(409)

		await BottomTable.update(updateJSON, { where: json }).then((l) => {

			if(l[0] === 0) return res.sendStatus(404)
			
			res.sendStatus(204)
			
		}).catch((err) => {
			console.log('POST /game/entry isUpperTable = false', err)
			res.sendStatus(500)
		})

	}

})

router.post('/gnadenwurf', async (req, res) => {

	const { UserID } = req
	const { JoinCode, Gnadenwürfe } = req.body
	
	if(!isInt(JoinCode) || typeof Gnadenwürfe !== 'object') return res.sendStatus(400)
	
	PlayerTable.update({ Gnadenwürfe }, { where: { UserID, JoinCode } }).then((l) => {
		
		if(l[0] === 0) return res.sendStatus(404)

		res.sendStatus(204)

	}).catch((err) => {
		console.log('POST /game/gnadenwurf', err)
		res.sendStatus(500)
	})

})













module.exports = router
