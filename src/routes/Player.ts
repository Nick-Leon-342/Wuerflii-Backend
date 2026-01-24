

import express from 'express'
const router = express.Router()

import { isInt, isBoolean } from '../IsDataType.js'
import { prisma } from '../index.js'
import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'
import { handle_error } from '../handle_error.js'





router.patch('', async (req, res) => {

	const { UserID } = req
	const { SessionID, PlayerID, Gnadenwurf_Used } = req.body

	if(!SessionID || !isInt(SessionID)	) return res.status(400).send('SessionID invalid')
	if(!isBoolean(Gnadenwurf_Used)		) return res.status(400).send('Gnadenwurf_Used invalid.')

	
	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: SessionID }, 
						include: {
							Session: {
								include: {
									List___Association__Sessions_And_Players_And_Table_Columns: {
										where: { PlayerID: PlayerID }
									}
								}
							}
						}
					}
				}
			})
	
			if(!user																									) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]															) throw new Custom__Handled_Error('Session not found.', 404)
			if(user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns.length === 0) throw new Custom__Handled_Error('Player not found.', 404)
	
	
			// __________________________________________________ Update Gnadenwurf __________________________________________________
	
			await tx.association__Sessions_And_Players_And_Table_Columns.update({ 
				where: {
					PlayerID, 
					SessionID, 
				}, 
				data: { Gnadenwurf_Used: Gnadenwurf_Used }
			})
	
			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'PATCH /player')
	}

})





export default router
