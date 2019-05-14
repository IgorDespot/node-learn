const express = require('express');
const router = express.Router();

const {
    getCountryByName,
    getCommentsById,
    saveCommentToDB
} = require('../services/fileServices/fileServices');



// ** WRITE TO FILE **
router.get('/country/:name', getCountryByName);


// ** GET COMMENT BY ID **
router.get('/comments/:commentId', getCommentsById);


// ** ADD COMMENT TO DATABASE **
router.post('/comments/add/new', saveCommentToDB);



module.exports = router;