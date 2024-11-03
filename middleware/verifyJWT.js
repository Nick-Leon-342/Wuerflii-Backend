

const jwt = require('jsonwebtoken')
require('dotenv').config()





module.exports = function verifyJWT(req, res, next) {

	const authHeader = req.headers['authorization']
	if (!authHeader) return res.status(401).send('No token')

	const token = authHeader.split(' ')[1]
	jwt.verify(
		token,
		process.env.ACCESS_TOKEN_SECRET,
		(err, decoded) => {
			if (err) return res.status(403).send('Invalid token')
			req.UserID = decoded.id
			next()
		}
	)

}
