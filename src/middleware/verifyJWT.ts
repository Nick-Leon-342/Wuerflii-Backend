

import jwt, { type JwtPayload } from 'jsonwebtoken'

import { ACCESS_TOKEN_SECRET } from '../utils.js'
import type { Request, Response, NextFunction } from 'express'





declare global {
	namespace Express {
		interface Request {
			UserID:	number
		}
	}
}

interface JWT_Payload__Token_Access extends JwtPayload {
	id: string
}

export default function verifyJWT(
	req:	Request, 
	res:	Response, 
	next:	NextFunction, 
): void {

	const authHeader = req.headers['authorization']
	if(!authHeader) {
		res.status(401).send('No token.')
		return 
	}

	const token = authHeader.split(' ')[1]
	let decoded: JWT_Payload__Token_Access
	try {

		decoded = jwt.verify(
			token || '', 
			ACCESS_TOKEN_SECRET, 
		) as unknown as JWT_Payload__Token_Access

		if(!decoded || typeof decoded !== 'object' || !decoded.id || isNaN(+decoded.id) || +decoded.id === 0) {
			res.status(403).send('Token payload is missing id.')
			return
		}

		req.UserID = +decoded.id
		next()

	} catch(err) { 
		res.status(403).send('Invalid token.')
		return 
	}

}
