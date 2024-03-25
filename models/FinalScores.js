

module.exports = (sequelize, DataTypes) => {
    const FinalScores = sequelize.define('FinalScores', {
		UserID: {
			type: DataTypes.INTEGER,
			allowNull: false,
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


		ScoresBefore: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		ScoresAfter: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		ScoresBefore_Year: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		ScoresAfter_Year: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		ScoresBefore_Month: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		ScoresAfter_Month: {
			type: DataTypes.JSON, 
			allowNull: false
		},
		ScoresBefore_SinceCustomDate: {
			type: DataTypes.JSON, 
			allowNull: true
		},
		ScoresAfter_SinceCustomDate: {
			type: DataTypes.JSON, 
			allowNull: true
		},
    })

    return FinalScores
}
