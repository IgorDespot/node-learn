const fs = require('fs');
const rp = require('request-promise');

const bookApiUri = 'http://fakerestapi.azurewebsites.net/api/Books';
const commentsApiUri = 'https://jsonplaceholder.typicode.com/comments';
const Comment = require('../../models/apiModels/CommentModel');
const logger = require('../../util/logger');

const {
    writeIntoTxtFile
} = require('../../util/fileUsage');
const subscribe = require('../subscriptionServices/subscriptionService');
const User = require('../../models/users/users');

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

module.exports = {
    getCountryByName,
    getCommentsById,
    saveCommentToDB
}