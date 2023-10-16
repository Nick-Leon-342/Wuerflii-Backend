

module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('Sessions', {
		Attributes: {
			type: DataTypes.TEXT,
			allowNull: false
		},
        List_Players: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
		List_FinalScores: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
    })

    return Sessions
}
