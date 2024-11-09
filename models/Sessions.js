

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
            type: DataTypes.ENUM('type', 'select', 'select_and_type'),
            allowNull: false,
        },
		ShowScores: {
			type: DataTypes.BOOLEAN, 
			allowNull: false, 
		},





		View_Month: {	// Which month to view in /session/preview
			type: DataTypes.INTEGER,
			validate: { isIn: [[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]] },  
			allowNull: false, 
		},
		View_Year: {	// Which year to view in /session/preview
			type: DataTypes.INTEGER,
			allowNull: false, 
		},
        View: {	// Selected view
            type: DataTypes.ENUM('show_month', 'show_year', 'custom_date', 'show_all'),
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
