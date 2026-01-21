

const express = require('express')
const router = express.Router()

const { handle_error } = require('../../handle_error')
const { isInt, isString } = require('../../IsDataType')
const { sort__list_players } = require('../../Functions')
const { filter_table_column } = require('../../Filter_DatabaseJSON')

const { 
	Players, 
	Sessions,
	Table_Columns, 
	Table_Archives, 
	FinalScores, 
	Users, 

	sequelize, 
} = require('../../models')





router.get('', async (req, res) => {
	
	const { UserID } = req
	const SessionID = +req.query.session_id
	
	if(!SessionID) return res.status(400).send('SessionID invalid.')


	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		let user = await Users.findByPk(UserID,{ 
			transaction, 
			include: [{
				model: Sessions, 
				required: false, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					required: false, 
					through: { as: 'asso' }, 
					include: Table_Columns, 
				}]
			}], 
			order: [[ { model: Sessions }, { model: Players }, { model: Table_Columns }, 'Column', 'ASC' ]], 
		})

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}

		// Check if session exists
		if(!user.Sessions[0]) {
			await transaction.rollback()
			return res.status(404).send('Session not found.')
		}

		// Check if players exist
		if(!user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.status(404).send('Players not found.')
		}
		
		// Check if table_columns exist
		if(!user.Sessions[0].Players[0].Table_Columns[0]) {
			await transaction.rollback()
			return res.status(404).send('Table_Columns not found.')
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(sort__list_players(user.Sessions[0].Players).map(player => {
				return {
					PlayerID: player.id, 
					List__Table_Columns: player.Table_Columns.map(filter_table_column)
				}
			}), 
		)


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'GET /game/table_columns')
	}

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, PlayerID, Column, Name, Value } = req.body

	if(!SessionID || !isInt(SessionID)) return res.status(400).send('SessionID invalid.')
	if(!PlayerID || !isInt(PlayerID)) return res.status(400).send('PlayerID invalid.')
	if(!isInt(Column)) return res.status(400).send('Column invalid.')
	if(!Name || !isString(Name)) return res.status(400).send('Name invalid.')
	if(Value !== null && !isInt(Value)) return res.status(400).send('Value invalid.')

	if(!is_valid_input(Name, Value)) return res.status(409).send('Input invalid.')


	const transaction = await sequelize.transaction()
	try {

		
		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, { 
			transaction, 
			include: [{
				model: Sessions, 
				required: false, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					required: false, 
					where: { id: PlayerID }, 
					include: [{
						model: Table_Columns, 
						required: false, 
						where: { Column }, 
					}]
				}]
			}]
		})

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}

		// Check if session exists
		if(!user.Sessions[0]) {
			await transaction.rollback()
			return res.status(404).send('Session not found.')
		}

		// Check if players exist
		if(!user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.status(404).send('Players not found.')
		}

		// Check if table_columns exist
		if(!user.Sessions[0].Players[0].Table_Columns[0]) {
			await transaction.rollback()
			return res.status(404).send('Table_Columns not found.')
		}


		// __________________________________________________ Update Table_Column __________________________________________________
		
		const table_column = await user.Sessions[0].Players[0].Table_Columns[0].update({
			[Name]: Value
		}, { transaction })

		const table_column_calculated = await calculate_table_column(table_column, transaction)


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(filter_table_column(table_column_calculated))


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'PATCH /game/table_columns')
	}

})

async function calculate_table_column( tc, transaction ) {

	const tmp = {}

	// ____________________ Upper Table ____________________

	let upper_table_score = 0
	let upper_table_has_null = false

	for(let i = 1; 6 >= i; i++) {
		const value = tc[`Upper_Table_${i}`]
		if(value || value === 0) {
			upper_table_score += value
		} else {
			upper_table_has_null = true
		}
	}

	tmp.Upper_Table_Score = upper_table_score

	if(!upper_table_has_null) {
		tmp.Upper_Table_Add35 = upper_table_score >= 63 ? 35 : 0
		tmp.Upper_Table_TotalScore = tmp.Upper_Table_Score + tmp.Upper_Table_Add35
	} else {
		tmp.Upper_Table_Add35 = null
		tmp.Upper_Table_TotalScore = null
	}



	// ____________________ Bottom Table ____________________

	let bottom_table_score = 0
	let bottom_table_has_null = false

	for(let i = 1; 7 >= i; i++) {
		const value = tc[`Bottom_Table_${i}`]
		if(value || value === 0) {
			bottom_table_score += value
		} else {
			bottom_table_has_null = true
		}
	}
	
	if(!bottom_table_has_null) {
		tmp.Bottom_Table_Score = bottom_table_score
		if(tmp.Upper_Table_TotalScore) {
			tmp.Bottom_Table_TotalScore = tmp.Upper_Table_TotalScore + tmp.Bottom_Table_Score
		}
	} else {
		tmp.Bottom_Table_Score = null
		tmp.Bottom_Table_TotalScore = null
	}

	tmp.TotalScore = (tmp.Upper_Table_TotalScore !== null ? tmp.Upper_Table_TotalScore : upper_table_score) + bottom_table_score

	
	return await tc.update(tmp, { transaction })

}

function is_valid_input( Name, Value ) {

	if (possible_entries.hasOwnProperty(Name)) {
		const validValues = possible_entries[Name]
		return (validValues.includes(Value) || Value === null)
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

	const { UserID } = req
	const SessionID = +req.query.session_id
	const FinalScoreID = +req.query.finalscore_id

	if(!SessionID) return res.status(400).send('SessionID invalid.')
	if(!FinalScoreID) return res.status(400).send('FinalScoreID invalid.')
	

	const transaction = await sequelize.transaction()
	try {


		// __________________________________________________ User __________________________________________________

		const user = await Users.findByPk(UserID, {
			transaction, 
			include: [{
				model: Sessions, 
				required: false, 
				where: { id: SessionID }, 
			}]
		})

		// Check if user exists
		if(!user) {
			await transaction.rollback()
			return res.status(404).send('User not found.')
		}

		// Check if session exists
		if(!user.Sessions[0]) {
			await transaction.rollback()
			return res.status(404).send('Session not found.')
		}


		// __________________________________________________ FinalScore __________________________________________________

		const finalscore = await FinalScores.findByPk(FinalScoreID, {
			include: Table_Archives,  
			transaction, 
		})

		// Check if finalscore exists
		if(!finalscore) {
			await transaction.rollback()
			return res.status(404).send('FinalScore not found.')
		}

		// Check if table_archive exists
		if(!finalscore.Table_Archive) {
			await transaction.rollback()
			return res.status(404).send('Table_Archive not found.')
		}


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.json(finalscore.Table_Archive.Table)



	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'GET /session/preview/table')
	}

})





module.exports = router
