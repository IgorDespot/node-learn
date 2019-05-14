const User = require('../../models/users/users');

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
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

module.exports.checkUsername = (username, req, res, next) => {

    console.log("Checking username - '" + username + "'");

    User.find({ username: username }).then(function (result) {
        console.log("User '" + typeof (result) + "' is found");
        if (!isEmpty(result)) {
            console.log("User '" + result + "' is found");
            next();
        } else {
            res.status(404).send("Username doesn't exist");
        }


    }).catch(function (err) {
        console.log("Cannot find user - '" + username + "' -> " + err);
        res.status(404).send("Username doesn't exist");
    });

};

module.exports.getUserRole = (username, req, res, next) => {

    console.log("Getting role for user '" + username + "'...")
    let userName = username;

    User.find({ username: userName })
        .populate('role')
        .then(function (result) {


            //         console.log("Role '" + result + "' is found");
            //         // if (url === '/writeFile' && ((role === 'user') || (role === 'admin'))) {
            //         //     console.log("Username - '" + username + "' with role '" + role + "' can write file");
            //         //     next();
            //         // } else if (url === '/updateFile' && ((role === 'user') || (role === 'admin'))) {
            //         //     console.log("Username - '" + username + "' with role '" + role + "' can update file");
            //         //     next();
            //         // } else if (url === '/deleteFile' && (role === 'admin')) {
            //         //     console.log("Username - '" + username + "' with role '" + role + "' can delete file");
            //         //     next();
            //         // } else if (url === '/readFile') {
            //         //     console.log("Username - '" + username + "' with role '" + role + "' can read file");
            //         //     next();
            //         // } else {
            //         //     console.log("You are not authorized for this path - username '" + username + "' - role - '" + role + "' path - '" + url);
            //         //     res.status(404).send("You are not authorized for this path");
            //         // }
        }).catch(function (err) {
            console.log("Cannot find user - '" + username + "' -> " + err);

        });

};

