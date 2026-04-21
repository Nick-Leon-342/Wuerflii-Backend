

import { Possible_Entries } from '../utils.js'
import * as z from 'zod'

export const Zod__Game_Table_Columns = z.object({
	Value:		z.number().int().nullable(), 
	PlayerID:	z.number().int(), 
	Column:		z.number().int(),
	Name:		z.enum(Object.keys(Possible_Entries)), 
})
