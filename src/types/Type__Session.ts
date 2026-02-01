

import type { Type__Player } from './Type__Player.js'

export interface Type__Session {
	
	id:					number

	Name:				string
	Color:				string
	Columns:			number

	View__List_Years:	Array<number>
	CurrentGameStart:	Date | null
	LastPlayed:			Date

	createdAt:			Date
	updatedAt:			Date

	Checkbox_Checked?:	boolean
	List__Players?:		Array<Type__Player>

}
