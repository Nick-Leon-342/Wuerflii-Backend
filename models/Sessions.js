

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Sessions', {

        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		Columns: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        InputType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        List_PlayerOrder: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
		ShowScores: {
			type: DataTypes.BOOLEAN, 
			allowNull: false, 
		},

		
		
        CustomDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        CurrentGameStart: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        LastPlayed: {
            type: DataTypes.DATE,
            allowNull: false,
        },

    })
}
