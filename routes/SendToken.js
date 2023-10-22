

const jwt = require('jsonwebtoken')
const { Users } = require('../models')

//__________________________________________________SendToken__________________________________________________

module.exports = async function sendToken(res, user) {

	//create both token
	const id = user.id
	const accessToken = jwt.sign(
		{ 'id': id },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: '10s' }
	)
	const refreshToken = jwt.sign(
		{ 'id': id },
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: '1d' }
	)

	//save in database
	const updatedRefreshToken = { RefreshToken: refreshToken }
	await Users.update(updatedRefreshToken, { where: { id: id } })
	
	//send refreshtoken as cookie and accesstoken as response in json
	res.cookie('RefreshToken', refreshToken, { httpOnly: true, sameSite:'None', maxAge: 24 * 60 * 60 * 1000, secure: true })
	res.json({ accessToken })

}
