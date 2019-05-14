const User = require('../../models/users/users');

module.exports.writeFile = (req, res, next) => {

    console.log("Write File");
    // Book.find()
    //   .then(function (books) {

    //     logger.info("Getting all books ... ");
    //     res.send(books);

    //   }).catch(function (err) {
    //     logger.error("Cannot find books");
    //     res.status(404).send("Cannot find books");
    //   })
};

module.exports.checkUsername = (username) => {

    console.log("Checking username - '" + username + "'");
    return true;
    // User.find({ username: username }).then(function () {
    //     console.log("User '" + username + "' is found");
    //     return true;
    // }).catch(function (err) {
    //     console.log("Cannot find user - '" + username + "' -> " + err);
    //     return false;
    // });

};

module.exports.getUserRole = (username) => {

    console.log("Getting role for user '" + username + "'...")
    return 'user';
    // User.find({ username: username }).then(function () {
    //     console.log("User '" + username + "' is found");
    //     return true;
    // }).catch(function (err) {
    //     console.log("Cannot find user - '" + username + "' -> " + err);
    //     return false;
    // });

};

