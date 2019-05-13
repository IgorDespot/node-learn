const fs = require('fs');
const rp = require('request-promise');




//set up default API object
var api = {
    uri: null,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};



// WRITE TO FILE FUNCTION
var writeToFile = (req, res, next) => {

    api.uri = `https://restcountries.eu/rest/v2/name/${req.params.name}`;

    rp(api)
        .then(function (resolved) {            
            res.status(200).send(resolved);
        })
        .catch(function (rejected) {            
            res.status(404).send(rejected);
        });
};





module.exports = {
    writeToFile
}