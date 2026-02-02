

import fs 					from 'fs'
import path 				from 'path'
import YAML 				from 'yamljs'
import { fileURLToPath } 	from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const packageJsonPath = path.join(__dirname, '../package.json')
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))


const openapiPath = path.join(__dirname, './openapi.yaml')
const swaggerDocument = YAML.load(openapiPath)


swaggerDocument.info.version = pkg.version

export default swaggerDocument
