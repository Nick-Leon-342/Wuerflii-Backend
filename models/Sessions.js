

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Sessions', {

        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		Color: {
			type: DataTypes.STRING, 
			allowNull: false, 
		}, 
		Columns: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		
		View_List_Years: {	// Which years could be displayed because games were played in them
			type: DataTypes.ARRAY(DataTypes.INTEGER), 
			allowNull: false, 
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
