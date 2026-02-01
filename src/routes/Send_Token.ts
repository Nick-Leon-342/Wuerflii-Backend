

import jwt from 'jsonwebtoken'
import type { Prisma } from '@prisma/client/extension'
import type { Response } from 'express'

import { 
	ACCESS_TOKEN_SECRET,
	REFRESH_TOKEN_SECRET, 
	REFRESH_TOKEN_SAMESITE, 
	REFRESH_TOKEN_SECURE, 
	REFRESH_TOKEN_MAX_AGE_IN_MINUTES, 
	ACCESS_TOKEN_MAX_AGE_IN_MINUTES,
} from '../utils.js'





export default async function send_token({
	Transaction_Prisma, 
	UserID, 
	res, 
}: {
	Transaction_Prisma:	Prisma.TransactionClient
	UserID:				number
	res:				Response
}) {

	// Create both token
	const access_token = jwt.sign(
		{ 'id': UserID },
		ACCESS_TOKEN_SECRET,
		{ expiresIn: `${ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` }
	)
	const refresh_token = jwt.sign(
		{ 'id': UserID },
		REFRESH_TOKEN_SECRET,
		{ expiresIn: REFRESH_TOKEN_MAX_AGE_IN_MINUTES / 1000 }
	)

	// Save in database
	await Transaction_Prisma.users.update({
		where: 	{ id: UserID }, 
		data: 	{ Refresh_Token: refresh_token }
	})

	// Send Refresh_Token as cookie and accesstoken as response in json
	res.cookie(
		'Wuerflii__Refresh_Token', 
		refresh_token, 
		{ 
			httpOnly: true, 
			sameSite: REFRESH_TOKEN_SAMESITE, 
			maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, 
			secure: REFRESH_TOKEN_SECURE 
		}
	)
	res.json({ access_token })

}
