

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		RefreshToken: {
			type: DataTypes.STRING,
			allowNull: true
		}
    })

    return Users
}