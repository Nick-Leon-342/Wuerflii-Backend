

import jwt, { type JwtPayload } from 'jsonwebtoken'
import { prisma } from '../index.js'
import express from 'express'
const router = express.Router()
import { 
	ACCESS_TOKEN_SECRET, 
	REFRESH_TOKEN_SECRET, 
	ACCESS_TOKEN_MAX_AGE_IN_MINUTES, 
} from '../utils.js'





// __________________________________________________ Handle Refresh_Token __________________________________________________

interface JWT_Payload__Refresh_Token extends JwtPayload {
	id:		number
	iat:	number
	exp:	number
}

router.get('/', async (req, res) => {

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
