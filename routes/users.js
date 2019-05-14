var express = require('express');
var router = express.Router();
const functions = require('../services/databaseServices/userService')


router.get('/showusers', functions.getAllUsers );
router.get('/showusers/:username', functions.getUserByName );
router.delete('/showusers/:username', functions.deleteUserByName );
router.post('/adduser',functions.createUser); 
module.exports = router;