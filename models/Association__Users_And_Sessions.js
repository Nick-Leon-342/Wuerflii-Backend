

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Association__Users_And_Sessions', {

		InputType: {
			type: DataTypes.ENUM([ 'type', 'select', 'select_and_type' ]),
			allowNull: false,
		},
		Scores_Visible: {
			type: DataTypes.BOOLEAN, 
			allowNull: false, 
		},




		// Values for /session/preview
        View: {				// Selected view for finalscores-list
            type: DataTypes.ENUM([ 'show_month', 'show_year', 'show_custom_date', 'show_all' ]),
            allowNull: false,
        },
		View_Month: {		// Which month to view
			type: DataTypes.INTEGER,
			validate: { isIn: [[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]] },  
			allowNull: false, 
		},
		View_Year: {		// Which year to view
			type: DataTypes.INTEGER,
			allowNull: false, 
		},
		View_CustomDate: {	// A self picked date from which scores are calculated
			type: DataTypes.DATE,
			allowNull: false,
		},

	})
}
