

const { Players, Users, Sessions, FinalScores, PlayerTable, UpperTable, BottomTable, TableArchive } = require('./models')





async function createNewGame(date, UserID, List_Players, SessionID, Columns, JoinCode) {

	const gnadenwürfe = {}
	const array_columns = Array.from({ length: Columns }, (_, index) => index)

	for(const p of List_Players) {
		gnadenwürfe[p.Alias] = false

		for(const column of array_columns) {

			const json = { 
				UserID, 
				Alias: p.Alias, 
				Column: column, 
				JoinCode, SessionID 
			}
			
			UpperTable.create(json).catch((err) => {console.log('FUNCTION createNewGame - UpperTable', err)})
			BottomTable.create(json).catch((err) => {console.log('FUNCTION createNewGame - BottomTable', err)})

		}

	}

	await PlayerTable.create({ 
		UserID: UserID, 
		JoinCode: JoinCode, 
		Start: date, 
		Gnadenwürfe: gnadenwürfe, 
		SessionID: SessionID, 
	}).catch((err) => {console.log('FUNCTION createNewGame - PlayerTable', err)})

}

function generateJoinCode() {

	const min = 10000000
	const max = 99999999
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
	return randomNumber

}





module.exports = {
	createNewGame, 
	generateJoinCode
}
