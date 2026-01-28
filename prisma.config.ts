

import 'dotenv/config'
import { defineConfig } from 'prisma/config'

const { 
	DB_TYPE, 
	DB_USERNAME, 
	DB_PASSWORD, 
	DB_HOST, 
	DB_PORT, 
	DB_DATABASE 
} = process.env

if(
	!DB_USERNAME	||
	!DB_PASSWORD	||
	!DB_DATABASE	||
	!DB_HOST		||
	!DB_PORT		||
	!DB_TYPE
) console.error('Missing database environment variables!')





export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations',
	},
	datasource: {
		url: `${DB_TYPE}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, 
	},
})
