const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    pageCount: {
        type: Number,
        trim: true
    },
    excerpt: {
        type: String,
        trim: true
    },
    publishDate: {
        type: Date,
        trim: true
    }
});

let BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;