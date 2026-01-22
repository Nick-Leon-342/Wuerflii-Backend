


export function isInt		(v: any): boolean {	return typeof v === 'number'	}
export function isArray		(v: any): boolean {	return Array.isArray(v)			}
export function isString	(v: any): boolean {	return typeof v === 'string'	}
export function isBoolean	(v: any): boolean {	return typeof v === 'boolean'	}

export function isColor		(v: any): boolean {	return /^#([0-9A-Fa-f]{3}){1,2}$/.test(v)	}
