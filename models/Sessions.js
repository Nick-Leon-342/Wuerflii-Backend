

module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('Sessions', {
		Attributes: {
			type: DataTypes.STRING,
			allowNull: false
		},
        List_Players: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		List_FinalScores: {
			type: DataTypes.STRING,
			allowNull: true,
		},
    })

    return Sessions
}
