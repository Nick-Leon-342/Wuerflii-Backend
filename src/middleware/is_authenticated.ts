

import type { Request, Response, NextFunction } from 'express'





declare global {
	namespace Express {
		interface Request {
			UserID:	number
		}
	}
}

export default function is_authenticated(
	req:	Request, 
	res:	Response, 
	next:	NextFunction, 
): void {

	if(req.session && req.session.userid) {
		req.UserID = req.session.userid
		return next()
	}
	res.status(401).send('Not logged in.')

}
