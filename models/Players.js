

module.exports = (sequelize, DataTypes) => {
    const Players = sequelize.define('Players', {
		UserID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        JoinCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Name: {
            type: DataTypes.STRING,
			allowNull: false,
        },
		Alias: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Wins: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
    })

    return Players
}
