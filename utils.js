

const id_upperTable		= 'upperTable'
const id_bottomTable	= 'bottomTable'





const MAX_PLAYERS = process.env.MAX_PLAYERS		|| 10
const MAX_COLUMNS = process.env.MAX_COLUMNS		|| 10





const name_min = process.env.USERNAME_MIN_CHARACTER		|| 3
const name_max = process.env.USERNAME_MAX_CHARACTER		|| 63

const password_min = process.env.PASSWORD_MIN_CHARACTER || 8
const password_max = process.env.PASSWORD_MAX_CHARACTER || 128

const NAME_REGEX = new RegExp(`^[A-z][A-z0-9-_]{${name_min - 1},${name_max - 1}}$`)
const PASSWORD_REGEX = new RegExp(`^(?=.*[-_!#%@$])[a-zA-Z0-9-_!#%@$]{${password_min},${password_max}}$`)





module.exports = {
	id_upperTable, 
	id_bottomTable, 
	NAME_REGEX, 
	PASSWORD_REGEX, 
}
