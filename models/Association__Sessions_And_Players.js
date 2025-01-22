

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Association__Sessions_And_Players', {

		Gnadenwurf_Used: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		Order_Index: { // Decides which player is the first, second ...
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		
    })
}
