

import 'dotenv/config'
import { defineConfig } from 'prisma/config'

const { 
	DB_TYPE, 
	POSTGRES_USER, 
	POSTGRES_PASSWORD, 
	POSTGRES_HOST, 
	POSTGRES_PORT, 
	POSTGRES_DB 
} = process.env

if(
	!POSTGRES_USER		||
	!POSTGRES_PASSWORD	||
	!POSTGRES_DB		||
	!POSTGRES_HOST		||
	!POSTGRES_PORT		||
	!DB_TYPE
) console.error('Missing database environment variables!')





export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations',
	},
	datasource: {
		url: `${DB_TYPE}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`, 
	},
})
