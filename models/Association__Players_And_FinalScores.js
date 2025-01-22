

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Association__Players_And_FinalScores', {

		Winner: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		Score: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},


		Wins__Before: {
			type: DataTypes.INTEGER, 
			allowNull: false,
		},
		Wins__After: {
			type: DataTypes.INTEGER, 
			allowNull: false,
		},
		Wins__Before_Year: {
			type: DataTypes.INTEGER, 
			allowNull: false,
		},
		Wins__After_Year: {
			type: DataTypes.INTEGER, 
			allowNull: false,
		},
		Wins__Before_Month: {
			type: DataTypes.INTEGER, 
			allowNull: false,
		},
		Wins__After_Month: {
			type: DataTypes.INTEGER, 
			allowNull: false,
		},
		Wins__Before_SinceCustomDate: {
			type: DataTypes.INTEGER, 
			allowNull: true,
		},
		Wins__After_SinceCustomDate: {
			type: DataTypes.INTEGER, 
			allowNull: true,
		},

    })
}
