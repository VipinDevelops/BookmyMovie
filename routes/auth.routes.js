const express = require('express');

const authController = require('../controllers/auth.controller');

// eslint-disable-next-line new-cap
const router = express.Router();

router.put('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
