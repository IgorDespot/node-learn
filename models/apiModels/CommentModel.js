const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    postId: {
        type: Number,
        trim: true
    },
    commentId: {
        type: Number,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    commentBody: {
        type: String,
        trim: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
      }
});

let CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;