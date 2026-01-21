

function filter_session(s) {

	return {
		id:						s.id,
		
		Name:					s.Name,
		Color:					s.Color, 
		Columns:				s.Columns,

		View_List_Years:		s.View_List_Years, 
		CurrentGameStart:		s.CurrentGameStart, 
		LastPlayed:				s.LastPlayed,


		InputType:				s.Association__Users_And_Sessions.InputType,
		Scores_Visible:			s.Association__Users_And_Sessions.Scores_Visible,

		View: 					s.Association__Users_And_Sessions.View, 
		View_Month: 			s.Association__Users_And_Sessions.View_Month, 
		View_Year: 				s.Association__Users_And_Sessions.View_Year, 
		View_CustomDate:		s.Association__Users_And_Sessions.View_CustomDate,

		Statistics_Show_Border: s.Association__Users_And_Sessions.Statistics_Show_Border, 
		Statistics_View: 		s.Association__Users_And_Sessions.Statistics_View, 
		Statistics_View_Month:	s.Association__Users_And_Sessions.Statistics_View_Month, 
		Statistics_View_Year: 	s.Association__Users_And_Sessions.Statistics_View_Year, 
	}

}

function filter_player(p) {
	
	return {
		id:					p.id,
		
		Name:				p.Name,
		Color:				p.Color,

		Order_Index:		p.asso.Order_Index, 
		Gnadenwurf_Used:	p.asso.Gnadenwurf_Used, 
	}

}

function filter_finalscore(f) {

	const List_Winner = []
	const PlayerScores = {}
	const Wins__Before = {}
	const Wins__After = {}
	const Wins__Before_Year = {}
	const Wins__After_Year = {}
	const Wins__Before_Month = {}
	const Wins__After_Month = {}
	const Wins__Before_SinceCustomDate = {}
	const Wins__After_SinceCustomDate = {}

	for(const player of f.Players) {
		const id =	player.id
		const a =	player.asso		// Association between player and finalscore

		if(a.IsWinner) List_Winner.push(id)
		PlayerScores[id] = 					a.Score
		Wins__Before[id] = 					a.Wins__Before
		Wins__After[id] = 					a.Wins__After
		Wins__Before_Year[id] = 			a.Wins__Before_Year
		Wins__After_Year[id] = 				a.Wins__After_Year
		Wins__Before_Month[id] = 			a.Wins__Before_Month
		Wins__After_Month[id] = 			a.Wins__After_Month
		Wins__Before_SinceCustomDate[id] = 	a.Wins__Before_SinceCustomDate
		Wins__After_SinceCustomDate[id] = 	a.Wins__After_SinceCustomDate
	}

	return {
		id: 			f.id, 

		Start: 			f.Start,
		End: 			f.End,
		Columns: 		f.Columns,
		Surrendered: 	f.Surrendered,

		List_Winner,
		PlayerScores,
		
		Wins__Before, 
		Wins__After, 
		Wins__Before_Year, 
		Wins__After_Year, 
		Wins__Before_Month, 
		Wins__After_Month, 
		Wins__Before_SinceCustomDate, 
		Wins__After_SinceCustomDate, 
	}

}





function filter_table_column(tc) {

	return {
		id: 						tc.id, 
		Column: 					tc.Column, 

		Upper_Table_1: 				tc.Upper_Table_1, 
		Upper_Table_2: 				tc.Upper_Table_2, 
		Upper_Table_3: 				tc.Upper_Table_3, 
		Upper_Table_4: 				tc.Upper_Table_4, 
		Upper_Table_5: 				tc.Upper_Table_5, 
		Upper_Table_6: 				tc.Upper_Table_6, 

		Upper_Table_Score: 			tc.Upper_Table_Score, 
		Upper_Table_Add35: 			tc.Upper_Table_Add35, 
		Upper_Table_TotalScore: 	tc.Upper_Table_TotalScore, 


		Bottom_Table_1: 			tc.Bottom_Table_1, 
		Bottom_Table_2: 			tc.Bottom_Table_2, 
		Bottom_Table_3: 			tc.Bottom_Table_3, 
		Bottom_Table_4: 			tc.Bottom_Table_4, 
		Bottom_Table_5: 			tc.Bottom_Table_5, 
		Bottom_Table_6: 			tc.Bottom_Table_6, 
		Bottom_Table_7: 			tc.Bottom_Table_7, 

		Bottom_Table_Score: 		tc.Bottom_Table_Score, 
		Bottom_Table_TotalScore: 	tc.Bottom_Table_TotalScore, 


		TotalScore: 				tc.TotalScore, 
	}

}

function filter_table_archive(ta) {

	return {
		Table: ta.Table
	}

}





function filter_user(u) {

	return {
		id:						u.id, 
		Name:					u.Name, 
		DarkMode:				u.DarkMode, 

		Show_Session_Names:		u.Show_Session_Names, 
		Show_Session_Date:		u.Show_Session_Date, 
		
		View_Sessions:			u.View_Sessions, 
		View_Sessions_Desc:		u.View_Sessions_Desc, 

		Statistics_View:		u.Statistics_View, 
		Statistics_View_Month:	u.Statistics_View_Month, 
		Statistics_View_Year:	u.Statistics_View_Year, 
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