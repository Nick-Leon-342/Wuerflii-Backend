

module.exports = (sequelize, DataTypes) => {
    const PlayerTable = sequelize.define('PlayerTable', {
		UserID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		JoinCode: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Start: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		Gnadenwürfe: {
			type: DataTypes.JSON,
			allowNull: false,
		},
    })

    return PlayerTable
}
