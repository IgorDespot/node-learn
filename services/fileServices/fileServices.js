const fs = require('fs');
const rp = require('request-promise');

const bookApiUri = 'http://fakerestapi.azurewebsites.net/api/Books';
const commentsApiUri = 'https://jsonplaceholder.typicode.com/comments';

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
let getCountryByName = (req, res, next) => {
    if (req.body.uri === bookApiUri || req.body.uri === commentsApiUri) {
        api.uri = req.body.uri;

        rp(api)
            .then((resolved) => {
                console.log("rp api file saved")
                res.status(200).send(resolved);
            })
            .catch((rejected) => {
                res.status(404).send(rejected);
            });
    } else {
        res.send({
            errMsg: `This application does not support the API you sent, please use one of these two APIs: ${bookApiUri} or ${commentsApiUri}`
        })
    }
};

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
    getCommentsById
}