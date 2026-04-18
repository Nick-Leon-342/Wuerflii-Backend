

import * as dotenv from 'dotenv'
dotenv.config()

import { Enum___Cookie_Samesite } from './types/Enum___Cookie__Samesite.js'





export const isProd			: boolean	= process.env.NODE_ENV === 'production'
export const PORT			: number	= isProd ? 5000 : +(process.env.PORT || 5000)
export const ALLOWED_ORIGIN	: string	= process.env.DOMAIN || 'http://localhost:5173'

export const DISABLE_REGISTRATION_OF_NEW_USERS: boolean = process.env.DISABLE_REGISTRATION_OF_NEW_USERS === 'true'





// ____________________ Database ____________________

const {
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	POSTGRES_DB,
	POSTGRES_HOST,
	POSTGRES_PORT,
	DB_TYPE, 
} = process.env

if(
	!POSTGRES_USER		||
	!POSTGRES_PASSWORD	||
	!POSTGRES_DB		||
	!POSTGRES_HOST		||
	!POSTGRES_PORT		||
	!DB_TYPE
) throw new Error('Missing database environment variables.')

export const DATABASE_URL	: string	= `${DB_TYPE}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`

export const COLOR__REGEX: RegExp = /^#([0-9A-Fa-f]{3}){1,2}$/





// ____________________ Redis ____________________

if(!process.env.REDIS__PASSWORD) throw new Error('Missing REDIS__PASSWORD.')

export const REDIS__HOST: 		string = process.env.REDIS__HOST || 'localhost'
export const REDIS__PORT: 		number = +(process.env.REDIS__PORT || 6379)
export const REDIS__PASSWORD:	string = process.env.REDIS__PASSWORD





// ____________________ Session ____________________

if(!process.env.SESSION__SECRET) throw new Error('Missing SESSION__SECRET.')
export const SESSION__SECRET	: string	= process.env.SESSION__SECRET

export const COOKIE__SECURE 	: boolean	= process.env.COOKIE__SECURE === 'true' 		|| false
export const COOKIE__SAMESITE 	: Enum___Cookie_Samesite	
					= Object.values(Enum___Cookie_Samesite).includes(process.env.COOKIE__SAMESITE as Enum___Cookie_Samesite)
					? (process.env.COOKIE__SAMESITE as Enum___Cookie_Samesite)
					: Enum___Cookie_Samesite.none





// ____________________ User ____________________

export const NAME__MIN_CHARACTER 			: number	= +(process.env.USER_NAME__MIN_CHARACTER || 4)
export const NAME__MAX_CHARACTER 			: number	= +(process.env.USER_NAME__MAX_CHARACTER || 64)

export const NAME__REGEX					: string	= `^[A-z][A-z0-9-_]{${NAME__MIN_CHARACTER - 1},${NAME__MAX_CHARACTER - 1}}$`
export const NAME__REGEX_MINMAX 			: string	= `^.{${NAME__MIN_CHARACTER},${NAME__MAX_CHARACTER}}$`
export const NAME__REGEX_LETTERFIRST 		: string	= '^[A-z]'
export const NAME__REGEX_ALLOWEDCHARS 		: string	= '^[a-zA-Z0-9_-]+$'


export const PASSWORD__MIN_CHARACTER 		: number	= +(process.env.USER_PASSWORD__MIN_CHARACTER || 8)
export const PASSWORD__MAX_CHARACTER 		: number	= +(process.env.USER_PASSWORD__MAX_CHARACTER || 128)

export const PASSWORD__REGEX 				: string	= `^(?=.*[-_!#%@$])[a-zA-Z0-9-_!#%@$]{${PASSWORD__MIN_CHARACTER},${PASSWORD__MAX_CHARACTER}}$`
export const PASSWORD__REGEX_MINMAX 		: string	= `^.{${PASSWORD__MIN_CHARACTER},${PASSWORD__MAX_CHARACTER}}$`
export const PASSWORD__REGEX_ALLOWEDCHARS 	: string	= '[a-zA-Z0-9]+'
export const PASSWORD__REGEX_ALLOWEDSYMBOLS : string	= '[-_!#%@$]+'





// ____________________ Game ____________________

export const MAX_LENGTH_SESSION_NAME 	: number	= +(process.env.MAX_LENGTH_SESSION_NAME	|| 50)
export const MAX_LENGTH_PLAYER_NAME 	: number	= +(process.env.MAX_LENGTH_PLAYER_NAME	|| 50)
export const MAX_PLAYERS 				: number	= +(process.env.MAX_PLAYERS				|| 16)
export const MAX_COLUMNS 				: number	= +(process.env.MAX_COLUMNS				|| 20)
export const MAX_FINALSCORES_LIMIT 		: number	= +(process.env.MAX_FINALSCORES_LIMIT	|| 10)





// ____________________ Email ____________________

export const EMAIL_OF_ADMIN 			: string	= process.env.EMAIL_OF_ADMIN 			|| ''
export const EMAIL_SMTP_REPLYTOEMAIL 	: string	= process.env.EMAIL_SMTP_REPLYTOEMAIL 	|| ''
export const EMAIL_SMTP_HOST 			: string	= process.env.EMAIL_SMTP_HOST 			|| ''
export const EMAIL_SMTP_PORT 			: number	= +(process.env.EMAIL_SMTP_PORT 		|| 465)
export const EMAIL_SMTP_SSL 			: boolean	= process.env.EMAIL_SMTP_SSL === 'true'
export const EMAIL_SMTP_USERNAME 		: string	= process.env.EMAIL_SMTP_USERNAME 		|| ''
export const EMAIL_SMTP_PASSWORD 		: string	= process.env.EMAIL_SMTP_PASSWORD 		|| ''





export const Possible_Entries = {

	Upper_Table_1: [ 0, 1, 2, 3, 4, 50 ],
	Upper_Table_2: [ 0, 2, 4, 6, 8, 50 ],
	Upper_Table_3: [ 0, 3, 6, 9, 12, 50 ],
	Upper_Table_4: [ 0, 4, 8, 12, 16, 50 ],
	Upper_Table_5: [ 0, 5, 10, 15, 20, 50 ],
	Upper_Table_6: [ 0, 6, 12, 18, 24, 50 ],

	Bottom_Table_1: [ 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ],
	Bottom_Table_2: [ 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ], 
	Bottom_Table_3: [ 0, 25, 50 ], 
	Bottom_Table_4: [ 0, 30, 40, 50 ], 
	Bottom_Table_5: [ 0, 40, 50 ], 
	Bottom_Table_6: [ 0, 50 ], 
	Bottom_Table_7: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 50 ],  

}
