

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
		
    })
}
