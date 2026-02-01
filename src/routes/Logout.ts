

import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'
import { handle_error } from '../handle_error.js'
import { prisma } from '../index.js'
import { 
	REFRESH_TOKEN_SECURE, 
	REFRESH_TOKEN_SAMESITE, 
	REFRESH_TOKEN_MAX_AGE_IN_MINUTES 
} from '../utils.js'





router.delete('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.Wuerflii__Refresh_Token) return res.status(204).send('Request already has no refresh_cookie.')				// check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)	-->since there is no RefreshToken, the logout request is finished
	const refresh_token = cookies.Wuerflii__Refresh_Token


	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({ 
				where: { Refresh_Token: refresh_token }
			})
		
			// there is no user with that Refresh_Token, therefore, the Refresh_Token cookie will be cleared
			if(!user) {
				res.clearCookie('Wuerflii__Refresh_Token', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE || 'None', maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
				return res.status(204).send('No user with that refresh token - cleared cookie from request.')
			}
	
			// Delete Refresh_Token
			await tx.users.update({ 
				where: { Refresh_Token: refresh_token }, 
				data: { Refresh_Token: null } 
			})
	
			res.clearCookie('Wuerflii__Refresh_Token', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, secure: REFRESH_TOKEN_SECURE })
			res.status(204).send('Cleared refresh token from user and request.')

		})
	} catch(err) {
		await handle_error(res, err, 'DELETE /logout')
	}

})





export default router
