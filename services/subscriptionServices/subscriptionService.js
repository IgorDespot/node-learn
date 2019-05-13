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
        .then( resp => console.log('It works'))
        .catch( err => console.log('It didnt work'));
    }
}

module.exports = sendDataToApi;