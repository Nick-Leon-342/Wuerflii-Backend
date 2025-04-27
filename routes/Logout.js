

const express = require('express')
const router = express.Router()

const { Users } = require('../models')
const { REFRESH_TOKEN_SECURE, REFRESH_TOKEN_SAMESITE, REFRESH_TOKEN_MAX_AGE_IN_MINUTES } = require('../utils')





router.delete('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.Wuerflii_RefreshToken) return res.sendStatus(204)				// check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)	-->since there is no RefreshToken, the logout request is finished
	const refreshToken = cookies.Wuerflii_RefreshToken

	const user = await Users.findOne({ where: { RefreshToken: refreshToken } })

	// there is no user with that refreshtoken, therefore, the Refreshtoken cookie will be cleared
	if(!user) {
		res.clearCookie('Wuerflii_RefreshToken', { httpOnly: true, sameSite: process.env.REFRESH_TOKEN_SAMESITE || 'None', maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
		return res.sendStatus(204)
	}

	// delete RefreshToken
	await user.update({ RefreshToken: '' }).catch(err => {
		console.error('DELETE /logout\n', err)
		return res.sendStatus(500)
	})
	
	res.clearCookie('Wuerflii_RefreshToken', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, maxAge: REFRESH_TOKEN_MAX_AGE_IN_MINUTES, secure: REFRESH_TOKEN_SECURE })
	res.sendStatus(204)

})





module.exports = router
