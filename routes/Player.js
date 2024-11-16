

const express = require('express')
const router = express.Router()

const { filter_table_column } = require('../Filter_DatabaseJSON')
const { isInt,isBoolean, isString, isColor } = require('../IsDataType')
const { 
	Players, 
	Sessions,
	Table_Columns, 
	Users, 

	sequelize, 
} = require('../models')
const { MAX_LENGTH_PLAYER_NAME } = require('../utils_env')





router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, PlayerID, Gnadenwurf} = req.body

	if(
		!SessionID || !isInt(SessionID) || 
		!isBoolean(Gnadenwurf)
	) return res.sendStatus(400)

	
	const transaction = await sequelize.transaction()
	try {

		
		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					where: { id: PlayerID }, 
				}]
			}]
		})

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}

		await user.Sessions[0].Players[0].update({
			Gnadenwurf
		}, { transaction })

		await transaction.commit()

		res.sendStatus(204)


	} catch(err) {
		console.log('PATCH /player\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})

router.patch('/list', async (req, res) => {

	const { UserID } = req
	const { SessionID, List_Players} = req.body

	if(
		!SessionID || !isInt(SessionID) || 
		!List_Players || 
		!List_Players.every(p => (
			p.id && isInt(p.id) && 
			p.Name && isString(p.Name) &&
			p.Color && isColor(p.Color)
		))
	) return res.sendStatus(400)

	// Check if length of user.Name-length is valid
	if(!List_Players.every(p => p.Name.length > 0 && p.Name.length <= MAX_LENGTH_PLAYER_NAME)) return res.status(409).send('Name length not valid.')

	
	const transaction = await sequelize.transaction()
	try {

		
		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: Players
			}]
		})


		// ____________________ Check if everything has been found ____________________

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}


		// ____________________ Check if every player exists in both lists ____________________

		const tmp_list_players = user.Sessions[0].Players
		if(
			tmp_list_players.length !== List_Players.length || 
			!tmp_list_players.every(player => List_Players.some(p => p.id === player.id))
		) {
			await transaction.rollback()
			return res.sendStatus(400)
		}


		// ____________________ Update players ____________________

		for(let i = 0; List_Players.length > i; i++) {
			const p = List_Players[i]

			for(const player of tmp_list_players) {
				if(player.id === p.id) {
					await player.update({
						Name: p.Name, 
						Color: p.Color, 
						Order_Index: i
					}, { transaction })
					continue
				}
			}
		}

		await transaction.commit()
		res.sendStatus(204)


	} catch(err) {
		console.log('PATCH /player/list\n', err)
		await transaction.rollback()
		res.sendStatus(500)
	}

})





// __________________________________________________ Input __________________________________________________

router.post('/input', async (req, res) => {

	const { UserID } = req
	const { SessionID, PlayerID, Column, Name, Value } = req.body

	if(
		!SessionID || !isInt(SessionID) ||
		!PlayerID || !isInt(PlayerID) || 
		!isInt(Column) ||
		!Name || !isString(Name) || 
		(Value !== null && !isInt(Value))
	) return res.sendStatus(400)
	if(!is_valid_input(Name, Value)) return res.sendStatus(409)


	const transaction = await sequelize.transaction()
	try {

		
		const user = await Users.findOne({ 
			where: { id: UserID }, 
			transaction, 
			include: [{
				model: Sessions, 
				where: { id: SessionID }, 
				include: [{
					model: Players, 
					where: { id: PlayerID }, 
					include: [{
						model: Table_Columns, 
						where: { Column }, 
					}]
				}]
			}]
		})

		if(!user || !user.Sessions[0] || !user.Sessions[0].Players[0] || !user.Sessions[0].Players[0].Table_Columns[0]) {
			await transaction.rollback()
			return res.sendStatus(404)
		}

		const table_column = await user.Sessions[0].Players[0].Table_Columns[0].update({
			[Name]: Value
		}, { transaction })

		const table_column_calculated = await calculate_table_column(table_column, transaction)

		await transaction.commit()

		res.json({ Column: filter_table_column(table_column_calculated) })


	} catch(err) {
		console.log('PATCH /player\n', err)
		await transaction.rollback()
		res.sendStatus(500)
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





module.exports = router
