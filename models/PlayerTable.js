

module.exports = (sequelize, DataTypes) => {
    const PlayerTable = sequelize.define('PlayerTable', {
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		JoinCode: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Gnadenwürfe: {
			type: DataTypes.JSON,
			allowNull: false,
		},
    })

    return PlayerTable
}
