

const express = require('express')
const router = express.Router()

const { Users, Players, Sessions, FinalScores, Table_Columns, Table_Archives } = require('../../models')
const { possibleEntries_upperTable, possibleEntries_bottomTable } = require('../../PossibleEntries')
const { isInt, isBoolean, isString } = require('../../IsDataType')
const { destroyGame } = require('../../DestroyGame')

const { 
	filter_player,
	filter_session,
	filter_finalscore,

	filter_table_archive, 
	filter_table_column, 

	filter_user,
} = require('../../Filter_DatabaseJSON')

router.use('/create', require('./Game_Create'))





router.get('', (req, res) => {
	
	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.sendStatus(400)


	Users.findOne({ 
		where: { id: UserID }, 
		include: [{
			model: Sessions, 
			where: { id: SessionID }, 
			include: [{
				model: Players, 
				where: {}, 
				include: Table_Columns
			}]
		}]
	}).then(user => {


		const List_Players = []
		for(const id of user.Sessions[0].List_PlayerOrder) {
			for(const p of user.Sessions[0].Players) {
				if(id === p.id) {
					List_Players.push({
						...filter_player(p), 
						List_Table_Columns: p.Table_Columns.map(tc => filter_table_column(tc))
					})
					break
				}
			}
		}

		res.json({
			User: filter_user(user), 
			Session: filter_session(user.Sessions[0]),
			List_Players, 
		})


	}).catch(err => {
		console.log('GET /game\n', err)
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
			console.log('POST /game findone finalscores', err)
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

			scoresBefore = { ...fs.ScoresAfter }
			scoresAfter = { ...fs.ScoresAfter }

			if(new Date(fs.End).getFullYear() === date.getFullYear() && new Date(fs.End).getMonth() === date.getMonth()) {
				scoresBefore_Month = { ...fs.ScoresAfter_Month }
				scoresAfter_Month = { ...fs.ScoresAfter_Month }
			} else {
				scoresBefore_Month = {...tmp}
				scoresAfter_Month = {...tmp}
			}

			if(new Date(fs.End).getFullYear() === date.getFullYear()) {
				scoresBefore_Year = { ...fs.ScoresAfter_Year }
				scoresAfter_Year = { ...fs.ScoresAfter_Year }
			} else {
				scoresBefore_Year = {...tmp}
				scoresAfter_Year = {...tmp}
			}

			if(fs.ScoresAfter_SinceCustomDate) {
				scoresBefore_SinceCustomDate = { ...fs.ScoresAfter_SinceCustomDate }
				scoresAfter_SinceCustomDate = { ...fs.ScoresAfter_SinceCustomDate }
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
				res.json({ FinalScoreID: f.id })


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
			tableColumns.push(filter_uppertable(t))
		} else {
			tableColumns.push(filter_bottomtable(t))
		}
	
	}
	
	return false

}

router.delete('', async (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id

	if(!SessionID) return res.sendStatus(400)

	const status = await destroyGame(SessionID, UserID).catch((err) => {console.log('DELETE /game', err)})
	res.sendStatus(status)

})





// __________________________________________________ Gameplay __________________________________________________

router.post('/inputtype', async (req, res) => {

	const { UserID } = req
	const { SessionID, InputType } = req.body

	if(
		!SessionID || !isInt(SessionID) || 
		!InputType || !isString(InputType) ||
		!(InputType === 'select' || InputType === 'typeselect' || InputType === 'type')
	) return res.sendStatus(400)

	Sessions.update({ InputType }, { where: { id: SessionID, UserID } }).then((s) => {


		if(s[0] === 0) return res.sendStatus(404)

		res.sendStatus(204)


	}).catch((err) => {
		console.log('POST /game/inputtype', err)
		res.sendStatus(500)
	})

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

		UpperTable.update(updateJSON, { where: json }).then((l) => {

			if(l[0] === 0) return res.sendStatus(404)
			
			res.sendStatus(204)
			
		}).catch((err) => {
			console.log('POST /game/entry isUpperTable = true', err)
			res.sendStatus(500)
		})

	} else {
		
		if(!possibleEntries_bottomTable[Row].includes(value) && value !== null) return res.sendStatus(409)

		BottomTable.update(updateJSON, { where: json }).then((l) => {

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

router.get('/end', (req, res) => {

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID || !FinalScoreID) return res.sendStatus(400)


	Sessions.findOne({ where: { id: SessionID, UserID }, include: [ Players ] }).then((session) => {

		FinalScores.findOne({ where: { id: FinalScoreID, SessionID, UserID } }).then((f) => {


			if(!session || !f) return res.sendStatus(404)

			const tmp_list_players = []
			for(const alias of session.List_PlayerOrder) {
				for(const p of session.Players) {
					if(p.Alias === alias) {
						tmp_list_players.push(filter_player(p))
					}
				}
			}
	
			res.json({ 
				List_Players: tmp_list_players, 
				FinalScore: filter_finalscore(f)
			})


		}).catch((err) => {
			console.log('POST /game/end findone finalscores', err)
			return res.sendStatus(500)
		})

	}).catch((err) => {
		console.log('GET /game/end find session', err)
		res.sendStatus(500)
	})

})





module.exports = router
