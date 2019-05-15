const User = require('../../models/users/users');
const logger = require('../../util/logger');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
// module.exports.writeFile = (req, res, next) => {




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
module.exports.writeFile = (req, res, next) => {

    console.log("Writing file...");


};
module.exports.readFile = (req, res, next) => {

    console.log("Reading file...");


};
module.exports.updateFile = (req, res, next) => {

    console.log("Updating file...");


};
module.exports.deleteFile = (req, res, next) => {

    console.log("Deleting file...");


};
module.exports.createUser = (req, res) => {
    //   logger.info('Create new user requested'); 
    console.log('You made a POST request: ', req.body);

    User.create(req.body)
        .then(function (user) {
            console.log('You made a POST request: ', user);
            res.send(user);
        }).catch(function (err) {
            console.log(err);
            res.status(404).send("Cannot add user");
        })
        ;
};
module.exports.login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({ username: username }).then(function (user) {

        // res.send(user.username);
        let salt = user.salt;
        console.log("Username - " + username + " - Password - " + password + " Salt - " + salt);
        UserD = new User();
        if (UserD.validPassword(password, user.password, salt)) {
            //logger.info("User '" + username + "' is logged in");
            console.log("User '" + username + "' is logged in");

            res.json({ user });

        } else {

            console.log("Password is wrong");
            res.status(404).send("Wrong password");
        }
    }).catch(function (err) {

        console.log("Cannot find user");
        res.status(404).send("Cannot find user");
    });

};

module.exports.getUserRole = (username, req, res, next) => {

    console.log("Getting role for user '" + username + "'...")
    let userName = username;
    if (userName !== 'guest') {
        User.find({ username: userName }).
            populate('role').
            then(function (result) {
                console.log("Role -> " + result[0].role.rolename);
                let role = result[0].role.rolename;
                let url = req.url;
                if (result.length < 1) {
                    res.status(404).send("Cannot find user");
                } else {
                    console.log("Role '" + result + "' is found");
                    if (url === '/writeFile' && ((role === 'user') || (role === 'admin'))) {
                        console.log("Username - '" + username + "' with role '" + role + "' can write file");
                        next();
                    } else if (url === '/updateFile' && ((role === 'user') || (role === 'admin'))) {
                        console.log("Username - '" + username + "' with role '" + role + "' can update file");
                        next();
                    } else if (url === '/deleteFile' && (role === 'admin')) {
                        console.log("Username - '" + username + "' with role '" + role + "' can delete file");
                        next();
                    } else if (url === '/readFile') {
                        console.log("Username - '" + username + "' with role '" + role + "' can read file");
                        next();
                    } else {
                        console.log("You are not authorized for this path - username '" + username + "' - role - '" + role + "' path - '" + url);
                        res.status(404).send("You are not authorized for this path");
                    }

                }
            }).catch(function (err) {
                console.log(err);
                res.status(404).send("Cannot find user");
            });
    } else {
        let role = 'guest';
        let url = req.url;
        if (url === '/readFile') {
            console.log("Username - '" + username + "' with role '" + role + "' can read file");
            next();
        } else {
            console.log("You are not authorized for this path - username '" + username + "' - role - '" + role + "' path - '" + url);
            res.status(404).send("You are not authorized for this path");
        }
    }


};
module.exports.getAllUsers = (req, res, next) => {

    User.find().
        populate("role").
        then(function (users) {
            console.log(users);
            console.log('Show all users requested ');
            res.send(users);
            console.log('All users shown ');
        }).catch(function (err) {
            console.log(err)
            console.log('Show all users failed');
            res.status(404).send("Cannot find users");
        })
};

module.exports.getUserByName = (req, res, next) => {
    console.log('Show user by name requested');
    let userName = req.params.username;
    User.find({ username: userName }).
        populate('role').
        then(function (user) {
            console.log(user);
            console.log('Shown user by name');
            if (user.length < 1) {
                res.status(404).send("Cannot find user");
            } else {

                res.send(user);
            }
        }).catch(function (err) {
            console.log(err);
            res.status(404).send("Cannot find user");
        });
};




module.exports.deleteUserByName = (req, res, next) => {
    console.log('Delete single user requested');
    let nameUser = req.params.username;
    User.remove({ username: nameUser }).then(function (user) {
        console.log(user);
        if (user.deletedCount < 1) {
            res.status(404).send("Cannot find user");
        } else {

            res.send(user);
        }
    }).catch(function (err) {
        console.log(err);
        res.status(404).send("Cannot find user");
    });

};


module.exports.updateUser = (req, res) => {
    console.log('Update user requested');
    console.log('You made a UPDATE request: ', req.body);
    User.updateOne({ username: req.body.username }, req.body)
        .then(function (user) {
            if (user.deletedCount < 1) {
                res.status(404).send("User is not found");
            } else {
                res.send(user);
            }
        }).catch(function (err) {

            res.status(404).send("Cannot update user => " + err);
        })
        ;

};
