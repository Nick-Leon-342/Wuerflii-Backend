

const jwt = require('jsonwebtoken')
const { Users } = require('../models')

//__________________________________________________SendToken__________________________________________________

module.exports = async function sendToken(res, user) {

	//create both token
	const id = user.id
	const accessToken = jwt.sign(
		{ 'id': id },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: `${process.env.ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` || '15m' }
	)
	const refreshToken = jwt.sign(
		{ 'id': id },
		process.env.REFRESH_TOKEN_SECRET
	)

	//save in database
	const updatedRefreshToken = { RefreshToken: refreshToken }
	await Users.update(updatedRefreshToken, { where: { id: id } })
	
	//send refreshtoken as cookie and accesstoken as response in json
	const maxAge = (parseInt(process.env.REFRESH_TOKEN_MAX_AGE_IN_MINUTES) || 24 * 60) * 60 * 1000
	res.cookie('Kniffel_RefreshToken', refreshToken, { httpOnly: true, sameSite: process.env.REFRESH_TOKEN_SAMESITE || 'None', maxAge: maxAge, secure: process.env.REFRESH_TOKEN_SECURE === 'true' || false })
	res.json({ accessToken })

}
