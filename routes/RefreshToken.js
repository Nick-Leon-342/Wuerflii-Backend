

const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const jwt = require('jsonwebtoken')





// __________________________________________________ Handle RefreshToken __________________________________________________

router.get('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.Kniffel_RefreshToken) return res.status(401).send('No cookie found.')				//check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)
	const refreshToken = cookies.Kniffel_RefreshToken

	const user = await Users.findOne({ where: { RefreshToken: refreshToken } })
	if(!user) return res.status(403).send('User not found.')

	jwt.verify(
		refreshToken, 
		process.env.REFRESH_TOKEN_SECRET, 
		(err, decoded) => {
			if(err || user.id !== decoded.id) return res.status(403).send('Error occured')
			const accessToken = jwt.sign(
				{ 'id': decoded.id },
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: `${process.env.ACCESS_TOKEN_MAX_AGE_IN_MINUTES}m` || '15m' }
			)
			res.json({ accessToken })
		}
	)

})





module.exports = router
