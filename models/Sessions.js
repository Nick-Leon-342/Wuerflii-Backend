

module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('Users', {
        SessionName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		Attributes: {
			type: DataTypes.STRING,
			allowNull: true
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
