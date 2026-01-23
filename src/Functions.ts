

import type { Type__Player } from './types/Type__Player.js'

export default function sort__list_players(list__players: Array<Type__Player>): Array<Type__Player> {
	const tmp = [ ...list__players ]
	tmp.sort((a, b) => a.Order_Index - b.Order_Index)
	return tmp
}
