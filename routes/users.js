const express = require('express');
const router = express.Router();

const {
    writeToFile
} = require('../services/fileServices/fileServices');


// *** WRITE TO FILE
router.get('/country/:name', writeToFile);


module.exports = router;