

import express from 'express'
const router = express.Router()

import bcrypt from 'bcrypt'
import send_token from './Send_Token.js'
import { isString } from '../IsDataType.js'
import { handle_error } from '../handle_error.js'

import { prisma } from '../index.js'

import {
	NAME_MIN_CHARACTER, 
	NAME_MAX_CHARACTER, 
	
	NAME_REGEX, 
	NAME_REGEX_MINMAX, 
	NAME_REGEX_LETTERFIRST, 
	NAME_REGEX_ALLOWEDCHARS, 


	PASSWORD_MIN_CHARACTER, 
	PASSWORD_MAX_CHARACTER, 

	PASSWORD_REGEX, 
	PASSWORD_REGEX_MINMAX, 
	PASSWORD_REGEX_ALLOWEDCHARS, 
	PASSWORD_REGEX_ALLOWEDSYMBOLS, 
} from '../utils.js'
import { List__Months } from '../types/Type___List__Months.js'





router.get('/regex', (_, res) => {

	res.json({
		NAME_MIN_CHARACTER, 
		NAME_MAX_CHARACTER, 
		
		NAME_REGEX, 
		NAME_REGEX_MINMAX, 
		NAME_REGEX_LETTERFIRST, 
		NAME_REGEX_ALLOWEDCHARS, 
	
	
		PASSWORD_MIN_CHARACTER, 
		PASSWORD_MAX_CHARACTER, 
	
		PASSWORD_REGEX, 
		PASSWORD_REGEX_MINMAX, 
		PASSWORD_REGEX_ALLOWEDCHARS, 
		PASSWORD_REGEX_ALLOWEDSYMBOLS, 
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

			const user = await tx.users.findUnique({ where: { Name } })

			if(!user || !(await bcrypt.compare(Password, user.Password)))
				throw new Error('Wrong credentials!')


			// ____________________ Response ____________________

			await send_token({
				UserID: 			user.id, 
				Response:			res, 
				Transaction_Prisma:	tx, 
			})

		})	
	} catch(err) {
		// TODO check if this works as expected
		if(err === 'Wrong credentials!') {
			res.status(409).send('Wrong credentials!')
		} else {
			await handle_error(res, err, 'POST /auth/login')
		}
	}

})

router.post('/registration', async (req, res) => {
	
	const { Name, Password } = req.body
	
	if(!Name || !(new RegExp(NAME_REGEX)).test(Name)) return res.status(400).send('Name invalid.')
	if(!Password || !(new RegExp(PASSWORD_REGEX)).test(Password)) return res.status(400).send('Password invalid.')


	try {
		await prisma.$transaction(async (tx) => {
	
	
			// ____________________ User ____________________
	
			const tmp__user = await prisma.users.findUnique({ where: { Name: Name } })
			if(tmp__user) throw new Error('Username already taken.')
		
	
			// ____________________ Hash Password ____________________
	
			const hashedPassword = await bcrypt.hash(Password, 10)
	
	
			// ____________________ Create New User ____________________
	
			const user = await prisma.users.create({
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
				Response:			res, 
				Transaction_Prisma:	tx, 
			})

		})
	} catch(err) {
		// TODO check if this works as expected
		if(err === 'Username already taken.') {
			res.status(409).send('Username already taken.')
		} else {
			await handle_error(res, err, 'POST /auth/registration')
		}
	}

})





export default router
