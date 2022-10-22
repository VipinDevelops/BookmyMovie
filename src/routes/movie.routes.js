const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const movieController = require('../controllers/movie.controller');

// POST
router.post('/post', movieController.PostMovie);

// GET
router.get('/getall', movieController.GetAllMovie);

// GET
router.get('/getone/:id', movieController.GetOneMovie);

// PATCH
router.patch('/update/:id', movieController.UpdateMovie);

// DELETE
router.delete('/delete/:id', movieController.DeleteMovie);

module.exports = router;
