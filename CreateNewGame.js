

const { 
	Association__Sessions_And_Players, 
	Table_Columns
} = require('./models')





/**
 * 
 * Creates a new game session with specified players and columns.
 * Generates a unique join code for the session, sets up initial data for each player,
 * and saves it to the database.
 * 
 * @module createNewGame
 * @async
 * 
 * @param {Object} options - The options object for creating a new game.
 * @param {Array<Object>} options.List_Players - List of player objects with details such as `Alias`.
 * @param {Object} options.transaction - The transaction object for managing database changes.
 * @param {Object} options.Session - The sessions object.
 * @param {number} options.Columns - Number of columns to set up for each player.
 * @param {number} options.date - Current date.
 * 
 * @returns {Promise<number>} Returns a promise that resolves to the generated join code.
 * 
 * @throws {Error} Throws an error if database operations fail.
 * 
 */

module.exports = async function createNewGame({
	List_Players, 
	transaction, 
	Session, 
	Columns, 
	date, 
}) {

	await Session.update({ CurrentGameStart: date }, { transaction })

	const array_columns = Array.from({ length: Columns }, (_, index) => index)


	for(const player of List_Players) {

		await Association__Sessions_And_Players.update({ Gnadenwurf_Used: false }, { 
			where: {
				SessionID: Session.id, 
				PlayerID: player.id, 
			}, 
			transaction, 
		})


		for(const column of array_columns) {

			await Table_Columns.create({ 
				PlayerID: player.id, 
				Column: column, 

				Upper_Table_Score: 0, 
				TotalScore: 0, 
			}, { transaction })

		}

	}

}
