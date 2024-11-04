

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Table_Archives', {

        Table: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        },
		
    })
}
