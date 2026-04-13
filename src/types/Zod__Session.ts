

import { Enum___Association__Users_And_Sessions___Input_Type, Enum___Association__Users_And_Sessions___View, Enum___List__Month, Enum___Statistics__View } from '../../generated/prisma/index.js'
import { COLOR__REGEX, MAX_COLUMNS, MAX_LENGTH_SESSION_NAME } from '../utils.js'
import { Zod__Player_List } from './Zod__Player.js'
import * as z from 'zod'





export const Zod__Session = z.object({
	id: 							z.number().int, 
	Name:							z.string()
										.min(1, 'Session name too short.')
										.max(MAX_LENGTH_SESSION_NAME, `Max session name length is ${MAX_LENGTH_SESSION_NAME} characters.`),
	Color:							z.string()
										.regex(COLOR__REGEX, 'Color invalid.'),
	Columns:						z.number()
										.min(1, 'Less than 1 column is not valid.')
										.max(MAX_COLUMNS, `Max amount of columns is ${MAX_COLUMNS}.`),

	View__List_Years:				z.array(z.number().int()), 
	CurrentGameStart:				z.date().nullable(), 
	LastPlayed:						z.date(), 

	Input_Type:						z.enum(Enum___Association__Users_And_Sessions___Input_Type), 
	Show_Scores:					z.boolean(), 

	View: 							z.enum(Enum___Association__Users_And_Sessions___View), 
	View__Month: 					z.enum(Enum___List__Month), 
	View__Year: 					z.number().int(), 
	View__Custom_Date:				z.date(), 

	Statistics__Show_Border: 		z.boolean(), 
	Statistics__View_Month:			z.enum(Enum___List__Month), 
	Statistics__View_Year: 			z.number().int(), 
	Statistics__View: 				z.enum(Enum___Statistics__View), 
	
	createdAt:			z.date(), 
	updatedAt:			z.date(), 

	Checkbox_Checked_To_Delete:		z.boolean(), 
	List__Players:					Zod__Player_List, 
})

export type Type__Session = z.infer<typeof Zod__Session>





export const Zod__Session_POST = Zod__Session.pick({
	Columns: true, 
	Color: true, 
	Name: true, 
})

export type Type__Session_POST = z.infer<typeof Zod__Session_POST>





export const Zod__Session_PATCH = Zod__Session.pick({
	Name: true, 
	Color: true, 
	Columns: true, 

	View: true, 
	View__Month: true, 
	View__Year: true, 

	Input_Type: true, 
	Show_Scores: true, 

	Statistics__Show_Border: true, 
	Statistics__View_Month: true, 
	Statistics__View_Year: true, 
	Statistics__View: true, 
}).partial()

export type Type__Session_PATCH = z.infer<typeof Zod__Session_PATCH>
