

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {

        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		RefreshToken: {
			type: DataTypes.STRING,
			allowNull: true, 
		},
		DarkMode: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
		},

    })
}
