const express = require('express')
const router = express.Router();
const authService = require('../services/databaseServices/authService');
const userService = require('../services/databaseServices/userService');

router.get('/readFile', authService.authVerifyUsername, authService.authVerifyRole, userService.readFile);

module.exports = router;

