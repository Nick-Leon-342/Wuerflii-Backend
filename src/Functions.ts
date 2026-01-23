

export default function sort__list_players( list_players ) {
	const tmp = [ ...list_players ]
	tmp.sort((a, b) => a.asso.Order_Index - b.asso.Order_Index)
	return tmp
}
