

import { DATABASE_URL } from './src/utils.js'
import { defineConfig } from 'prisma/config'

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations',
	},
	datasource: {
		url: DATABASE_URL,
		// url: 'postgresql://wuerflii-old:mappel342@localhost:5432/wuerflii-old',
	},
})
