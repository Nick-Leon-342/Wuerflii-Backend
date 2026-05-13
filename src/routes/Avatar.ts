

import express from 'express'
const router = express.Router()

import { Custom__Handled_Error } from '../types/Class__Custom_Handled_Error.js'
import { UPLOAD_PATH_OF_AVATARS } from '../utils.js'
import { handle_error } from '../handle_error.js'
import { fileTypeFromBuffer } from 'file-type'
import { prisma } from '../index.js'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

const upload = multer({ dest: UPLOAD_PATH_OF_AVATARS })





router.get('', async (req, res) => {

	const { UserID } = req

	
	try {
		await prisma.$transaction(async (tx) => {


			// Validate user
			const user = await tx.users.findUnique({ where: { id: UserID } })
			if(!user) throw new Custom__Handled_Error(404, 'User not found.')
			if(!user.Avatar) throw new Custom__Handled_Error(400, 'User has no avatar.')

			const file_path = path.join(process.cwd(), UPLOAD_PATH_OF_AVATARS, user.Avatar)

			if(fs.existsSync(file_path)) {
				res.sendFile(file_path)
			} else {
				await tx.users.update({
					where: { id: UserID }, 
					data: {
						Avatar: null, 
					}
				})
				res.status(404).send('Avatar not found.')
			}


		})
	} catch(err) {
		await handle_error(res, err, 'GET /avatar')
	}

})

router.post('', upload.single('avatar'), async (req, res) => {

	const { UserID } = req

	if(!req.file) return res.status(400).send('Upload missing.')
	const file = req.file
	const buffer = fs.readFileSync(file.path)
	const type = await fileTypeFromBuffer(buffer)

	const list__allowed_files = [ 'jpg', 'jpeg', 'png' ]

	if(!type || !list__allowed_files.includes(type.ext)) {
		fs.unlinkSync(file.path)
		return res.status(400).send('Invalid image format.')
	}

	
	try {
		await prisma.$transaction(async (tx) => {


			// Validate user
			const user = await tx.users.findUnique({ where: { id: UserID } })
			if(!user) throw new Custom__Handled_Error(404, 'User not found.')


			await tx.users.update({
				where: { id: UserID }, 
				data: {
					Avatar: file.filename
				}
			})
				
			if(user.Avatar && fs.existsSync(UPLOAD_PATH_OF_AVATARS + user.Avatar)) fs.unlinkSync(UPLOAD_PATH_OF_AVATARS + user.Avatar)


			res.send(file.filename)


		})
	} catch(err) {
		fs.unlinkSync(file.path)
		await handle_error(res, err, 'POST /avatar')
	}

})





export default router
