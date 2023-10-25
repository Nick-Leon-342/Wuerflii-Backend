

const express = require('express')
const router = express.Router()
const { Users } = require('../models')




//__________________________________________________HandleRefreshToken__________________________________________________

router.delete('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.Kniffel_RefreshToken) return res.sendStatus(204)				//check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)	-->since there is no RefreshToken, the logout request is finished
	const refreshToken = cookies.Kniffel_RefreshToken

	const user = await Users.findOne({ where: { RefreshToken: refreshToken } })
	const maxAge = (parseInt(process.env.REFRESH_TOKEN_MAX_AGE_IN_MINUTES) || 24 * 60) * 60 * 1000

	//there is no user with that refreshtoken, therefore, the Refreshtoken cookie will be cleared
	if(!user) {
		res.clearCookie('Kniffel_RefreshToken', { httpOnly: true, sameSite: process.env.REFRESH_TOKEN_SAMESITE || 'None', maxAge: maxAge, secure: process.env.REFRESH_TOKEN_SECURE === 'true' || true })
		return res.sendStatus(204)
	}

	//delete RefreshToken from user
	const updatedRefreshToken = { RefreshToken: '' }
	await Users.update(updatedRefreshToken, { where: { RefreshToken: refreshToken } })
	
	res.clearCookie('Kniffel_RefreshToken', { httpOnly: true, sameSite: process.env.REFRESH_TOKEN_SAMESITE || 'None', maxAge: maxAge, secure: process.env.REFRESH_TOKEN_SECURE === 'true' || true })
	res.sendStatus(204)

})





module.exports = router
