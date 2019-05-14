const mongoose = require('mongoose');
const validator = require('validator');
const logger = require('../../util/logger').logger;
const Schema = mongoose.Schema;
const crypto = require('crypto');

const validateUsername = function (username) {
    logger.info("Checking username...");
    if (validator.isLowercase(username)) {
        logger.info("Username validaton passed");
        return true;
    } else {
        logger.error("Username validaton didnt pass");
        return false;
    }

}
const validatePassword = function (password) {
    logger.info("Checking password...");
    if (!validator.isAlphanumeric(password)) {
        logger.info("Password validaton passed");
        return true;
    } else {
        logger.error("Password validaton didnt pass");
        return false;
    }

}





const validateLocalStrategyEmail = function (email) {
    console.log(validator.isEmail(email));
    return (validator.isEmail(email));
};



const UserSchema = new Schema({
    username: {
        type: String,
        // unique: true,
        required: true,
        minlength: 6
        // validate: [validateUsername, 'Username is not valid']

    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        // validate: [validatePassword, 'Password is not valid']
    },
    email: {
        type: String,
        // unique: true,
        required: true,
        // validate: [validateLocalStrategyEmail, 'Please enter valid email']
    },
    role:
    {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    subscribed: {
        type: Schema.Types.ObjectId,
        ref: 'Subscribed'

    },
    salt: {
        type: String
    }

})




UserSchema.pre('save', function (next) {
    console.log(this.password);
    if (this.password && this.isModified('password') && this.password.length >= 8) {
        this.salt = crypto.randomBytes(32).toString('base64');

        this.password = this.setPassword(this.password);

        next();

    }

});


UserSchema.methods.setPassword = function (password) {
    if (this.salt && password) {

        return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64, 'sha1').toString('base64');
    } else {

        return password;
    }
};

UserSchema.methods.validPassword = function (userPassword, hashPassword, s) {

    var salt = s;
    var hash = crypto.pbkdf2Sync(userPassword, new Buffer(salt, 'base64'), 10000, 64, 'sha1').toString('base64');
    return hashPassword === hash;
};

module.exports = mongoose.model('User', UserSchema);