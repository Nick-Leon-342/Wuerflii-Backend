

import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'
import { List__Months_Enum } from '../types/Type___List__Months.js'
import { Zod__User_POST } from '../types/Zod__User.js'
import { handle_error } from '../handle_error.js'
import { prisma } from '../index.js'
import bcrypt from 'bcrypt'

import {
	NAME__MIN_CHARACTER, 
	NAME__MAX_CHARACTER, 
	
	NAME__REGEX, 
	NAME__REGEX_MINMAX, 
	NAME__REGEX_LETTERFIRST, 
	NAME__REGEX_ALLOWEDCHARS, 


	PASSWORD__MIN_CHARACTER, 
	PASSWORD__MAX_CHARACTER, 

	PASSWORD__REGEX, 
	PASSWORD__REGEX_MINMAX, 
	PASSWORD__REGEX_ALLOWEDCHARS, 
	PASSWORD__REGEX_ALLOWEDSYMBOLS,
	DISABLE_REGISTRATION_OF_NEW_USERS,
} from '../utils.js'





router.get('/regex', (_, res) => {

	res.json({
		NAME__MIN_CHARACTER, 
		NAME__MAX_CHARACTER, 
		
		NAME__REGEX, 
		NAME__REGEX_MINMAX, 
		NAME__REGEX_LETTERFIRST, 
		NAME__REGEX_ALLOWEDCHARS, 
	
	
		PASSWORD__MIN_CHARACTER, 
		PASSWORD__MAX_CHARACTER, 
	
		PASSWORD__REGEX, 
		PASSWORD__REGEX_MINMAX, 
		PASSWORD__REGEX_ALLOWEDCHARS, 
		PASSWORD__REGEX_ALLOWEDSYMBOLS, 
	})

})

router.post('/login', async (req, res) => {

	if(DISABLE_REGISTRATION_OF_NEW_USERS) return res.status(409).send('User registration is disabled.')

	const zod_result = Zod__User_POST.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)

	const {
		Name,
		Password, 
	} = zod_result.data


	try {
		await prisma.$transaction(async (tx) => {

			// ____________________ User ____________________

			const user = await tx.users.findUnique({ where: { Name: Name } })

			if(!user || !(await bcrypt.compare(Password, user.Password)))
				throw new Custom__Handled_Error('Wrong credentials!', 409)

			req.session.userid = user.id
			req.session.save(err => {
				if(err) throw new Custom__Handled_Error('Something went wrong while trying to save session.', 500)
				res.sendStatus(200)
			})

		})	
	} catch(err) {
		await handle_error(res, err, 'POST /auth/login')
	}

})

router.post('/registration', async (req, res) => {

	if(DISABLE_REGISTRATION_OF_NEW_USERS) return res.status(409).send('User registration is disabled.')

	const zod_result = Zod__User_POST.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)

	const {
		Name,
		Password, 
	} = zod_result.data


	try {
		await prisma.$transaction(async (tx) => {
	
	
			// ____________________ User ____________________
	
			const tmp__user = await tx.users.findUnique({ where: { Name: Name } })
			if(tmp__user) throw new Custom__Handled_Error('Username already taken.', 409)
		
	
			// ____________________ Hash Password ____________________
	
			const hashedPassword = await bcrypt.hash(Password, 10)
	
	
			// ____________________ Create New User ____________________
	
			const user = await tx.users.create({
				data: {
					Name:					Name,
					DarkMode:				false, 
					Password:				hashedPassword, 
		
					Show__Session_Names:	true, 
					Show__Session_Date:		true, 
					View__Sessions:			'LAST_PLAYED', 
					View__Sessions_Desc: 	true, 
		
					Statistics__View:		'STATISTICS_OVERALL', 
					Statistics__View_Month:	List__Months_Enum[new Date().getMonth()] || 'JANUARY', 
					Statistics__View_Year:	new Date().getFullYear(), 
				}
			})
	
	
			// ____________________ Response ____________________
	
			req.session.userid = user.id
			req.session.save(err => {
				if(err) throw new Custom__Handled_Error('Something went wrong while trying to save session.', 500)
				res.sendStatus(200)
			})

		})
	} catch(err) {
		await handle_error(res, err, 'POST /auth/registration')
	}

})

router.delete('/logout', async (req, res) => {

	req.session.destroy(err => {
		if(err) {
			return res.status(500).send('Encountered error while logging out.')
		}
		res.clearCookie('connect.sid')
		res.status(204).send('Log out successful.')
	})

})





export default router
