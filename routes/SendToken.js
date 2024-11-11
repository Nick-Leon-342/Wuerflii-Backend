

const jwt = require('jsonwebtoken')
const { Users } = require('../models')
const { REFRESH_TOKEN_SAMESITE, REFRESH_TOKEN_SECURE } = require('../utils_env')





/**
 * 
 * Generates and sends authentication tokens for a user. Creates an access token and a refresh token,
 * saves the refresh token in the database, and sends the tokens in the response.
 * 
 * @module sendToken
 * @async
 * 
 * @param {Object} options - The options object.
 * @param {Object} options.transaction - The transaction object for managing database changes.
 * @param {number} options.UserID - The unique identifier of the user.
 * @param {Object} options.res - The response object to send back to the client.
 * 
 * @returns {Promise<void>} Returns a promise that resolves when the tokens are generated, saved, and sent.
 * 
 * @throws {Error} Throws an error if token generation or database update fails.
 * 
 */

module.exports = async function sendToken({
	transaction, 
	UserID, 
	res, 
}) {

	// Create both token
	const accessToken = jwt.sign(
		{ 'id': UserID },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: `${process.env.ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` || '15m' }
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
	const maxAge = (parseInt(process.env.REFRESH_TOKEN_MAX_AGE_IN_MINUTES) || 24 * 60) * 60 * 1000
	res.cookie('Kniffel_RefreshToken', refreshToken, { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, maxAge: maxAge, secure: REFRESH_TOKEN_SECURE })
	res.json({ accessToken })

}
