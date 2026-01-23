

export default async function createNewGame({
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
