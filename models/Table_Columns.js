

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Table_Columns', {

		Column: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},





		// ____________________ Upper-Table ____________________

		Upper_Table_1: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Upper_Table_2: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Upper_Table_3: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Upper_Table_4: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Upper_Table_5: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Upper_Table_6: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},



		// __________________________________________________

		Upper_Table_Score: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Upper_Table_Add35: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Upper_Table_TotalScore: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},





		// ____________________ Bottom-Table ____________________

		Bottom_Table_1: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_2: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_3: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_4: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_5: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_6: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_7: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},



		// __________________________________________________

		Bottom_Table_Score: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_UpperTableScore: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Bottom_Table_TotalScore: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},





		TotalScore: { // Hidden but necessary to calculate totalscore in frontend
			type: DataTypes.INTEGER,
			allowNull: false,
		},

    })
}
