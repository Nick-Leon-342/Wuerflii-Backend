

const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const jwt = require('jsonwebtoken')





//__________________________________________________HandleRefreshToken__________________________________________________

router.get('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.Kniffel_RefreshToken) return res.sendStatus(401)				//check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)
	const refreshToken = cookies.Kniffel_RefreshToken

	const user = await Users.findOne({ where: { RefreshToken: refreshToken } })
	if(!user) return res.sendStatus(403)

	jwt.verify(
		refreshToken, 
		process.env.REFRESH_TOKEN_SECRET, 
		(err, decoded) => {
			if(err || user.id !== decoded.id) return res.sendStatus(403)
			const accessToken = jwt.sign(
				{ 'id': decoded.id },
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: '10s' }
			)
			res.json({ accessToken })
		}
	)

})





module.exports = router
