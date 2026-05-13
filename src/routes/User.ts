

import bcrypt from 'bcrypt'
import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'
import { filter__user } from '../Filter_DatabaseJSON.js'
import { Zod__User_PATCH } from '../types/Zod__User.js'
import { handle_error } from '../handle_error.js'
import { prisma } from '../index.js'





router.get('', (req, res) => {

	const { UserID } = req

	prisma.users.findUnique({ where: { id: UserID } }).then(user => {

		if(!user) throw new Custom__Handled_Error(404, 'User not found.')

		res.json(filter__user(user))

	}).catch(async err => {
		await handle_error(res, err, 'GET /user')
	})

})

router.patch('', async (req, res) => {

	const { UserID } = req
	
	const zod_result = Zod__User_PATCH.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)

	const { 
		Name, 
		Password, 
		...otherData
	} = zod_result.data


	try {
		await prisma.$transaction(async (tx) => {
	
			const user = await tx.users.findUnique({ where: { id: UserID } })
			if(!user) throw new Custom__Handled_Error(404, 'User not found.')
			
	
			const json_update: any = { ...otherData }
	
			if(Name) {
	
				const already_existing_user = await tx.users.findUnique({ where: { Name } })
				if(already_existing_user) throw new Custom__Handled_Error(409, 'Username already taken.')
	
				json_update.Name = Name
	
			} 
			
			if(Password) json_update.Password = await bcrypt.hash(Password, 10)
	

			await tx.users.update({ 
				where: { id: UserID },
				data: json_update
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
	
			if(!user) throw new Custom__Handled_Error(404, 'User not found.')

	
			// __________________________________________________ Remove all sessions __________________________________________________

			const list___association__users_and_sessions = await tx.association__Users_And_Sessions.findMany({
				where: 	{ UserID: 		UserID }, 
				select: { SessionID: 	true }, 
			})
			const list__session_ids = list___association__users_and_sessions.map(association => association.SessionID)

			if(list__session_ids.length > 0) {

				const list___association__players_and_finalscores_and_sessions = await tx.association__Players_And_FinalScores_And_Sessions.findMany({
					where: { SessionID: { in: list__session_ids } }, 
					select: { 
						Final_ScoreID: 	true, 
						PlayerID: 		true, 
					}
				})
				const list__finalscore_ids = [ ...new Set(list___association__players_and_finalscores_and_sessions.map(association => association.Final_ScoreID)) ]
				const list__player_ids = [ ...new Set(list___association__players_and_finalscores_and_sessions.map(association => association.PlayerID)) ]

				await tx.final_Scores.deleteMany({ where: { id: { in: list__finalscore_ids } }})
				await tx.players.deleteMany({ where: { id: { in: list__player_ids } }})

				await tx.sessions.deleteMany({ where: { id: { in: list__session_ids } } })

			}
	
			await tx.users.delete({ where: { id: UserID } })
	
			req.session.destroy(err => {
				if(err) {
					throw new Custom__Handled_Error(500, 'Encountered error while deleting session cookie.')
				}
				res.clearCookie('connect.sid')
				res.status(204).send('Deleted user successfully.')
			})

		})
	} catch(err) {
		await handle_error(res, err, 'DELETE /user')
	}

})





export default router
