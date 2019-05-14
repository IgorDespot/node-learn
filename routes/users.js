const express = require('express')
const router = express.Router();



const authService = require('../services/databaseServices/authService');
const userService = require('../services/databaseServices/userService');
const {
    writeToFile
} = require('../services/fileServices/fileServices');


router.get('/readFile', authService.authVerifyUsername, authService.authVerifyRole, userService.readFile);


module.exports = router;
