

const { Sessions, PlayerTable, UpperTable, BottomTable } = require('./models')





async function destroyGame(SessionID, UserID) {

	try {

		const json = { JoinCode: null }
		await Sessions.update(json, { where: { UserID, id: SessionID } }).catch((err) => {console.log('FUNCTION destroyGame sessions', err)})

		const findJSON = { UserID, SessionID }
		await PlayerTable.destroy({ where: findJSON }).catch((err) => {console.log('FUNCTION destroyGame playertable', err)})
		await UpperTable.destroy({ where: findJSON }).catch((err) => {console.log('FUNCTION destroyGame uppertable', err)})
		await BottomTable.destroy({ where: findJSON }).catch((err) => {console.log('FUNCTION destroyGame bottomtable', err)})

		return 204

	} catch (err) {
		console.log('FUNCTION destroyGame', err)
		return 500
	}

}





module.exports = {
	destroyGame
}
