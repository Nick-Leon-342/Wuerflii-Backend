

import type { 
	Association__Sessions_And_Players, 
	Association__Users_And_Sessions, 
	Final_Scores, 
	Players, 
	Sessions, 
	Table_Archives, 
	Table_Columns, 
	Users 
} from '../generated/prisma/index.js'





export function filter__user(user: Users) {
	return {

		id:						user.id, 
		Name:					user.Name, 
		DarkMode:				user.DarkMode, 

		Show__Session_Names:	user.Show__Session_Names, 
		Show__Session_Date:		user.Show__Session_Date, 
		
		View__Sessions:			user.View__Sessions, 
		View__Sessions_Desc:	user.View__Sessions_Desc, 

		Statistics__View:		user.Statistics__View, 
		Statistics__View_Month:	user.Statistics__View_Month, 
		Statistics__View_Year:	user.Statistics__View_Year, 

	}
}





export function filter__session(session: Sessions) {
	return {

		id:					session.id,
		
		Name:				session.Name,
		Color:				session.Color, 
		Columns:			session.Columns,

		View_List_Years:	session.View__List_Years, 
		CurrentGameStart:	session.CurrentGameStart, 
		LastPlayed:			session.LastPlayed,

	}
}

export function filter__association_users_and_sessions(association: Association__Users_And_Sessions) {
	return {

		id:							association.id,

		Input_Type:					association.Input_Type,
		Show_Scores:				association.Show_Scores,

		View: 						association.View, 
		View__Month: 				association.View__Month, 
		View__Year: 				association.View__Year, 
		View__CustomDate:			association.View__Custom_Date,

		Statistics__Show_Border:	association.Statistics__Show_Border, 
		Statistics__View: 			association.Statistics__View, 
		Statistics__View_Month:		association.Statistics__View_Month, 
		Statistics__View_Year: 		association.Statistics__View_Year, 

	}
}





export function filter__player(player: Players) {
	return {

		id:					player.id,
		Name:				player.Name,
		Color:				player.Color,

	}
}

export function filter__association_sessions_and_players(association: Association__Sessions_And_Players) {
	return {
		
		Order_Index:		association.Order_Index, 
		Gnadenwurf_Used:	association.Gnadenwurf_Used, 
	}
}





export function filter__final_score(final_score: Final_Scores) {
	return {

		id: 			final_score.id, 
		
		Start: 			final_score.Start,
		End: 			final_score.End,
		Columns: 		final_score.Columns,
		Surrendered: 	final_score.Surrendered,

	}
}

export function filter__association__players_and_finalscores_and_sessions(association) {

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





export function filter__table_column(table_column: Table_Columns) {
	return {

		id: 						table_column.id, 
		Column: 					table_column.Column, 
		TotalScore: 				table_column.Total_Score, 

		Upper_Table_1: 				table_column.Upper_Table_1, 
		Upper_Table_2: 				table_column.Upper_Table_2, 
		Upper_Table_3: 				table_column.Upper_Table_3, 
		Upper_Table_4: 				table_column.Upper_Table_4, 
		Upper_Table_5: 				table_column.Upper_Table_5, 
		Upper_Table_6: 				table_column.Upper_Table_6, 

		Upper_Table_Score: 			table_column.Upper_Table_Score, 
		Upper_Table_Add35: 			table_column.Upper_Table_Add35, 
		Upper_Table_TotalScore: 	table_column.Upper_Table_TotalScore, 


		Bottom_Table_1: 			table_column.Bottom_Table_1, 
		Bottom_Table_2: 			table_column.Bottom_Table_2, 
		Bottom_Table_3: 			table_column.Bottom_Table_3, 
		Bottom_Table_4: 			table_column.Bottom_Table_4, 
		Bottom_Table_5: 			table_column.Bottom_Table_5, 
		Bottom_Table_6: 			table_column.Bottom_Table_6, 
		Bottom_Table_7: 			table_column.Bottom_Table_7, 

		Bottom_Table_Score: 		table_column.Bottom_Table_Score, 
		Bottom_Table_TotalScore: 	table_column.Bottom_Table_TotalScore, 

	}
}

export function filter__table_archive(table_archive: Table_Archives) {
	return {

		id:		table_archive.id, 
		Table:	table_archive.Table, 

	}
}
