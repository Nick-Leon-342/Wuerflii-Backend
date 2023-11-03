

module.exports = (sequelize, DataTypes) => {
    const Players = sequelize.define('Players', {
		userId: {
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
		Wins: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
    })

    return Players
}
