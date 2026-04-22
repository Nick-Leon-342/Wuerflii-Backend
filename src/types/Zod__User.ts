

import * as z from 'zod'

import {
	NAME__REGEX, 
	NAME__MIN_CHARACTER, 
	NAME__MAX_CHARACTER, 	

	PASSWORD__REGEX, 
	PASSWORD__MIN_CHARACTER, 
	PASSWORD__MAX_CHARACTER, 
} from '../utils.js'

import { 
	Enum___List__Month, 
	Enum___Statistics__View, 
	Enum___Users___View__Sessions
} from '../../generated/prisma/index.js'





export const Zod__User = z.object({
	id:			z.number().int(), 
	Name:		z
		.string()
		.min(NAME__MIN_CHARACTER, 'Name too short.')
		.max(NAME__MAX_CHARACTER, 'Name too long.')
		.regex(new RegExp(NAME__REGEX), 'Name invalid.'), 
	Password:	z
		.string()
		.min(PASSWORD__MIN_CHARACTER, 'Password too short.')
		.max(PASSWORD__MAX_CHARACTER, 'Password too long.')
		.regex(new RegExp(PASSWORD__REGEX), 'Password invalid.'), 

	DarkMode:					z.boolean(), 

	Show__Session_Names:		z.boolean(), 
	Show__Session_Date:			z.boolean(), 

	View__Sessions:				z.enum(Enum___Users___View__Sessions), 
	View__Sessions_Desc:		z.boolean(), 

	Statistics__View:			z.enum(Enum___Statistics__View), 
	Statistics__View_Month:		z.enum(Enum___List__Month), 
	Statistics__View_Year:		z.number().int(), 

	updatedAt:					z.date(), 
	createdAt:					z.date(), 
})

export const Zod__User_POST = Zod__User.pick({
	Password: true, 
	Name: true, 
})

export const Zod__User_PATCH = Zod__User.pick({
	Name: true, 
	Password: true, 
	DarkMode: true, 

	Show__Session_Names: true, 
	Show__Session_Date: true, 

	View__Sessions: true, 
	View__Sessions_Desc: true, 

	Statistics__View: true, 
	Statistics__View_Month: true, 
	Statistics__View_Year: true, 
}).partial()
