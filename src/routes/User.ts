

import bcrypt from 'bcrypt'
import express from 'express'
const router = express.Router()

import { isBoolean, isString, isInt } from '../IsDataType.js'
import { filter__user } from '../Filter_DatabaseJSON.js'
import { handle_error } from '../handle_error.js'
import { prisma } from '../index.js'
import { 
	NAME__REGEX, 
	PASSWORD__REGEX, 

	REFRESH_TOKEN_SAMESITE, 
	REFRESH_TOKEN_SECURE, 
} from '../utils.js'
import { Enum___List__Month, Enum___Statistics__View, Enum___Users___View__Sessions } from '../../generated/prisma/index.js'
import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'





router.get('', (req, res) => {

	const { UserID } = req

	prisma.users.findUnique({ where: { id: UserID } }).then(user => {

		if(!user) return res.status(404).send('User not found.')

		res.json(filter__user(user))

	}).catch(async err => {
		await handle_error(res, err, 'GET /user')
	})

})

router.patch('', async (req, res) => {

	const { UserID } = req
	const { 
		Name, 
		Password, 
		DarkMode, 

		Show__Session_Names, 
		Show__Session_Date, 
		View__Sessions, 
		View__Sessions_Desc, 

		Statistics__View, 
		Statistics__View_Month, 
		Statistics__View_Year, 
	} = req.body


	if(Name && !isString(Name))																												return res.status(400).send('Name invalid.')
	if(Password && !isString(Password))																										return res.status(400).send('Password invalid.')
	if(DarkMode !== undefined && !isBoolean(DarkMode))																						return res.status(400).send('DarkMode invalid.')

	if(Show__Session_Names !== undefined && !isBoolean(Show__Session_Names)) 																return res.status(400).send('Show__Session_Names invalid.')
	if(Show__Session_Date !== undefined && !isBoolean(Show__Session_Date)) 																	return res.status(400).send('Show__Session_Date invalid.')
	if(View__Sessions && !isString(View__Sessions) && !Object.values(Enum___Users___View__Sessions).includes(View__Sessions)) 				return res.status(400).send('View__Sessions invalid.')
	if(View__Sessions_Desc !== undefined && !isBoolean(View__Sessions_Desc)) 																return res.status(400).send('View__Sessions_Desc invalid.')

	if(Statistics__View && (!isString(Statistics__View) || !Object.values(Enum___Statistics__View).includes(Statistics__View)))				return res.status(400).send('Statistics__View invalid.')
	if(Statistics__View_Month && (!isInt(Statistics__View_Month) || !Object.values(Enum___List__Month).includes(Statistics__View_Month)))	return res.status(400).send('Statistics__View_Month invalid.')
	if(Statistics__View_Year && !isInt(Statistics__View_Year)) 																				return res.status(400).send('Statistics__View_Year invalid.')


	try {
		await prisma.$transaction(async (tx) => {
	
			const user = await tx.users.findUnique({ where: { id: UserID } })
			if(!user) throw new Custom__Handled_Error('User not found.', 404)
			
	
			interface interface__json_update {
				Name?:						string
				Password?:					string
				DarkMode?:					boolean

				Show__Session_Names?:		boolean
				Show__Session_Date?:		boolean
				
				View__Sessions?:			Enum___Users___View__Sessions
				View__Sessions_Desc?:		boolean
	
				Statistics__View?:			Enum___Statistics__View
				Statistics__View_Month?:	Enum___List__Month
				Statistics__View_Year?:		number
			}
			const json_update: interface__json_update = {
				DarkMode, 
	
				Show__Session_Names, 
				Show__Session_Date, 
				
				View__Sessions, 
				View__Sessions_Desc, 
	
				Statistics__View, 
				Statistics__View_Month, 
				Statistics__View_Year, 
			}
	
			if(Name) {
	
				if(!(new RegExp(NAME__REGEX)).test(Name)) throw new Custom__Handled_Error('Name invalid.', 400)
	
				const already_existing_user = await tx.users.findUnique({ where: { Name } })
				if(already_existing_user) throw new Custom__Handled_Error('Username already taken.', 409)
	
				json_update.Name = Name
	
			} 
			
			if(Password) {
	
				if(!(new RegExp(PASSWORD__REGEX)).test(Password)) throw new Custom__Handled_Error('Password invalid.', 400)
	
				const hashedPassword = await bcrypt.hash(Password, 10)
				json_update.Password = hashedPassword
	
			}
	
			await tx.users.update({ 
				where: { id: UserID },
				data: {...json_update} 
			})
	
			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'PATCH /user')
	}

})

router.delete('', async (req, res) => {

	const { UserID } = req

	try {
		await prisma.$transaction(async (tx) => {
	
	
			// __________________________________________________ User __________________________________________________
	
			const user = await tx.users.findUnique({
				where: { id: UserID },
				include: { 
					List___Association__Users_And_Sessions: true 
				}
			})
	
			if(!user) throw new Custom__Handled_Error('User not found.', 404)
	
	
			// __________________________________________________ Remove all sessions __________________________________________________
			
			for(const session of user.List___Association__Users_And_Sessions) {
	
				await tx.final_Scores.deleteMany({
				where: {
					List___Association__Players_And_FinalScores_And_Sessions: {
						some: {
							SessionID: session.id
						}
					}
				}
			})

			await tx.players.deleteMany({
				where: {
					Association__Sessions_And_Players_And_Table_Columns: {
						SessionID: session.id
					}
				}
			})

			await tx.sessions.delete({ where: { id: session.id } })
	
			}
	
			await tx.users.delete({ where: { id: UserID } })
	
			res.clearCookie('Wuerflii__Refresh_Token', { httpOnly: true, sameSite: REFRESH_TOKEN_SAMESITE, secure: REFRESH_TOKEN_SECURE })
			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'DELETE /user')
	}

})





export default router
