

const jwt = require('jsonwebtoken')
const { Users } = require('../models')
const { REFRESH_TOKEN_SAMESITE, REFRESH_TOKEN_SECURE, REFRESH_TOKEN_MAX_AGE_IN_MINUTES, ACCESS_TOKEN_MAX_AGE_IN_MINUTES } = require('../utils')





export default async function sendToken({
	transaction, 
	UserID, 
	res, 
}) {

	// Create both token
	const accessToken = jwt.sign(
		{ 'id': UserID },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: `${ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` || '15m' }
	)
	const refreshToken = jwt.sign(
		{ 'id': UserID },
		process.env.REFRESH_TOKEN_SECRET
	)


	// Save in database
	await Users.update( 
		{ RefreshToken: refreshToken }, 
		{ 
			where: { id: UserID }, 
			transaction 
		},  
	)

	await transaction.commit()


	// Send refreshtoken as cookie and accesstoken as response in json
	res.cookie('Wuerflii_RefreshToken', refreshToken, { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
	res.json({ accessToken })

}
