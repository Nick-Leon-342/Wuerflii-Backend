

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





		// For session list in /session/select
		Show_Session_Names: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
		},
		Show_Session_Date: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
		},
		View_Sessions: {
			type: DataTypes.ENUM([ 'Last_Played', 'Created', 'Name' ]),
			allowNull: false, 
		},
		View_Sessions_Desc: {
			type: DataTypes.BOOLEAN,
			allowNull: false, 
		},



		// Values for /analytics
		Statistics_View: {			// Selected view for statistics
			type: DataTypes.ENUM([ 'statistics_overall', 'statistics_year', 'statistics_month' ]), 
			allowNull: false, 
		}, 
		Statistics_View_Month: {	// Which month to view
			type: DataTypes.INTEGER,
			validate: { isIn: [[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]] },  
			allowNull: false, 
		}, 
		Statistics_View_Year: {		// Which year to view
			type: DataTypes.INTEGER, 
			allowNull: false, 
		}, 

    })
}
