


function isInt(v) {		return typeof v === 'number'	}
function isArray(v) {	return Array.isArray(v)			}
function isString(v) {	return typeof v === 'string'	}
function isBoolean(v) {	return typeof v === 'boolean'	}

function isColor(v) {	return /^#([0-9A-Fa-f]{3}){1,2}$/.test(v)	}





module.exports = {
	isInt, 
	isArray, 
	isString, 
	isBoolean, 
	isColor, 
}
