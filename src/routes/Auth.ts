

import express from 'express'
const router = express.Router()

import bcrypt from 'bcrypt'
import send_token from './Send_Token.js'
import { isString } from '../IsDataType.js'
import { handle_error } from '../handle_error.js'

import { prisma } from '../index.js'

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
} from '../utils.js'
import { List__Months } from '../types/Type___List__Months.js'
import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'





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

	const { 
		Name, 
		Password 
	} = req.body

	if(!Name && !isString(Name)			) return res.status(400).send('Name invalid.')
	if(!Password && !isString(Password)	) return res.status(400).send('Password invalid.')


	try {
		await prisma.$transaction(async (tx) => {

			// ____________________ User ____________________

			const user = await tx.users.findUnique({ where: { Name: Name } })

			if(!user || !(await bcrypt.compare(Password, user.Password)))
				throw new Custom__Handled_Error('Wrong credentials!', 409)


			// ____________________ Response ____________________

			await send_token({
				UserID: 			user.id, 
				res:				res, 
				Transaction_Prisma:	tx, 
			})

		})	
	} catch(err) {
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'POST /auth/login')
		}
	}

})

router.post('/registration', async (req, res) => {
	
	const { Name, Password } = req.body
	
	if(!Name || !(new RegExp(NAME__REGEX)).test(Name)) return res.status(400).send('Name invalid.')
	if(!Password || !(new RegExp(PASSWORD__REGEX)).test(Password)) return res.status(400).send('Password invalid.')


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
					Statistics__View_Month:	List__Months[new Date().getMonth()] || 'JANUARY', 
					Statistics__View_Year:	new Date().getFullYear(), 
				}
			})
	
	
			// ____________________ Response ____________________
	
			await send_token({
				UserID:				user.id, 
				res:				res, 
				Transaction_Prisma:	tx, 
			})

		})
	} catch(err) {
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'POST /auth/registration')
		}
	}

})





export default router
