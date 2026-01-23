

import * as dotenv from 'dotenv'
dotenv.config()

import { Enum___Refresh_Token_Samesite } from './types/Enum___Refresh_Token_Samesite.js'





export const isProd			: boolean	= process.env.NODE_ENV === 'prod'
export const PORT			: number	= isProd ? 5000 : +(process.env.PORT || 5000)
export const ALLOWED_ORIGIN	: string	= process.env.DOMAIN || 'http://localhost:5173'





// ____________________ Database ____________________

const {
	DB_USERNAME,
	DB_PASSWORD,
	DB_DATABASE,
	DB_HOST,
	DB_PORT,
	DB_TYPE, 
} = process.env

if(
	!DB_USERNAME	||
	!DB_PASSWORD	||
	!DB_DATABASE	||
	!DB_HOST		||
	!DB_PORT		||
	!DB_TYPE
) throw new Error('Missing database environment variables!')

export const DATABASE_URL	: string	= `${DB_TYPE}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`





// ____________________ JWT-Session-Tokens ____________________

export const ACCESS_TOKEN_SECRET				: string						= process.env.ACCESS_TOKEN_SECRET 					|| '1234'
export const REFRESH_TOKEN_SECRET				: string						= process.env.REFRESH_TOKEN_SECRET 					|| '1234'

export const REFRESH_TOKEN_SAMESITE 			: Enum___Refresh_Token_Samesite	= 
				Object.values(Enum___Refresh_Token_Samesite).includes(process.env.REFRESH_TOKEN_SAMESITE as Enum___Refresh_Token_Samesite)
					? (process.env.REFRESH_TOKEN_SAMESITE as Enum___Refresh_Token_Samesite)
					: Enum___Refresh_Token_Samesite.none
export const REFRESH_TOKEN_SECURE 				: boolean						= process.env.REFRESH_TOKEN_SECURE === 'true' 		|| false
export const ACCESS_TOKEN_MAX_AGE_IN_MINUTES 	: number						= +(process.env.ACCESS_TOKEN_MAX_AGE_IN_MINUTES 	|| 15)
// export const REFRESH_TOKEN_MAX_AGE_IN_MINUTES 	: number						= +(process.env.REFRESH_TOKEN_MAX_AGE_IN_MINUTES 	|| 1440) * 60
export const REFRESH_TOKEN_MAX_AGE_IN_MINUTES 	: number						= +(process.env.REFRESH_TOKEN_MAX_AGE_IN_MINUTES 	|| 1440) * 60 * 1000





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
export const MAX_COLUMNS 				: number	= +(process.env.MAX_COLUMNS				|| 10)
export const MAX_FINALSCORES_LIMIT 		: number	= +(process.env.MAX_FINALSCORES_LIMIT	|| 10)





// ____________________ Email ____________________

export const EMAIL_OF_ADMIN 			: string	= process.env.EMAIL_OF_ADMIN 			|| ''
export const EMAIL_SMTP_REPLYTOEMAIL 	: string	= process.env.EMAIL_SMTP_REPLYTOEMAIL 	|| ''
export const EMAIL_SMTP_HOST 			: string	= process.env.EMAIL_SMTP_HOST 			|| ''
export const EMAIL_SMTP_PORT 			: number	= +(process.env.EMAIL_SMTP_PORT 		|| 465)
export const EMAIL_SMTP_SSL 			: boolean	= process.env.EMAIL_SMTP_SSL === 'true'
export const EMAIL_SMTP_USERNAME 		: string	= process.env.EMAIL_SMTP_USERNAME 		|| ''
export const EMAIL_SMTP_PASSWORD 		: string	= process.env.EMAIL_SMTP_PASSWORD 		|| ''
