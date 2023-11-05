

module.exports = (sequelize, DataTypes) => {
    const FinalScores = sequelize.define('FinalScores', {
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Start: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		End: {
			type: DataTypes.STRING,
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
