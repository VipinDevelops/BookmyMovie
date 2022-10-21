const express = require('express');
const middleware = require('../middlewares/VerifyToken');
const authController = require('../../controllers/auth.controller');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', middleware.verifyToken, authController.me);
module.exports = router;
