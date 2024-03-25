

module.exports = (sequelize, DataTypes) => {
    const Players = sequelize.define('Players', {
		UserID: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
    })

    return Players
}
