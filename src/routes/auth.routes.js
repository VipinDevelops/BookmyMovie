const express = require('express');
const middleware = require('../middleware/VerifyToken');
const authController = require('../controllers/auth.controller');

// eslint-disable-next-line new-cap
const router = express.Router();

// POST
router.post('/register', authController.register);

// POST
router.post('/login', authController.login);

// GET
router.get('/me', middleware.verifyToken, authController.me);

module.exports = router;
