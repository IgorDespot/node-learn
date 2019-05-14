var express = require('express');
var router = express.Router();
const functions = require('../services/databaseServices/userService')


router.get('/showusers', functions.getAllUsers );
router.post('/adduser',functions.createUser); 
module.exports = router;