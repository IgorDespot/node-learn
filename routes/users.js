const express = require('express')
const router = express.Router();
const authService = require('../services/databaseServices/authService');
const userService = require('../services/databaseServices/userService');



router.get('/writeFile', authService.authVerifyUsername, authService.authVerifyRole, userService.writeFile);
// router.get('/readFile', authService.authVerifyUsername, authService.authVerifyRole, userService.readFile);
// router.get('/deleteFile', authService.authVerifyUsername, authService.authVerifyRole, userService.writeFile);
// router.get('/updateFile', authService.authVerifyUsername, authService.authVerifyRole, userService.writeFile);


module.exports = router;
