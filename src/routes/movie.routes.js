const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const movieController = require('../controllers/movie.controller');
// Post
router.post('/post', movieController.PostMovie);

// Get all
router.get('/getall', movieController.GetAllMovie);

// Get One
router.get('/getone/:id', movieController.GetOneMovie);

// Update by ID
router.patch('/update/:id', movieController.UpdateMovie);

// Delete by ID
router.delete('/delete/:id', movieController.DeleteMovie);

module.exports = router;
