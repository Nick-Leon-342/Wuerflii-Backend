

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
			validate: { isIn: [[ null, 0, 1, 2, 3, 4, 50 ]] }, 
		},
		Upper_Table_2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 2, 4, 6, 8, 50 ]] }, 
		},
		Upper_Table_3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 3, 6, 9, 12, 50 ]] }, 
		},
		Upper_Table_4: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 4, 8, 12, 16, 50 ]] }, 
		},
		Upper_Table_5: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 5, 10, 15, 20, 50 ]] }, 
		},
		Upper_Table_6: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 6, 12, 18, 24, 50 ]] }, 
		},



		// __________________________________________________

		Upper_Table_Score: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
			validate: { isIn: [[ null, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ]] }, 
		},
		Bottom_Table_2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ]] }, 
		},
		Bottom_Table_3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 25, 50 ]] }, 
		},
		Bottom_Table_4: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 30, 40, 50 ]] }, 
		},
		Bottom_Table_5: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 40, 50 ]] }, 
		},
		Bottom_Table_6: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 0, 50 ]] }, 
		},
		Bottom_Table_7: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: { isIn: [[ null, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ]] }, 
		},



		// __________________________________________________

		Bottom_Table_Score: {
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
