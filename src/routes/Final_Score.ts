

import express from 'express'
const router = express.Router()

import { filter____list___association__players_and_finalscores_and_sessions, filter__final_score } from '../Filter_DatabaseJSON.js'
import type { Association__Users_And_Sessions, Prisma } from '../../generated/prisma/index.js'
import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'
import { List__Months_Enum } from '../types/Type___List__Months.js'
import { MAX_FINALSCORES_LIMIT } from '../utils.js'
import { handle_error } from '../handle_error.js'
import { prisma } from '../index.js'





router.get('', async (req, res) => {

	const { UserID }	= req
	const SessionID		= Number(req.query.session_id)
	const FinalScoreID	= Number(req.query.finalscore_id)

	if(isNaN(SessionID)		|| SessionID <= 0	) return res.status(400).send('SessionID invalid.')
	if(isNaN(FinalScoreID)	|| FinalScoreID <= 0) return res.status(400).send('FinalScoreID invalid.')


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
									List___Association__Players_And_FinalScores_And_Sessions: {
										where: { Final_ScoreID: FinalScoreID },
										include: {
											Final_Score: true
										}
									}
								}
							}
						}
					}
				}
			})
	
			if(!user											) throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0]	) throw new Custom__Handled_Error('Session not found.', 404)
				
			const session = user.List___Association__Users_And_Sessions[0].Session
			if(!session.List___Association__Players_And_FinalScores_And_Sessions[0]	) throw new Custom__Handled_Error('Final_Score not found.', 404)
			const final_score = session.List___Association__Players_And_FinalScores_And_Sessions[0].Final_Score	
	
			res.json({
				...filter__final_score(final_score), 
				...filter____list___association__players_and_finalscores_and_sessions(session.List___Association__Players_And_FinalScores_And_Sessions)
			})

		})
	} catch(err) {
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'GET /finalscore')
		}
	}

})

router.get('/all', async (req, res) => {

	const { UserID } 	= req
	const SessionID 	= Number(req.query.session_id)
	const offset_block 	= Number(req.query.offset_block)

	if(isNaN(SessionID) || SessionID <= 0)	return res.status(400).send('SessionID invalid.')
	if(isNaN(offset_block))					return res.status(400).send('Offset invalid.')


	try {
		await prisma.$transaction(async (tx) => {

			// __________________________________________________ User __________________________________________________
	
			const user = await tx.users.findUnique({
				where: { id: UserID }, 
				include: {
					List___Association__Users_And_Sessions: {
						where: { SessionID: SessionID }, 
						include: { 
							Session: true 
						}
					}
				}
			})
	
			if(!user)											throw new Custom__Handled_Error('User not found.', 404)
			if(!user.List___Association__Users_And_Sessions[0])	throw new Custom__Handled_Error('Session not found.', 404)
	
			
			// __________________________________________________ Get all finalscores __________________________________________________
	
			const list_finalscores = await tx.final_Scores.findMany({
				where: getQuery(user.List___Association__Users_And_Sessions[0]),  
				orderBy: { End: 'desc' }, 
				skip: (offset_block - 1) * MAX_FINALSCORES_LIMIT,
				take: MAX_FINALSCORES_LIMIT, 
				include: {
					List___Association__Players_And_FinalScores_And_Sessions: {
						where: { SessionID: SessionID }, 
						include: {
							Final_Score: true
						}
					}
				}, 
			}) 
	
			res.json({ 
				Has_More:	list_finalscores.length > offset_block * MAX_FINALSCORES_LIMIT, 
				List:		list_finalscores.map(final_score => ({
					...filter__final_score(final_score), 
					...filter____list___association__players_and_finalscores_and_sessions(final_score.List___Association__Players_And_FinalScores_And_Sessions)
				})), 
			})

		})
	} catch(err) {
		if(err instanceof Custom__Handled_Error) {
			res.status(err.status_code).send(err.message)
		} else {
			await handle_error(res, err, 'GET /finalscore/all')
		}
	}

})

function getQuery(association__users_and_sessions: Association__Users_And_Sessions): Prisma.Final_ScoresWhereInput {
	
	const year = association__users_and_sessions.View__Year
	const month = List__Months_Enum.indexOf(association__users_and_sessions.View__Month)
	
	const startOfYear	= new Date(Date.UTC(year, 0, 1))
	const endOfYear		= new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999))

	const startOfMonth	= new Date(Date.UTC(year, month, 1, 0, 0, 0))
	const endOfMonth	= new Date(Date.UTC(year, month + 1, 0, 23, 59, 59, 999))

	switch(association__users_and_sessions.View) {
		case 'SHOW__MONTH':
			return { 
				End: { 
					gte: startOfMonth, 
					lte: endOfMonth 
				} 
			}

		case 'SHOW__YEAR':
			return { 
				End: { 
					gte: startOfYear, 
					lte: endOfYear 
				} 
			}

		case 'SHOW__CUSTOM_DATE':
			return { End: { gte: new Date(association__users_and_sessions.View__Custom_Date) } }

		default: 
			return {}
	}

}





export default router
