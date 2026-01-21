

export const isProd			: boolean	= process.env.NODE_ENV === 'prod'

export const PORT			: number	= isProd ? 5000 : +(process.env.PORT || 5000)

export const DATABASE_URL	: string	= `prisma+postgres://localhost:51213/?api_key=eyJkYXRhYmFzZVVybCI6InBvc3RncmVzOi8vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbXBsYXRlMT9zc2xtb2RlPWRpc2FibGUmY29ubmVjdGlvbl9saW1pdD0xJmNvbm5lY3RfdGltZW91dD0wJm1heF9pZGxlX2Nvbm5lY3Rpb25fbGlmZXRpbWU9MCZwb29sX3RpbWVvdXQ9MCZzaW5nbGVfdXNlX2Nvbm5lY3Rpb25zPXRydWUmc29ja2V0X3RpbWVvdXQ9MCIsIm5hbWUiOiJkZWZhdWx0Iiwic2hhZG93RGF0YWJhc2VVcmwiOiJwb3N0Z3JlczovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1MTIxNS90ZW1wbGF0ZTE_c3NsbW9kZT1kaXNhYmxlJmNvbm5lY3Rpb25fbGltaXQ9MSZjb25uZWN0X3RpbWVvdXQ9MCZtYXhfaWRsZV9jb25uZWN0aW9uX2xpZmV0aW1lPTAmcG9vbF90aW1lb3V0PTAmc2luZ2xlX3VzZV9jb25uZWN0aW9ucz10cnVlJnNvY2tldF90aW1lb3V0PTAifQ`





// ____________________ JWT-Session-Tokens ____________________

export const ACCESS_TOKEN_SECRET				: string	= process.env.ACCESS_TOKEN_SECRET || '1234'
export const REFRESH_TOKEN_SAMESITE 			: string	= process.env.REFRESH_TOKEN_SAMESITE || 'None'
export const REFRESH_TOKEN_SECURE 				: boolean	= process.env.REFRESH_TOKEN_SECURE === 'true' || false
export const ACCESS_TOKEN_MAX_AGE_IN_MINUTES 	: number	= parseInt(process.env.ACCESS_TOKEN_MAX_AGE_IN_MINUTES || '15') * 60 * 1000
export const REFRESH_TOKEN_MAX_AGE_IN_MINUTES 	: number	= parseInt(process.env.REFRESH_TOKEN_MAX_AGE_IN_MINUTES || '1440') * 60 * 1000





// ____________________ User ____________________

export const NAME_MIN_CHARACTER 			: number	= +(process.env.USER_NAME_MIN_CHARACTER || 4)
export const NAME_MAX_CHARACTER 			: number	= +(process.env.USER_NAME_MAX_CHARACTER || 64)

export const NAME_REGEX						: RegExp	= new RegExp(`^[A-z][A-z0-9-_]{${NAME_MIN_CHARACTER - 1},${NAME_MAX_CHARACTER - 1}}$`)
export const NAME_REGEX_MINMAX 				: RegExp	= new RegExp(`^.{${NAME_MIN_CHARACTER},${NAME_MAX_CHARACTER}}$`)
export const NAME_REGEX_LETTERFIRST 		: RegExp	= new RegExp('^[A-z]')
export const NAME_REGEX_ALLOWEDCHARS 		: RegExp	= new RegExp('^[a-zA-Z0-9_-]+$')


export const PASSWORD_MIN_CHARACTER 		: number	= +(process.env.USER_PASSWORD_MIN_CHARACTER || 8)
export const PASSWORD_MAX_CHARACTER 		: number	= +(process.env.USER_PASSWORD_MAX_CHARACTER || 128)

export const PASSWORD_REGEX 				: RegExp	= new RegExp(`^(?=.*[-_!#%@$])[a-zA-Z0-9-_!#%@$]{${PASSWORD_MIN_CHARACTER},${PASSWORD_MAX_CHARACTER}}$`)
export const PASSWORD_REGEX_MINMAX 			: RegExp	= new RegExp(`^.{${PASSWORD_MIN_CHARACTER},${PASSWORD_MAX_CHARACTER}}$`)
export const PASSWORD_REGEX_ALLOWEDCHARS 	: RegExp	= new RegExp('[a-zA-Z0-9]+')
export const PASSWORD_REGEX_ALLOWEDSYMBOLS 	: RegExp	= new RegExp('[-_!#%@$]+')





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
