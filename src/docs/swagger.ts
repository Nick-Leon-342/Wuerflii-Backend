

import SwaggerParser from '@apidevtools/swagger-parser'
import fs 					from 'fs'
import path 				from 'path'
import { fileURLToPath } 	from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const packageJsonPath = path.join(__dirname, '../../package.json')
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
const swaggerPath = path.join(__dirname, './swagger.json')

export default async function getSwaggerDocument() {
	const document = await SwaggerParser.bundle(swaggerPath)
	document.info.version = pkg.version
	return document
}
