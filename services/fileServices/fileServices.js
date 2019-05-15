const fs = require('fs');
const rp = require('request-promise');

// const bookApiUri = 'http://fakerestapi.azurewebsites.net/api/Books';
// const commentsApiUri = 'https://jsonplaceholder.typicode.com/comments';
const Comment = require('../../models/apiModels/CommentModel');
const logger = require('../../util/logger');

// const {
//     writeIntoTxtFile
// } = require('../../util/fileUsage');
// const subscribe = require('../subscriptionServices/subscriptionService');
// const User = require('../../models/users/users');

// set up default API object
// **
let api = {
    uri: null,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true //Automatically parses the JSON string in the response
};

// GET COUNTRY BY NAME
// **


let getCommentsById = (req, res, next) => {
    api.uri = `https://jsonplaceholder.typicode.com/comments/${req.params.commentId}`;
    rp(api)
        .then((resolved) => {
            //console.log(resolved);
            res.status(200).send(resolved);
        })
        .catch((rejected) => {
            res.status(404).send(rejected);
        });
};


// CREATE NEW COMMENT
// **
let saveCommentToDB = (req, res, next) => {
    logger.info(`POST fired: create a new comment. ${Date(Date.now())}`);

    // creating empty comment object
    let newComm = new Comment();

    // intialize newComm object with request data 
    newComm.postId = req.body.postId;
    newComm.commentId = req.body.commentId;
    newComm.name = req.body.name;
    newComm.email = req.body.email;
    newComm.commentBody = req.body.commentBody;

    // save newComm object to database 
    newComm.save((err, comm) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            return res.status(201).send({
                message: `Comment no. ${comm.commentId} succesfully added to database.`
            });
        }
    });
};





module.exports = {
    //getCountryByName,
    getCommentsById,
    saveCommentToDB
}