

const { id_upperTable, id_bottomTable } = require('./utils')





function getSessionJSON(s, list_players) {

	return {
		id: s.id,
		SessionName: s.SessionName,
		Columns: s.Columns,
		JoinCode: s.JoinCode,
		InputType: s.InputType,
		LastPlayed: s.LastPlayed,
		CreatedDate: s.CreatedDate,
		List_PlayerOrder: s.List_PlayerOrder,
		List_Players: list_players,
	}

}

function getPlayerJSON(p) {

	return {
		id: p.id,
		Name: p.Name,
		Alias: p.Alias,
		Color: p.Color,
		Wins: p.Wins,
	}

}

function getFinalScoreJSON(f) {

	return {
		Start: f.Start,
		End: f.End,
		Columns: f.Columns,
		Surrender: f.Surrender,
		List_Winner: f.List_Winner,
		PlayerScores: f.PlayerScores,
	}

}

function getPlayerTableJSON(pt) {
	return pt.Gnadenwürfe
}

function getUpperTableJSON(ut) {

	return {
		Alias: ut.Alias,
		Column: ut.Column,
		TableID: id_upperTable,
		0: ut[0],
		1: ut[1],
		2: ut[2],
		3: ut[3],
		4: ut[4],
		5: ut[5],
	}

}

function getBottomTableJSON(bt) {

	return {
		Alias: bt.Alias,
		Column: bt.Column,
		TableID: id_bottomTable,
		0: bt[0],
		1: bt[1],
		2: bt[2],
		3: bt[3],
		4: bt[4],
		5: bt[5],
		6: bt[6],
	}

}





module.exports = {
	getSessionJSON,
	getPlayerJSON,
	getFinalScoreJSON,
	getPlayerTableJSON,
	getUpperTableJSON,
	getBottomTableJSON
}