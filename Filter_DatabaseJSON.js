

function filter_session(s) {

	return {
		id: s.id,
		Name: s.Name,
		Color: s.Color, 
		Columns: s.Columns,
		InputType: s.InputType,
		List_PlayerOrder: s.List_PlayerOrder,
		ShowScores: s.ShowScores,

		View_Month: s.View_Month, 
		View_Year: s.View_Year, 
		View: s.View, 
		View_List_Years: s.View_List_Years, 

		CustomDate: s.CustomDate,
		CreatedDate: s.CreatedDate,
		LastPlayed: s.LastPlayed,
	}

}

function filter_player(p) {

	return {
		id: p.id,
		Name: p.Name,
		Color: p.Color,
		Gnadenwurf: p.Gnadenwurf, 
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





function filter_table_column(tc) {

	return {
		id: tc.id, 
		Column: tc.Column, 

		Upper_Table_1: tc.Upper_Table_1, 
		Upper_Table_2: tc.Upper_Table_2, 
		Upper_Table_3: tc.Upper_Table_3, 
		Upper_Table_4: tc.Upper_Table_4, 
		Upper_Table_5: tc.Upper_Table_5, 
		Upper_Table_6: tc.Upper_Table_6, 

		Upper_Table_Score: tc.Upper_Table_Score, 
		Upper_Table_Add35: tc.Upper_Table_Add35, 
		Upper_Table_TotalScore: tc.Upper_Table_TotalScore, 


		Bottom_Table_1: tc.Bottom_Table_1, 
		Bottom_Table_2: tc.Bottom_Table_2, 
		Bottom_Table_3: tc.Bottom_Table_3, 
		Bottom_Table_4: tc.Bottom_Table_4, 
		Bottom_Table_5: tc.Bottom_Table_5, 
		Bottom_Table_6: tc.Bottom_Table_6, 
		Bottom_Table_7: tc.Bottom_Table_7, 

		Bottom_Table_Score: tc.Bottom_Table_Score, 
		Bottom_Table_TotalScore: tc.Bottom_Table_TotalScore, 


		TotalScore: tc.TotalScore, 
	}

}

function filter_table_archive(ta) {

	return {
		Table: ta.Table
	}

}





function filter_user(u) {

	return {
		id: u.id, 
		Name: u.Name, 
		DarkMode: u.DarkMode, 
		Show_Session_Names: u.Show_Session_Names, 
		Show_Session_Date: u.Show_Session_Date, 
		View_Sessions: u.View_Sessions, 
		View_Sessions_Desc: u.View_Sessions_Desc, 
	}

}





module.exports = {
	filter_session,
	filter_player,
	filter_finalscore,
	
	filter_table_column, 
	filter_table_archive, 

	filter_user, 
}