

module.exports = (sequelize, DataTypes) => {
    const TableArchive = sequelize.define('TableArchive', {
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

    return TableArchive
}
