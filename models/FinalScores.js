

module.exports = (sequelize, DataTypes) => {
    const FinalScores = sequelize.define('FinalScores', {
		UserID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		ScoresBefore: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		ScoresAfter: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		Start: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		End: {
			type: DataTypes.DATE,
			allowNull: false,
		},
        Columns: {
            type: DataTypes.INTEGER,
			allowNull: false,
        },
		Surrender: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		List_Winner: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
		PlayerScores: {
			type: DataTypes.JSON,
			allowNull: false,
		},
    })

    return FinalScores
}
