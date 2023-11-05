

module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('Sessions', {
		Columns: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        InputType: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        LastPlayed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CreatedDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SessionName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        List_PlayerOrder: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
    })

    return Sessions
}
