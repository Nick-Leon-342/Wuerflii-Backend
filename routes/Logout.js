

const express = require('express')
const router = express.Router()
const { Users } = require('../models')





//__________________________________________________HandleRefreshToken__________________________________________________

router.delete('/', async (req, res) => {

    const cookies = req.cookies
	if (!cookies?.RefreshToken) return res.sendStatus(204)				//check for cookies and check for cookies with 'RefreshToken' properties (name of cookie)	-->since there is no RefreshToken, the logout request is finished
	const refreshToken = cookies.RefreshToken

	const user = await Users.findOne({ where: { RefreshToken: refreshToken } })

	//there is no user with that refreshtoken, therefore, the Refreshtoken cookie will be cleared
	if(!user) {
		res.clearCookie('RefreshToken', { httpOnly: true, sameSite:'None', maxAge: 24 * 60 * 60 * 1000, secure: true })
		return res.sendStatus(204)
	}

	//delete RefreshToken from user
	const updatedRefreshToken = { RefreshToken: '' }
	await Users.update(updatedRefreshToken, { where: { RefreshToken: refreshToken } })
	
	res.clearCookie('RefreshToken', { httpOnly: true, sameSite:'None', maxAge: 24 * 60 * 60 * 1000, secure: true })
	res.sendStatus(204)

})





module.exports = router
