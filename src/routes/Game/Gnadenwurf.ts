

import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../../types/Class__Custom_Handled_Error.js'
import { Zod__Gnadenwurf } from '../../types/Zod__Gnadenwurf.js'
import { Zod__Query } from '../../types/Zod__Query..js'
import { handle_error } from '../../handle_error.js'
import { prisma } from '../../index.js'





router.patch('', async (req, res) => {

	// Verify query
	const zod_result__query = Zod__Query.pick({ session_id: true, player_id: true }).safeParse(req.query)
	if(!zod_result__query.success) return res.status(400).send(zod_result__query.error.message)
	const { session_id, player_id } = zod_result__query.data

	// Verify input
	const zod_result = Zod__Gnadenwurf.safeParse(req.body)
	if(!zod_result.success) return res.status(400).send(zod_result.error.message)
	const { Gnadenwurf_Used } = zod_result.data

	const { UserID } = req

	
	try {
		await prisma.$transaction(async (tx) => {

			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: session_id }, 
						include: {
							Session: {
								include: {
									List___Association__Sessions_And_Players_And_Table_Columns: {
										where: { PlayerID: player_id }
									}
								}
							}
						}
					}
				}
			})
	
			if(!user																									) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]															) throw new Custom__Handled_Error('Session not found.', 404)
			if(user.List___Association__Users_And_Sessions[0].Session.List___Association__Sessions_And_Players_And_Table_Columns.length === 0) throw new Custom__Handled_Error('Players not found.', 404)
	
	
			// __________________________________________________ Update Gnadenwurf __________________________________________________
	
			await tx.association__Sessions_And_Players_And_Table_Columns.update({ 
				where: {
					SessionID: session_id, 
					PlayerID: player_id, 
				}, 
				data: { Gnadenwurf_Used: Gnadenwurf_Used }
			})
	
			res.sendStatus(204)

		})
	} catch(err) {
		await handle_error(res, err, 'PATCH /game/gnadenwurf')
	}

})





export default router
