const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const isAuth = require('../middlewares/is-auth');
// eslint-disable-next-line no-unused-vars
const {mongoose} = require('../config/db');
const movieController = require('../controllers/movie.controller');

// Post
router.post('/post', isAuth, movieController.PostMovie);

// Get all
router.get('/getall', isAuth, movieController.GetAllMovie);

// Get One
router.get('/getone/:id', isAuth, movieController.GetOneMovie);

// Update by ID
router.patch('/update/:id', isAuth, movieController.UpdateMovie);

// Update Movie to booked by ID
router.patch('/book/:id', isAuth, movieController.Bookmovie);

// Update Movie to booked by ID
router.patch('/cancel/:id', isAuth, movieController.Cancelmovie);

// Delete by ID
router.delete('/delete/:id', isAuth, movieController.DeleteMovie);

module.exports = router;
