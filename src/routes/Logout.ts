

import express from 'express'
const router = express.Router()

import { handle_error } from '../handle_error.js'
import { 
	REFRESH_TOKEN_SECURE, 
	REFRESH_TOKEN_SAMESITE, 
	REFRESH_TOKEN_MAX_AGE_IN_MINUTES 
} from '../utils.js'





router.delete('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.Wuerflii__Refresh_Token) return res.status(204).send('Request already has no refresh_cookie.')				// check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)	-->since there is no RefreshToken, the logout request is finished
	const refreshToken = cookies.Wuerflii__Refresh_Token

	const transaction = await sequelize.transaction()
	try {
	

		// __________________________________________________ User __________________________________________________

		const user = await Users.findOne({ 
			where: { Refresh_Token: refreshToken }, 
			transaction, 
		})
	
		// there is no user with that Refresh_Token, therefore, the Refresh_Token cookie will be cleared
		if(!user) {
			res.clearCookie('Wuerflii__Refresh_Token', { httpOnly: true, sameSite: process.env.REFRESH_TOKEN_SAMESITE || 'None', maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
			return res.status(204).send('No user with that refresh token - cleared cookie from request.')
		}

		
		// __________________________________________________ Delete Refresh_Token __________________________________________________
		await user.update({ Refresh_Token: '' }, { transaction })


		// __________________________________________________ Response __________________________________________________

		await transaction.commit()
		res.clearCookie('Wuerflii__Refresh_Token', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, secure: REFRESH_TOKEN_SECURE })
		res.status(204).send('Cleared refresh token from user and request.')


	} catch(err) {
		await transaction.rollback()
		await handle_error(res, err, 'DELETE /logout')
	}

})





export default router
