const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const movieController = require('../controllers/movie.controller');
const middleware = require('../middlewares/VerifyToken');
// Post
router.post('/post', middleware.verifyToken, movieController.PostMovie);

// Get all
router.get('/getall', middleware.verifyToken, movieController.GetAllMovie);

// Get One
router.get('/getone/:id', middleware.verifyToken, movieController.GetOneMovie);

// Update by ID
router.patch(
    '/update/:id',
    middleware.verifyToken,
    movieController.UpdateMovie,
);

// Update Movie to booked by ID
router.patch('/book/:id', middleware.verifyToken, movieController.Bookmovie);

// Update Movie to booked by ID
router.patch(
    '/cancel/:id',
    middleware.verifyToken,
    movieController.Cancelmovie,
);

// Delete by ID
router.delete(
    '/delete/:id',
    middleware.verifyToken,
    movieController.DeleteMovie,
);

module.exports = router;
