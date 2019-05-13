const User = require('../../models/users/users');
const logger = require('../../util/logger');




// USER SIGNUP API - CREATE NEW USER
// **
var signup = (req, res, next) => {
    logger.info('POST fired: signup a new user. ' + Date(Date.now()));

    // creating empty user object
    let newUser = new User();

    // intialize newUser object with request data 
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    

    // save newUser object to database 
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err.message
            });
        } else {
            return res.status(201).send({
                message: `User ${user.username} succesfully added to database.`
            });
        }
    });
}



// USER LOGIN API 2 - calling the function generateJwt() from user.js to generate token
// **
var login = (req, res, next) => {
    logger.info(`POST fired: login user ${req.body.email} , ${Date(Date.now())}`);

    // find user with requested email
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (!user) {
            return res.status(400).send({
                message: `User ${req.body.email} not found.`
            });
        } else {
            if (user.validPassword(req.body.password)) {
                const role = req.body.role;
                return res.status(201).send({
                    message: `User ${req.body.email} logged in`,
                    role: role
                })
            } else {
                return res.status(400).send({
                    message: "Wrong Password"
                });
            }
        }
    });
}




module.exports = {
    signup,
    login
}