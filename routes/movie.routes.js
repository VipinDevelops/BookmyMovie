const express  = require('express');
const Movie =require('../model/movie.model')
const router = express.Router();

const {mongoose} = require('../database/db');
const movieController = require('../controllers/movie.controller')

//Post  
router.post('/post', movieController.PostMovie)

//Get all  
router.get('/getall', movieController.GetAllMovie)

//Get One  
router.get('/getone/:id',movieController.GetOneMovie)

//Update by ID  
router.patch('/update/:id',movieController.UpdateMovie)

//Update Movie to booked by ID 
router.patch('/book/:id',movieController.Bookmovie)

//Update Movie to booked by ID 
router.patch('/book/:id',movieController.Cancelmovie)

//Delete by ID  
router.delete('/delete/:id',movieController.DeleteMovie)

module.exports = router;