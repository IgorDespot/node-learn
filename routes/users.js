const express = require('express')
const router = express.Router();
const authService = require('../services/databaseServices/authService');
const userService = require('../services/databaseServices/userService');



router.post('/writeFile', authService.authVerifyUsername, authService.authVerifyRole, userService.writeFile);
router.get('/readFile', authService.authVerifyUsername, authService.authVerifyRole, userService.readFile);
router.post('/deleteFile', authService.authVerifyUsername, authService.authVerifyRole, userService.deleteFile);
router.post('/updateFile', authService.authVerifyUsername, authService.authVerifyRole, userService.updateFile);




router.post('/login', userService.login);
router.get('/showusers', userService.getAllUsers);
router.get('/showusers/:username', userService.getUserByName);
router.delete('/showusers/:username', userService.deleteUserByName);
router.post('/adduser', userService.createUser);
module.exports = router;
