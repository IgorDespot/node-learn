const express = require('express');
const router = express.Router();

const {
    getCountryByName,
    getCommentsById
} = require('../services/fileServices/fileServices');



// ** WRITE TO FILE **
router.get('/country/:name', getCountryByName);


// ** GET COMMENT BY ID **
router.get('/comments/:commentId', getCommentsById);



module.exports = router;