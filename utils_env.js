

const MAX_LENGTH_PLAYER_NAME = +process.env.MAX_LENGTH_PLAYER_NAME || 50
const MAX_PLAYERS = +process.env.MAX_PLAYERS || 16
const MAX_COLUMNS = +process.env.MAX_COLUMNS || 10




module.exports = {
	MAX_LENGTH_PLAYER_NAME, 
	MAX_PLAYERS, 
	MAX_COLUMNS, 
}
