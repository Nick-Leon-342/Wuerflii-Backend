

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('FinalScores', {

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
		Surrendered: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},

    })
}
