let rp = require('request-promise');

function sendDataToApi(isSubscribed, uri, data) {
    if (isSubscribed) {
        let options = {
            method: 'POST',
            uri: uri,
            body: {
                data: data
            },
            json: true
        };

        rp(options)
        .then( console.log('It works'))
        .catch( console.log('It didnt work'));
    }
}

module.exports = sendDataToApi;