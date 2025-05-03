

const express = require('express')
const router = express.Router()

const { Users, sequelize } = require('../models')
const { REFRESH_TOKEN_SECURE, REFRESH_TOKEN_SAMESITE, REFRESH_TOKEN_MAX_AGE_IN_MINUTES } = require('../utils')
const { handle_error } = require('../handle_error')





router.delete('/', async (req, res) => {

	const { UserID } = req

    const cookies = req.cookies
	if (!cookies?.Wuerflii_RefreshToken) return res.status(204).send('Request already has no refresh_cookie.')				// check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)	-->since there is no RefreshToken, the logout request is finished
	const refreshToken = cookies.Wuerflii_RefreshToken

	const transaction = await sequelize.transaction()
	try {
	

		// __________________________________________________ User __________________________________________________

		const user = await Users.findOne({ 
			where: { 
				RefreshToken: refreshToken, 
				id: UserID, 
			}, 
			transaction, 
		})
	
		// there is no user with that refreshtoken, therefore, the Refreshtoken cookie will be cleared
		if(!user) {
			res.clearCookie('Wuerflii_RefreshToken', { httpOnly: true, sameSite: process.env.REFRESH_TOKEN_SAMESITE || 'None', maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
			return res.status(204).send('No user with that refresh token - cleared cookie from request.')
		}

		
		// __________________________________________________ Delete RefreshToken __________________________________________________
		await user.update({ RefreshToken: '' }, { transaction })


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.clearCookie('Wuerflii_RefreshToken', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
		res.status(204).send('Cleared refresh token from user and request.')


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'DELETE /logout')
	}

})





module.exports = router
