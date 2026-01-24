

import express from 'express'
const router = express.Router()

import { filter__association_sessions_and_players_and_table_columns, filter__player, filter__table_column } from '../../Filter_DatabaseJSON.js'
import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import type { Table_Columns } from '../../../generated/prisma/index.js'
import { handle_error } from '../../handle_error.js'
import { isInt, isString } from '../../IsDataType.js'
import { prisma } from '../../index.js'





router.get('', async (req, res) => {
	
	const { UserID } = req
	const SessionID = Number(req.query.session_id)
	
	if(isNaN(SessionID) || SessionID <= 0) return res.status(400).send('SessionID invalid.')


	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: SessionID }, 
						include: {
							Session: {
								include: {
									List___Association__Sessions_And_Players_And_Table_Columns: {
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

	const { UserID } = req
	const { SessionID, PlayerID, Column, Name, Value } = req.body

	if(!SessionID || !isInt(SessionID)	) return res.status(400).send('SessionID invalid.')
	if(!PlayerID || !isInt(PlayerID)	) return res.status(400).send('PlayerID invalid.')
	if(!isInt(Column)					) return res.status(400).send('Column invalid.')
	if(!Name || !isString(Name)			) return res.status(400).send('Name invalid.')
	if(Value !== null && !isInt(Value)	) return res.status(400).send('Value invalid.')

	if(!is_valid_input(Name, Value)		) return res.status(409).send('Input invalid.')


	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({ 
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: SessionID }, 
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

function calculate_table_column(table_column: Table_Columns ): Table_Columns {

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
	Name: keyof typeof possible_entries, 
	Value: number | null 
): boolean {

	if (possible_entries.hasOwnProperty(Name)) {
		const validValues = possible_entries[Name]
		return (Value === null || validValues.includes(Value))
	}
	return false

}

const possible_entries = {

	Upper_Table_1: [ 0, 1, 2, 3, 4, 50 ],
	Upper_Table_2: [ 0, 2, 4, 6, 8, 50 ],
	Upper_Table_3: [ 0, 3, 6, 9, 12, 50 ],
	Upper_Table_4: [ 0, 4, 8, 12, 16, 50 ],
	Upper_Table_5: [ 0, 5, 10, 15, 20, 50 ],
	Upper_Table_6: [ 0, 6, 12, 18, 24, 50 ],

	Bottom_Table_1: [ 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ],
	Bottom_Table_2: [ 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ], 
	Bottom_Table_3: [ 0, 25, 50 ], 
	Bottom_Table_4: [ 0, 30, 40, 50 ], 
	Bottom_Table_5: [ 0, 40, 50 ], 
	Bottom_Table_6: [ 0, 50 ], 
	Bottom_Table_7: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ],  

}





router.get('/archive', async (req, res) => {

	const { UserID } 	= req
	const SessionID 	= Number(req.query.session_id)
	const FinalScoreID 	= Number(req.query.finalscore_id)

	if(isNaN(SessionID)		) return res.status(400).send('SessionID invalid.')
	if(isNaN(FinalScoreID)	) return res.status(400).send('FinalScoreID invalid.')
	

	try {
		await prisma.$transaction(async (tx) => {
			
	
	
			// __________________________________________________ User __________________________________________________
	
			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: SessionID }, 
						include: {
							Session: {
								include: {
									List___Association__Players_And_FinalScores_And_Sessions: {
										where: { Final_ScoreID: FinalScoreID }, 
										include: {
											Final_Score: {
												include: {
													Table_Archive: true
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
	
			// Check if user exists
			if(!user) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]) throw new Custom__Handled_Error('Session not found.', 404)
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(!session.List___Association__Players_And_FinalScores_And_Sessions[0]) throw new Custom__Handled_Error('Final_Score not found.', 404)
			if(!session.List___Association__Players_And_FinalScores_And_Sessions[0].Final_Score.Table_Archive) throw new Custom__Handled_Error('Table_Archive not found.', 404)
	

			res.json(session.List___Association__Players_And_FinalScores_And_Sessions[0].Final_Score.Table_Archive.Table)
	

		})
	} catch(err) {
		await handle_error(res, err, 'GET /session/preview/table')
	}

})





export default router
