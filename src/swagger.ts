

import swaggerJSDoc from 'swagger-jsdoc'
import package_json from '../package.json' with { type: 'json' }

export const swagger__options: swaggerJSDoc.Options = {
	definition: {
		// openapi: '3.1.0', 
		swagger: '2.0', 
		info: {
			title: 'Wuerflii Docs', 
			version: package_json.version, 
		},
		components: {
			securitySchemas: {
				brearerAuth: {
					type: 'http', 
					scheme: 'brearer', 
					brearerFormat: 'JWT', 
				}
			}
		},
		security: [
			{
				brearerAuth: [], 
			}
		]
	},
	apis: [ './routes/*.ts' ]
}
