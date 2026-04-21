

import express from 'express'
const router = express.Router()

import { filter__association_sessions_and_players_and_table_columns, filter__player, filter__table_column } from '../../Filter_DatabaseJSON.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { Zod__Game_Table_Columns } from '../../types/Zod__Game_Table_Columns.js'
import type { Table_Columns } from '../../../generated/prisma/index.js'
import { Zod__Query } from '../../types/Zod__Query..js'
import { handle_error } from '../../handle_error.js'
import { Possible_Entries } from '../../utils.js'
import { prisma } from '../../index.js'





router.get('', async (req, res) => {

	// Verify query
	const zod_result = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { session_id } = zod_result.data
	
	const { UserID } = req


	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: session_id }, 
						include: {
							Session: {
								include: {
									List___Association__Sessions_And_Players_And_Table_Columns: {
										orderBy: { Order_Index: 'asc' }, 
										include: {
											Player: true, 
											List__Table_Columns: {
												orderBy: {
													Column: 'asc'
												}
											}
										}
									}
								}
							}
						}
					}
				}
			})
			
			if(!user																									) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]															) throw new Custom__Handled_Error('Session not found.', 404)
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(session.List___Association__Sessions_And_Players_And_Table_Columns.length === 0							) throw new Custom__Handled_Error('Players not found.', 404)
			if(session.List___Association__Sessions_And_Players_And_Table_Columns[0]?.List__Table_Columns.length === 0	) throw new Custom__Handled_Error('Table_Columns not found.', 404)

			res.json(session.List___Association__Sessions_And_Players_And_Table_Columns.map(association => ({
				...filter__association_sessions_and_players_and_table_columns(association), 
				...filter__player(association.Player), 
				List__Table_Columns: association.List__Table_Columns.map(filter__table_column)
			})))

		})
	} catch(err) {
		await handle_error(res, err, 'GET /game/table_columns')
	}

})

router.patch('', async (req, res) => {

	// Verify query
	const zod_result__query = Zod__Query.pick({ session_id: true }).safeParse(req.query)
	if(!zod_result__query.success) return res.status(400).send(zod_result__query.error.message)
	const { session_id } = zod_result__query.data

	// Verify input
	const zod_result = Zod__Game_Table_Columns.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { PlayerID, Column, Name, Value } = zod_result.data
	if(!is_valid_input(Name, Value)) return res.status(409).send('Input invalid.')

	const { UserID } = req



	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({ 
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: session_id }, 
						include: {
							Session: {
								include: {
									List___Association__Sessions_And_Players_And_Table_Columns: {
										where: { PlayerID: PlayerID }, 
										include: {
											List__Table_Columns: {
												where: { Column: Column }
											}
										}
									}
								}
							}
						}
					}
				}
			})
			
			if(!user																							) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]													) throw new Custom__Handled_Error('Session not found.', 404)
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(session.List___Association__Sessions_And_Players_And_Table_Columns.length === 0					) throw new Custom__Handled_Error('Players not found.', 404)
			if(!session.List___Association__Sessions_And_Players_And_Table_Columns[0]?.List__Table_Columns[0]	) throw new Custom__Handled_Error('Table_Column not found.', 404)

			const table_column = session.List___Association__Sessions_And_Players_And_Table_Columns[0].List__Table_Columns[0]	
			const table_column__calculated = calculate_table_column({ ...table_column, [Name]: Value })

			const table_column__updated = await tx.table_Columns.update({
				where: { id: table_column.id },
				data: table_column__calculated
			})
	
	
			res.json(filter__table_column(table_column__updated))

		})
	} catch(err) {
		await handle_error(res, err, 'PATCH /game/table_columns')
	}

})

function calculate_table_column(table_column: Table_Columns): Table_Columns {

	const table_column__updated = { ...table_column }

	// ____________________ Upper Table ____________________

	let upper_table_score: number = 0
	let upper_table_has_null = false

	type Type__Upper_Table_Key = `Upper_Table_${1 | 2 | 3 | 4 | 5 | 6}`

	for(let i = 1; 6 >= i; i++) {
		const key = `Upper_Table_${i}` as Type__Upper_Table_Key
		const value = table_column[key]
		if(value || value === 0) {
			upper_table_score += value
		} else {
			upper_table_has_null = true
		}
	}

	table_column__updated.Upper_Table_Score = upper_table_score

	if(!upper_table_has_null) {
		table_column__updated.Upper_Table_Add35 = upper_table_score >= 63 ? 35 : 0
		table_column__updated.Upper_Table_TotalScore = table_column__updated.Upper_Table_Score + table_column__updated.Upper_Table_Add35
	} else {
		table_column__updated.Upper_Table_Add35 = null
		table_column__updated.Upper_Table_TotalScore = null
	}



	// ____________________ Bottom Table ____________________

	let bottom_table_score = 0
	let bottom_table_has_null = false

	type Type__Bottom_Table_Key = `Bottom_Table_${1 | 2 | 3 | 4 | 5 | 6}`

	for(let i = 1; 7 >= i; i++) {
		const key = `Bottom_Table_${i}` as Type__Bottom_Table_Key
		const value = table_column[key]
		if(value || value === 0) {
			bottom_table_score += value
		} else {
			bottom_table_has_null = true
		}
	}
	
	if(!bottom_table_has_null) {
		table_column__updated.Bottom_Table_Score = bottom_table_score
		if(table_column__updated.Upper_Table_TotalScore) {
			table_column__updated.Bottom_Table_TotalScore = table_column__updated.Upper_Table_TotalScore + table_column__updated.Bottom_Table_Score
		}
	} else {
		table_column__updated.Bottom_Table_Score = null
		table_column__updated.Bottom_Table_TotalScore = null
	}

	table_column__updated.Total_Score = (table_column__updated.Upper_Table_TotalScore !== null ? table_column__updated.Upper_Table_TotalScore : upper_table_score) + bottom_table_score
	
	return table_column__updated

}

function is_valid_input( 
	Name: string, 
	Value: number | null 
): boolean {

	const tmp_name = Name as keyof typeof Possible_Entries

	if(Possible_Entries.hasOwnProperty(tmp_name)) {
		const validValues = Possible_Entries[tmp_name]
		return (Value === null || validValues.includes(Value))
	}
	return false

}





interface Table_Element {
	PlayerID:			number
	List__Table_Columns: Array<Table_Columns>
}

router.get('/archive', async (req, res) => {

	// Verify query
	const zod_result = Zod__Query.pick({ session_id: true, finalscore_id: true }).safeParse(req.query)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { session_id, finalscore_id } = zod_result.data

	const { UserID } 	= req
	

	prisma.users.findUnique({
		where: { id: UserID }, 
		include: {
			List___Association__Users_And_Sessions: {
				where: { SessionID: session_id }, 
				include: {
					Session: {
						include: {
							List___Association__Players_And_FinalScores_And_Sessions: {
								where: { Final_ScoreID: finalscore_id }, 
								include: {
									Final_Score: {
										include: {
											Table_Archive: true
										}
									}, 
								}
							}, 
							List___Association__Sessions_And_Players_And_Table_Columns: {
								orderBy: { Order_Index: 'asc' }, 
								include: {
									Player: true
								}
							}
						}
					}
				}
			}
		}
	}).then(user => {

		if(!user																							) throw new Custom__Handled_Error('User not found.', 404)
		if(!user.List___Association__Users_And_Sessions[0]													) throw new Custom__Handled_Error('Session not found.', 404)
		const session = user.List___Association__Users_And_Sessions[0].Session
		if(!session.List___Association__Players_And_FinalScores_And_Sessions[0]								) throw new Custom__Handled_Error('Final_Score not found.', 404)
		if(!session.List___Association__Players_And_FinalScores_And_Sessions[0].Final_Score.Table_Archive	) throw new Custom__Handled_Error('Table_Archive not found.', 404)

		const list = []
		const table = (session.List___Association__Players_And_FinalScores_And_Sessions[0].Final_Score.Table_Archive.Table as unknown) as Array<Table_Element>
		
		for(const element of table) {
			const player = session.List___Association__Sessions_And_Players_And_Table_Columns.find(association => association.PlayerID === element.PlayerID)?.Player

			if(!player) throw new Custom__Handled_Error('Huh, there is a player missing?', 500)

			list.push({
				...filter__player(player),
				List__Table_Columns: element.List__Table_Columns
			})
		}

		res.json(list)

	}).catch(err => {
		handle_error(res, err, 'GET /game/table_column/archive')
	})

})





export default router
