

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
		Show_Session_Names: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
		},
		Show_Session_Date: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
		},
		View_Sessions: {
			type: DataTypes.STRING,
			allowNull: false, 
		},
		View_Sessions_Desc: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
		},

    })
}
