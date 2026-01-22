

import jwt, { type JwtPayload } from 'jsonwebtoken'
import express from 'express'
const router = express.Router()
import { prisma } from '../index.js'
import { 
	ACCESS_TOKEN_SECRET, 
	REFRESH_TOKEN_SECRET, 
	ACCESS_TOKEN_MAX_AGE_IN_MINUTES, 
} from '../utils.js'





// __________________________________________________ Handle Token_Refresh __________________________________________________

interface JWT_Payload__Token_Refresh extends JwtPayload {
	id: string
}

router.get('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.Wuerflii__Refresh_Token) return res.status(401).send('No cookie found.')				//check for cookies and check for cookies with 'Token_Refresh' properties (name of cookie)
	const token_refresh = cookies.Wuerflii__Refresh_Token

	const user = await prisma.users.findUnique({ 
		where: { 
			Token_Refresh:	token_refresh, 
		} 
	})
	if(!user) return res.status(403).send('User not found.')

	let decoded: JWT_Payload__Token_Refresh
	try {

		decoded = jwt.verify(
			token_refresh, 
			REFRESH_TOKEN_SECRET, 
		) as JWT_Payload__Token_Refresh

	} catch { return res.status(403).send('Invalid token.') }
	
	if(!decoded || user.id.toString() !== decoded.id) return res.status(403).send('User mismatch.')
	
	const token_access = jwt.sign(
		{ 'id': decoded.id },
		ACCESS_TOKEN_SECRET,
		{ expiresIn: `${ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` || '15m' }
	)

	res.json({ token_access })

})





export default router
