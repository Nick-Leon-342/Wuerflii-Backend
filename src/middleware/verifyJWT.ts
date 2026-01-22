

import jwt, { type JwtPayload } from 'jsonwebtoken'

import { ACCESS_TOKEN_SECRET } from '../utils.js'





interface JWT_Payload__Token_Access extends JwtPayload {
	id: string
}

export default function verifyJWT(req, res, next) {

	const authHeader = req.headers['authorization']
	if (!authHeader) return res.status(401).send('No token')

	const token = authHeader.split(' ')[1]
	let decoded: JWT_Payload__Token_Access
	try {

		decoded = jwt.verify(
			token, 
			ACCESS_TOKEN_SECRET, 
		) as JWT_Payload__Token_Access

	} catch { return res.status(403).send('Invalid token.') }
	req.UserID = decoded.id
	next()

}
