

import { z } from 'zod'

export const Zod__Query = z.object({
	session_id: 	z.coerce
		.number()
		.int()
		.positive('session_id invalid.'), 
	finalscore_id: 	z.coerce
		.number()
		.int()
		.positive('finalscore_id invalid.'), 
	player_id: 		z.coerce
		.number()
		.int()
		.positive('finalscore_id invalid.'), 
	offset_block: 	z.coerce
		.number()
		.int()
		.positive('offset_block invalid.')
})
