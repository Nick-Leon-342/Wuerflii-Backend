

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Players', {

		Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Gnadenwurf: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		Order_Index: { // Decides which player is the first, second ...
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		
    })
}
