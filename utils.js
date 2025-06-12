

const isProd = process.env.NODE_ENV === 'prod'

const PORT = isProd ? 5000 : process.env.PORT || 5000





// ____________________ JWT-Session-Tokens ____________________

const REFRESH_TOKEN_SAMESITE = process.env.REFRESH_TOKEN_SAMESITE || 'None'
const REFRESH_TOKEN_SECURE = process.env.REFRESH_TOKEN_SECURE === 'true' || false
const REFRESH_TOKEN_MAX_AGE_IN_MINUTES = (parseInt(process.env.REFRESH_TOKEN_MAX_AGE_IN_MINUTES) || 24 * 60) * 60 * 1000





// ____________________ User ____________________

const NAME_MIN_CHARACTER = +process.env.USER_NAME_MIN_CHARACTER || 4
const NAME_MAX_CHARACTER = +process.env.USER_NAME_MAX_CHARACTER || 64

const NAME_REGEX = `^[A-z][A-z0-9-_]{${NAME_MIN_CHARACTER - 1},${NAME_MAX_CHARACTER - 1}}$`
const NAME_REGEX_MINMAX = `^.{${NAME_MIN_CHARACTER},${NAME_MAX_CHARACTER}}$`
const NAME_REGEX_LETTERFIRST = '^[A-z]'
const NAME_REGEX_ALLOWEDCHARS = '^[a-zA-Z0-9_-]+$'


const PASSWORD_MIN_CHARACTER = +process.env.USER_PASSWORD_MIN_CHARACTER || 8
const PASSWORD_MAX_CHARACTER = +process.env.USER_PASSWORD_MAX_CHARACTER || 128

const PASSWORD_REGEX = `^(?=.*[-_!#%@$])[a-zA-Z0-9-_!#%@$]{${PASSWORD_MIN_CHARACTER},${PASSWORD_MAX_CHARACTER}}$`
const PASSWORD_REGEX_MINMAX = `^.{${PASSWORD_MIN_CHARACTER},${PASSWORD_MAX_CHARACTER}}$`
const PASSWORD_REGEX_ALLOWEDCHARS = '[a-zA-Z0-9]+'
const PASSWORD_REGEX_ALLOWEDSYMBOLS = '[-_!#%@$]+'





// ____________________ Game ____________________

const MAX_LENGTH_SESSION_NAME = +process.env.MAX_LENGTH_SESSION_NAME || 50
const MAX_LENGTH_PLAYER_NAME = +process.env.MAX_LENGTH_PLAYER_NAME || 50
const MAX_PLAYERS = +process.env.MAX_PLAYERS || 16
const MAX_COLUMNS = +process.env.MAX_COLUMNS || 10
const MAX_FINALSCORES_LIMIT = +process.env.MAX_FINALSCORES_LIMIT || 10





// ____________________ Email ____________________

const EMAIL_OF_ADMIN = process.env.EMAIL_OF_ADMIN
const EMAIL_SMTP_REPLYTOEMAIL = process.env.EMAIL_SMTP_REPLYTOEMAIL
const EMAIL_SMTP_HOST = process.env.EMAIL_SMTP_HOST
const EMAIL_SMTP_PORT = +process.env.EMAIL_SMTP_PORT
const EMAIL_SMTP_SSL = process.env.EMAIL_SMTP_SSL === 'true'
const EMAIL_SMTP_USERNAME = process.env.EMAIL_SMTP_USERNAME
const EMAIL_SMTP_PASSWORD = process.env.EMAIL_SMTP_PASSWORD





module.exports = {
	PORT, 


	// ____________________ JWT-Session-Token ____________________

	REFRESH_TOKEN_SAMESITE, 
	REFRESH_TOKEN_SECURE, 
	REFRESH_TOKEN_MAX_AGE_IN_MINUTES, 


	// ____________________ User ____________________

	NAME_MIN_CHARACTER, 
	NAME_MAX_CHARACTER, 
	
	NAME_REGEX, 
	NAME_REGEX_MINMAX, 
	NAME_REGEX_LETTERFIRST, 
	NAME_REGEX_ALLOWEDCHARS, 


	PASSWORD_MIN_CHARACTER, 
	PASSWORD_MAX_CHARACTER, 

	PASSWORD_REGEX, 
	PASSWORD_REGEX_MINMAX, 
	PASSWORD_REGEX_ALLOWEDCHARS, 
	PASSWORD_REGEX_ALLOWEDSYMBOLS, 


	// ____________________ Game ____________________

	MAX_LENGTH_SESSION_NAME, 
	MAX_LENGTH_PLAYER_NAME, 
	MAX_PLAYERS, 
	MAX_COLUMNS, 
	MAX_FINALSCORES_LIMIT, 


	// ____________________ Email ____________________

	EMAIL_OF_ADMIN, 
	EMAIL_SMTP_REPLYTOEMAIL, 
	EMAIL_SMTP_HOST, 
	EMAIL_SMTP_PORT, 
	EMAIL_SMTP_SSL, 
	EMAIL_SMTP_USERNAME, 
	EMAIL_SMTP_PASSWORD, 
}
