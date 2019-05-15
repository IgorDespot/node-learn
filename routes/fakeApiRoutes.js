const express = require('express');
const router = express.Router();

const {
    getDataAndLog,
    getCommentsById,
    saveCommentToDB
} = require('../services/fileServices/fileServices');

const { authVerifyUsername, authVerifyRole } = require('../services/databaseServices/authService');


// // ** WRITE TO FILE **
router.post('/getDataAndLog',authVerifyUsername, authVerifyRole, getDataAndLog);


// ** GET COMMENT BY ID **
router.get('/comments/:commentId', getCommentsById);


// ** ADD COMMENT TO DATABASE **
router.post('/comments/add/new', saveCommentToDB);



module.exports = router;