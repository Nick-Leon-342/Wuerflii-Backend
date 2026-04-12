

import * as z from 'zod'

import {
	MAX_LENGTH_PLAYER_NAME,
	MAX_PLAYERS, 
} from '../utils.js'





const Zod__Player = z.object({
	Name:	z
		.string()
		.min(1, 'Name too short.')
		.max(MAX_LENGTH_PLAYER_NAME, 'Name too long.'), 
	Color:	z
		.string()
		.regex(/^#([0-9A-Fa-f]{3}){1,2}$/, 'Color invalid.')
})

export const Zod__Player_List__Without_PlayerID = z.object({
	List__Players: z
		.array(Zod__Player)
		.min(1, 'List__Players too short.')
		.max(MAX_PLAYERS, 'List__Players too long.')
})





const Zod__Player_With_ID = Zod__Player.extend({
	id:		z.number().int(), 
})

export const Zod__Player_List__With_PlayerID = z.object({
	List__Players: z
		.array(Zod__Player_With_ID)
		.min(1, 'List__Players too short.')
		.max(MAX_PLAYERS, 'List__Players too long.')
})
