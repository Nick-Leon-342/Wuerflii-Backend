

module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('Sessions', {
		Columns: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        JoinCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        InputType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastPlayed: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        CreatedDate: {
            type: DataTypes.DATE,
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
        CustomDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    })

    return Sessions
}
