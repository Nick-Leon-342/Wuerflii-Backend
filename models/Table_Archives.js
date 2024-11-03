

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Table_Archives', {

		UserID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		SessionID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        Table: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        },
		
    })
}
