

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





export default async function token_send({
	Transaction_Prisma, 
	Response, 
	UserID, 
}: {
	Transaction_Prisma:	Prisma.TransactionClient
	Response:			Response
	UserID:				number
}) {

	// Create both token
	const token_access = jwt.sign(
		{ 'id': UserID },
		ACCESS_TOKEN_SECRET,
		{ expiresIn: `${ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` || '15m' }
	)
	const token_refresh = jwt.sign(
		{ 'id': UserID },
		REFRESH_TOKEN_SECRET,
	)

	// Save in database
	await Transaction_Prisma.users.update({
		where: 	{ id: UserID }, 
		data: 	{ Token_Refresh: token_refresh }
	})

	// Send Token_Refresh as cookie and accesstoken as response in json
	Response.cookie('Wuerflii__Token_Refresh', token_refresh, { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
	Response.json({ token_access })

}
