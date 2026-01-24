

import type { 
	Association__Players_And_FinalScores_And_Sessions,
	Association__Sessions_And_Players_And_Table_Columns, 
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

		createdAt:				user.createdAt, 
		updatedAt:				user.updatedAt, 

	}
}





export function filter__session(session: Sessions) {
	return {

		id:					session.id,
		
		Name:				session.Name,
		Color:				session.Color, 
		Columns:			session.Columns,

		View__List_Years:	session.View__List_Years, 
		CurrentGameStart:	session.CurrentGameStart, 
		LastPlayed:			session.LastPlayed,

		createdAt:			session.createdAt, 
		updatedAt:			session.updatedAt, 

	}
}

export function filter__association_users_and_sessions(association: Association__Users_And_Sessions) {
	return {

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

		id:			player.id,
		Name:		player.Name,
		Color:		player.Color,

		createdAt:	player.createdAt, 
		updatedAt:	player.updatedAt, 

	}
}

export function filter__association_sessions_and_players_and_table_columns(association: Association__Sessions_And_Players_And_Table_Columns) {
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

		createdAt:		final_score.createdAt, 
		updatedAt:		final_score.updatedAt, 

	}
}

export function filter____list___association__players_and_finalscores_and_sessions(List___Association__Players_And_FinalScores_And_Sessions: Array<Association__Players_And_FinalScores_And_Sessions>) {

	const List_Winner 					: Array<number>				= []
	const PlayerScores 					: Record<string, number>	= {}
	const Wins__Before 					: Record<string, number>	= {}
	const Wins__After 					: Record<string, number>	= {}
	const Wins__Before_Year 			: Record<string, number>	= {}
	const Wins__After_Year 				: Record<string, number>	= {}
	const Wins__Before_Month 			: Record<string, number>	= {}
	const Wins__After_Month 			: Record<string, number>	= {}
	const Wins__Before_SinceCustomDate 	: Record<string, number>	= {}
	const Wins__After_SinceCustomDate 	: Record<string, number>	= {}

	for(const association of List___Association__Players_And_FinalScores_And_Sessions) {
		const player_id =	association.PlayerID

		if(association.IsWinner) List_Winner.push(player_id)
		PlayerScores[player_id] 				= association.Score
		Wins__Before[player_id] 				= association.Wins__Before
		Wins__After[player_id] 					= association.Wins__After
		Wins__Before_Year[player_id] 			= association.Wins__Before_Year
		Wins__After_Year[player_id] 			= association.Wins__After_Year
		Wins__Before_Month[player_id] 			= association.Wins__Before_Month
		Wins__After_Month[player_id]			= association.Wins__After_Month
		Wins__Before_SinceCustomDate[player_id] = association.Wins__Before_SinceCustomDate || 0
		Wins__After_SinceCustomDate[player_id]	= association.Wins__After_SinceCustomDate || 0
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

		createdAt:					table_column.createdAt, 
		updatedAt:					table_column.updatedAt, 

	}
}

export function filter__table_archive(table_archive: Table_Archives) {
	return {

		id:			table_archive.id, 
		Table:		table_archive.Table, 

		createdAt:	table_archive.createdAt, 
		updatedAt:	table_archive.updatedAt, 

	}
}
