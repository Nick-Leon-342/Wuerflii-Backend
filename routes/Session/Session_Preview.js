

const express = require('express')
const router = express.Router()

const { handle_error } = require('../../handle_error')
const { sort__list_players } = require('../../Functions')
const { filter_player, filter_session, filter_user } = require('../../Filter_DatabaseJSON')

const { 
	FinalScores, 
	Players, 
	Sessions, 
	Table_Archives, 
	Users,

	sequelize, 
} = require('../../models')











module.exports = router
