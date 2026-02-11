

import express from 'express'
const router = express.Router()

import bcrypt from 'bcrypt'
import { prisma } from '../index.js'
import send_token from './Send_Token.js'
import { isString } from '../IsDataType.js'
import { handle_error } from '../handle_error.js'
import jwt, { type JwtPayload } from 'jsonwebtoken'
import { List__Months_Enum } from '../types/Type___List__Months.js'
import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'

import {
	REFRESH_TOKEN_SECURE, 
	REFRESH_TOKEN_SAMESITE, 
	REFRESH_TOKEN_MAX_AGE_IN_MINUTES , 


	NAME__MIN_CHARACTER, 
	NAME__MAX_CHARACTER, 
	
	NAME__REGEX, 
	NAME__REGEX_MINMAX, 
	NAME__REGEX_LETTERFIRST, 
	NAME__REGEX_ALLOWEDCHARS, 


	PASSWORD__MIN_CHARACTER, 
	PASSWORD__MAX_CHARACTER, 

	PASSWORD__REGEX, 
	PASSWORD__REGEX_MINMAX, 
	PASSWORD__REGEX_ALLOWEDCHARS, 
	PASSWORD__REGEX_ALLOWEDSYMBOLS,
	DISABLE_REGISTRATION_OF_NEW_USERS,
	REFRESH_TOKEN_SECRET,
	ACCESS_TOKEN_SECRET,
	ACCESS_TOKEN_MAX_AGE_IN_MINUTES, 
} from '../utils.js'






router.get('/regex', (_, res) => {

	res.json({
		NAME__MIN_CHARACTER, 
		NAME__MAX_CHARACTER, 
		
		NAME__REGEX, 
		NAME__REGEX_MINMAX, 
		NAME__REGEX_LETTERFIRST, 
		NAME__REGEX_ALLOWEDCHARS, 
	
	
		PASSWORD__MIN_CHARACTER, 
		PASSWORD__MAX_CHARACTER, 
	
		PASSWORD__REGEX, 
		PASSWORD__REGEX_MINMAX, 
		PASSWORD__REGEX_ALLOWEDCHARS, 
		PASSWORD__REGEX_ALLOWEDSYMBOLS, 
	})

})

router.post('/login', async (req, res) => {

	const { 
		Name, 
		Password 
	} = req.body

	if(!Name && !isString(Name)			) return res.status(400).send('Name invalid.')
	if(!Password && !isString(Password)	) return res.status(400).send('Password invalid.')


	try {
		await prisma.$transaction(async (tx) => {

			// ____________________ User ____________________

			const user = await tx.users.findUnique({ where: { Name: Name } })

			if(!user || !(await bcrypt.compare(Password, user.Password)))
				throw new Custom__Handled_Error('Wrong credentials!', 409)


			// ____________________ Response ____________________

			await send_token({
				UserID: 			user.id, 
				res:				res, 
				Transaction_Prisma:	tx, 
			})

		})	
	} catch(err) {
		await handle_error(res, err, 'POST /auth/login')
	}

})

router.post('/registration', async (req, res) => {

	if(DISABLE_REGISTRATION_OF_NEW_USERS) return res.status(409).send('User registration is disabled.')
	
	const { Name, Password } = req.body
	
	if(!Name || !(new RegExp(NAME__REGEX)).test(Name)) return res.status(400).send('Name invalid.')
	if(!Password || !(new RegExp(PASSWORD__REGEX)).test(Password)) return res.status(400).send('Password invalid.')


	try {
		await prisma.$transaction(async (tx) => {
	
	
			// ____________________ User ____________________
	
			const tmp__user = await tx.users.findUnique({ where: { Name: Name } })
			if(tmp__user) throw new Custom__Handled_Error('Username already taken.', 409)
		
	
			// ____________________ Hash Password ____________________
	
			const hashedPassword = await bcrypt.hash(Password, 10)
	
	
			// ____________________ Create New User ____________________
	
			const user = await tx.users.create({
				data: {
					Name:					Name,
					DarkMode:				false, 
					Password:				hashedPassword, 
		
					Show__Session_Names:	true, 
					Show__Session_Date:		true, 
					View__Sessions:			'LAST_PLAYED', 
					View__Sessions_Desc: 	true, 
		
					Statistics__View:		'STATISTICS_OVERALL', 
					Statistics__View_Month:	List__Months_Enum[new Date().getMonth()] || 'JANUARY', 
					Statistics__View_Year:	new Date().getFullYear(), 
				}
			})
	
	
			// ____________________ Response ____________________
	
			await send_token({
				UserID:				user.id, 
				res:				res, 
				Transaction_Prisma:	tx, 
			})

		})
	} catch(err) {
		await handle_error(res, err, 'POST /auth/registration')
	}

})

router.delete('/logout', async (req, res) => {

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





// __________________________________________________ Handle Refresh_Token __________________________________________________

interface JWT_Payload__Refresh_Token extends JwtPayload {
	id:		number
	iat:	number
	exp:	number
}

router.get('/refreshtoken', async (req, res) => {

    const cookies = req.cookies
	if (!cookies.Wuerflii__Refresh_Token) return res.status(401).send('No cookie found.')				//check for cookies and check for cookies with 'Refresh_Token' properties (name of cookie)
	const refresh_token = cookies.Wuerflii__Refresh_Token

	const user = await prisma.users.findUnique({ 
		where: { 
			Refresh_Token:	refresh_token, 
		} 
	})
	if(!user) return res.status(403).send('User not found.')

	let decoded: JWT_Payload__Refresh_Token
	try {

		decoded = jwt.verify(
			refresh_token, 
			REFRESH_TOKEN_SECRET, 
		) as JWT_Payload__Refresh_Token

	} catch(err) { return res.status(403).send('Invalid token.') }
	
	if(!decoded || user.id !== decoded.id) return res.status(403).send('User mismatch.')
	
	const access_token = jwt.sign(
		{ 'id': decoded.id },
		ACCESS_TOKEN_SECRET,
		{ expiresIn: `${ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` }
	)

	res.json({ access_token })

})





export default router
