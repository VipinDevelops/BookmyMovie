const express  = require('express');
const Movie =require('../model/movie.model')
const router = express.Router();

const {mongoose} = require('../database/db');
const movieController = require('../controllers/movie.controller')

//Post Method 
router.post('/post', movieController.PostMovie)

//Get all Method 
router.get('/getall', movieController.GetAllMovie)

//Get One Method 
router.get('/getone/:id',movieController.GetOneMovie)

//Update by ID Method 
router.patch('/update/:id',movieController.UpdateMovie)

//Update Movie to booked by ID method 
router.patch('/book/:id',movieController.Bookmovie)

//Delete by ID Method 
router.delete('/delete/:id',movieController.DeleteMovie)

module.exports = router;