

const { id_upperTable, id_bottomTable } = require('./utils')





function filter_session(s) {

	return {
		id: s.id,
		SessionName: s.SessionName,
		Columns: s.Columns,
		JoinCode: s.JoinCode,
		InputType: s.InputType,
		ShowScores: s.ShowScores,
		LastPlayed: s.LastPlayed,
		CreatedDate: s.CreatedDate,
		List_PlayerOrder: s.List_PlayerOrder,
	}

}

function filter_player(p) {

	return {
		id: p.id,
		Name: p.Name,
		Alias: p.Alias,
		Color: p.Color,
		Wins: p.Wins,
	}

}

function filter_finalscore(f) {

	return {
		id: f.id, 
		Start: f.Start,
		End: f.End,
		Columns: f.Columns,
		Surrender: f.Surrender,
		List_Winner: f.List_Winner,
		PlayerScores: f.PlayerScores,
		
		ScoresBefore: f.ScoresBefore, 
		ScoresAfter: f.ScoresAfter, 
		ScoresBefore_Year: f.ScoresBefore_Year, 
		ScoresAfter_Year: f.ScoresAfter_Year, 
		ScoresBefore_Month: f.ScoresBefore_Month, 
		ScoresAfter_Month: f.ScoresAfter_Month, 
		ScoresBefore_SinceCustomDate: f.ScoresBefore_SinceCustomDate, 
		ScoresAfter_SinceCustomDate: f.ScoresAfter_SinceCustomDate, 
	}

}

function filter_playertable(pt) {

	return pt.Gnadenwürfe

}

function filter_uppertable(ut) {

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

function filter_bottomtable(bt) {

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

function filter_tablearchive(ta) {

	return {
		Table: ta.Table
	}

}





module.exports = {
	filter_session,
	filter_player,
	filter_finalscore,
	filter_playertable,
	filter_uppertable,
	filter_bottomtable, 
	filter_tablearchive, 
}