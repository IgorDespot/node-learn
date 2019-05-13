const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const SubscribedSchema = new Schema({
    isSubscribed: {
        type: Boolean,
        required: true
    },
    url: {
        type: String
    }
    
})

module.exports = mongoose.model('Subscribed', SubscribedSchema);