

module.exports = (sequelize, DataTypes) => {
    const BottomTable = sequelize.define('BottomTable', {
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Alias: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Column: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		JoinCode: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		0: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		1: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		2: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		3: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		4: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		5: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		6: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
    })

    return BottomTable
}
