const fs = require('fs');
const rp = require('request-promise');




// set up default API object
// **
var api = {
    uri: null,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true //Automatically parses the JSON string in the response
};



// GET COUNTRY BY NAME
// **
var getCountryByName = (req, res, next) => {

    api.uri = `https://restcountries.eu/rest/v2/name/${req.params.name}`;

    rp(api)
        .then( (resolved) => {
            console.log("rp api file saved")
            res.status(200).send(resolved);
        })
        .catch( (rejected) => {          
            res.status(404).send(rejected);
        });
};



var getCommentsById = (req, res, next) => {

    api.uri = `https://jsonplaceholder.typicode.com/comments/${req.params.commentId}`;

    rp(api)
        .then( (resolved) => {
            //console.log(resolved);
            res.status(200).send(resolved);
        })
        .catch( (rejected) => {          
            res.status(404).send(rejected);
        });
};





module.exports = {
    getCountryByName,
    getCommentsById
}