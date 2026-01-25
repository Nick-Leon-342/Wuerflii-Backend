

import { PrismaPg } from '@prisma/adapter-pg'
import { enum_Users_View_Sessions, PrismaClient as PrismaClientOld } from '../generated/prisma-old/index.js'
import { prisma } from './index.js'
import type { Enum___Association__Users_And_Sessions___Input_Type, Enum___Association__Users_And_Sessions___View, Enum___List__Month, Enum___Statistics__View, Enum___Users___View__Sessions } from '../generated/prisma/index.js'

// const adapter = new PrismaPg({ connectionString: 'postgresql://wuerflii-old:mappel342@localhost:5432/wuerflii-old' })
// export const prisma = new PrismaClient({ adapter })
const adapter_old = new PrismaPg({ connectionString: 'postgresql://wuerflii-old:mappel342@localhost:5432/wuerflii-old' })
export const prisma_old = new PrismaClientOld({ adapter: adapter_old })


export async function migrate() {
	
	// Users
	const list__users = await prisma_old.users_tmp.findMany()
	for(const user of list__users) {

		let view__sessions: Enum___Users___View__Sessions = 'NAME'
		switch(user.View_Sessions) {
			case 'Created':
				view__sessions = 'CREATED'
				break
			case 'Last_Played':
				view__sessions = 'LAST_PLAYED'
				break
			default:
				view__sessions = 'NAME'
				break
		}

		let statistics__view: Enum___Statistics__View = 'STATISTICS_OVERALL'
		switch(user.Statistics_View) {
			case 'statistics_month':
				statistics__view = 'STATISTICS_MONTH'
				break
			case 'statistics_year':
				statistics__view = 'STATISTICS_YEAR'
				break
			default:
				statistics__view = 'STATISTICS_OVERALL'
				break
		}

		let statistics__view_month: Enum___List__Month = 'JANUARY'
		switch(user.Statistics_View_Month) {
			case 1:
				statistics__view_month = 'JANUARY'
				break
			case 2:
				statistics__view_month = 'FEBRUARY'
				break
			case 3:
				statistics__view_month = 'MARCH'
				break
			case 4:
				statistics__view_month = 'APRIL'
				break
			case 5:
				statistics__view_month = 'MAY'
				break
			case 6:
				statistics__view_month = 'JUNE'
				break
			case 7:
				statistics__view_month = 'JULY'
				break
			case 8:
				statistics__view_month = 'AUGUST'
				break
			case 9:
				statistics__view_month = 'SEPTEMBER'
				break
			case 10:
				statistics__view_month = 'OCTOBER'
				break
			case 11:
				statistics__view_month = 'NOVEMBER'
				break
			default:
				statistics__view_month = 'DECEMBER'
				break
		}


		await prisma.users.create({
			data: {
				id: user.id, 
				Name: user.Name, 
				DarkMode: user.DarkMode, 
				Password: user.Password, 
				Refresh_Token: user.RefreshToken, 

				Show__Session_Names: user.Show_Session_Names, 
				Show__Session_Date: user.Show_Session_Date, 
				View__Sessions: view__sessions, 
				View__Sessions_Desc: user.View_Sessions_Desc, 

				Statistics__View: statistics__view, 
				Statistics__View_Month: statistics__view_month, 
				Statistics__View_Year: user.Statistics_View_Year, 

				createdAt: user.createdAt, 
				updatedAt: user.updatedAt, 
			}
		})
	}
	
	const list__sessions = await prisma_old.sessions_tmp.findMany()
	for(const session of list__sessions) {
		await prisma.sessions.create({
			data: {
				id: session.id, 
				Name: session.Name, 
				Color: session.Color, 
				Columns: session.Columns, 

				View__List_Years: session.View_List_Years, 
				CurrentGameStart: session.CurrentGameStart, 
				LastPlayed: session.LastPlayed, 

				createdAt: session.createdAt, 
				updatedAt: session.updatedAt, 
			}
		})
	}
	
	const list__players = await prisma_old.players_tmp.findMany()
	for(const player of list__players) {
		await prisma.players.create({
			data: {
				id: player.id,
				Name: player.Name, 
				Color: player.Color, 

				createdAt: player.createdAt, 
				updatedAt: player.updatedAt, 
			}
		})
	}
	
	const list__final_scores = await prisma_old.finalScores_tmp.findMany()
	for(const final_score of list__final_scores) {
		await prisma.final_Scores.create({
			data: {
				id: final_score.id, 
				Start: final_score.Start, 
				End: final_score.End, 
				Columns: final_score.Columns, 
				Surrendered: final_score.Surrendered, 

				createdAt: final_score.createdAt, 
				updatedAt: final_score.updatedAt, 
			}
		})
	}
	
	const list__table_archive = await prisma_old.table_Archives_tmp.findMany()
	for(const table_archive of list__table_archive) {
		await prisma.table_Archives.create({
			data: {
				id: table_archive.id, 
				Table: table_archive.Table, 

				createdAt: table_archive.createdAt, 
				updatedAt: table_archive.updatedAt, 

				Final_ScoreID: table_archive.FinalScoreID || -1, 
			}
		})
	}
	
	const list___association__players_and_finalscores_with_sessions = await prisma_old.association__Players_And_FinalScores_With_Sessions_tmp.findMany()
	for(const association__players_and_finalscores_with_sessions of list___association__players_and_finalscores_with_sessions) {
		await prisma.association__Players_And_FinalScores_And_Sessions.create({
			data: {
				IsWinner: association__players_and_finalscores_with_sessions.IsWinner, 
				Score: association__players_and_finalscores_with_sessions.Score, 

				Wins__Before: association__players_and_finalscores_with_sessions.Wins__Before, 
				Wins__After: association__players_and_finalscores_with_sessions.Wins__After, 

				Wins__Before_Year: association__players_and_finalscores_with_sessions.Wins__Before_Year, 
				Wins__After_Year: association__players_and_finalscores_with_sessions.Wins__After_Year, 

				Wins__Before_Month: association__players_and_finalscores_with_sessions.Wins__Before_Month, 
				Wins__After_Month: association__players_and_finalscores_with_sessions.Wins__After_Month, 

				Wins__Before_SinceCustomDate: association__players_and_finalscores_with_sessions.Wins__Before_SinceCustomDate, 
				Wins__After_SinceCustomDate: association__players_and_finalscores_with_sessions.Wins__After_SinceCustomDate, 

				SessionID: association__players_and_finalscores_with_sessions.SessionID || -1, 
				PlayerID: association__players_and_finalscores_with_sessions.PlayerID, 
				Final_ScoreID: association__players_and_finalscores_with_sessions.FinalScoreID, 
			}
		})
	}
	
	const list___association__sessions_and_players = await prisma_old.association__Sessions_And_Players_tmp.findMany()
	for(const association__sessions_and_players of list___association__sessions_and_players) {
		await prisma.association__Sessions_And_Players_And_Table_Columns.create({
			data: {
				Gnadenwurf_Used: association__sessions_and_players.Gnadenwurf_Used, 
				Order_Index: association__sessions_and_players.Order_Index, 

				SessionID: association__sessions_and_players.SessionID, 
				PlayerID: association__sessions_and_players.PlayerID, 
			}
		})
	}
	
	const list___association__users_and_sessions = await prisma_old.association__Users_And_Sessions_tmp.findMany()
	for(const association__users_and_sessions of list___association__users_and_sessions) {

		let input_type: Enum___Association__Users_And_Sessions___Input_Type = 'SELECT'
		switch(association__users_and_sessions.InputType) {
			case 'type':
				input_type = 'TYPE'
				break
			case 'select_and_type':
				input_type = 'SELECT_AND_TYPE'
				break
			default:
				input_type = 'SELECT'
				break
		}

		let view: Enum___Association__Users_And_Sessions___View = 'SHOW__ALL'
		switch(association__users_and_sessions.View) {
			case 'show_month':
				view = 'SHOW__MONTH'
				break
			case 'show_year':
				view = 'SHOW__YEAR'
				break
			case 'show_custom_date':
				view = 'SHOW__CUSTOM_DATE'
				break
			default:
				view = 'SHOW__ALL'
				break
		}

		let view_month: Enum___List__Month = 'JANUARY'
		switch(association__users_and_sessions.View_Month) {
			case 1:
				view_month = 'JANUARY'
				break
			case 2:
				view_month = 'FEBRUARY'
				break
			case 3:
				view_month = 'MARCH'
				break
			case 4:
				view_month = 'APRIL'
				break
			case 5:
				view_month = 'MAY'
				break
			case 6:
				view_month = 'JUNE'
				break
			case 7:
				view_month = 'JULY'
				break
			case 8:
				view_month = 'AUGUST'
				break
			case 9:
				view_month = 'SEPTEMBER'
				break
			case 10:
				view_month = 'OCTOBER'
				break
			case 11:
				view_month = 'NOVEMBER'
				break
			default:
				view_month = 'DECEMBER'
				break
		}

		let statistics__view: Enum___Statistics__View = 'STATISTICS_OVERALL'
		switch(association__users_and_sessions.Statistics_View) {
			case 'statistics_month':
				statistics__view = 'STATISTICS_MONTH'
				break
			case 'statistics_year':
				statistics__view = 'STATISTICS_YEAR'
				break
			default:
				statistics__view = 'STATISTICS_OVERALL'
				break
		}

		let statistics__view_month: Enum___List__Month = 'JANUARY'
		switch(association__users_and_sessions.Statistics_View_Month) {
			case 1:
				statistics__view_month = 'JANUARY'
				break
			case 2:
				statistics__view_month = 'FEBRUARY'
				break
			case 3:
				statistics__view_month = 'MARCH'
				break
			case 4:
				statistics__view_month = 'APRIL'
				break
			case 5:
				statistics__view_month = 'MAY'
				break
			case 6:
				statistics__view_month = 'JUNE'
				break
			case 7:
				statistics__view_month = 'JULY'
				break
			case 8:
				statistics__view_month = 'AUGUST'
				break
			case 9:
				statistics__view_month = 'SEPTEMBER'
				break
			case 10:
				statistics__view_month = 'OCTOBER'
				break
			case 11:
				statistics__view_month = 'NOVEMBER'
				break
			default:
				statistics__view_month = 'DECEMBER'
				break
		}

		await prisma.association__Users_And_Sessions.create({
			data: {
				Input_Type: input_type, 
				Show_Scores: association__users_and_sessions.Scores_Visible, 

				View: view, 
				View__Month: view_month, 
				View__Year: association__users_and_sessions.View_Year, 
				View__Custom_Date: association__users_and_sessions.View_CustomDate, 

				Statistics__Show_Border: association__users_and_sessions.Statistics_Show_Border, 
				Statistics__View: statistics__view, 
				Statistics__View_Month: statistics__view_month, 
				Statistics__View_Year: association__users_and_sessions.Statistics_View_Year, 

				UserID: association__users_and_sessions.UserID, 
				SessionID: association__users_and_sessions.SessionID, 
			}
		})
	}

}
