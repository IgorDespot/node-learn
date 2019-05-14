const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    pageCount: {
        type: Number
    },
    excerpt: {
        type: String
    },
    publishDate: {
        type: Date
    }
});

let BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;