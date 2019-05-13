let rp = require('request-promise');

function sendDataToApi(doSub, isSubscribed, uri, data) {
    if (doSub) {
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
                .then(x => console.log('It works'))
                .catch(x => console.log('It didnt work'));
        } else {
            return {
                errorMsg: "If you wish to subscribe your data to the thir party service change your account setting to allow subscription"
            }
        }
    }
}

module.exports = sendDataToApi;