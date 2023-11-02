

module.exports = (sequelize, DataTypes) => {
    const FinalScores = sequelize.define('FinalScores', {
		userId: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		Played: {
			type: DataTypes.TEXT,
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
			type: DataTypes.TEXT,
			allowNull: false,
		},
    })

    return FinalScores
}
