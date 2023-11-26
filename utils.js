

const id_upperTable		= 'upperTable'
const id_bottomTable	= 'bottomTable'

const NAME_REGEX = /^[A-z][A-z0-9-_]{3,49}$/
const PASSWORD_REGEX = /^(?=.*[-_!#%@$])[a-zA-Z0-9-_!#%@$]{8,128}$/


module.exports = {
	id_upperTable, 
	id_bottomTable, 
	NAME_REGEX, 
	PASSWORD_REGEX, 
}
