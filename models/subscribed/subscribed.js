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
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
      }
    
})

module.exports = mongoose.model('Subscribed', SubscribedSchema);