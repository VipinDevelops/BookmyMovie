const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const {mongoose} = require('../config/db');
const movieController = require('../controllers/movie.controller');
const verifyToken = require('../middlewares/VerifyToken');
// Post
router.post('/post', verifyToken.verifyToken, movieController.PostMovie);

// Get all
router.get('/getall', verifyToken.verifyToken, movieController.GetAllMovie);

// Get One
router.get('/getone/:id', verifyToken.verifyToken, movieController.GetOneMovie);

// Update by ID
router.patch(
    '/update/:id',
    verifyToken.verifyToken,
    movieController.UpdateMovie,
);

// Update Movie to booked by ID
router.patch('/book/:id', verifyToken.verifyToken, movieController.Bookmovie);

// Update Movie to booked by ID
router.patch(
    '/cancel/:id',
    verifyToken.verifyToken,
    movieController.Cancelmovie,
);

// Delete by ID
router.delete(
    '/delete/:id',
    verifyToken.verifyToken,
    movieController.DeleteMovie,
);

module.exports = router;
