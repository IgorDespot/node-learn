var express = require('express');
var router = express.Router();
const functions = require('../services/databaseServices/roleService')


router.get('/showroles',functions.getAllRoles);
router.post('/addrole',functions.createRole); 
module.exports = router;