const userService = require('./userService');

module.exports.authVerifyUsername = (req, res, next) => {
    //logger.info("POST request - verifyToken ... ");
    const bearerHeader = req.headers['authorization'];
    console.log("authVerifyUsername");
    console.log(req.url);
    //next();
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');

        const username = bearer[1];
        console.log(username);
        req.token = username;

        // check if username exists
        if (userService.checkUsername(username)) {
            console.log("Username - '" + username + "' exists");
            next();
        } else {
            res.status(404).send("Username doesn't exist");
        }
        // get role for that user


    } else {
        res.status(403).send("Forbidden")
    }

};

module.exports.authVerifyRole = (req, res, next) => {
    //logger.info("POST request - verifyToken ... ");
    //const bearerHeader = req.headers['authorization'];
    console.log("authVerifyRole");
    console.log(req.url);
    next();
    // if (typeof bearerHeader !== 'undefined') {
    //     const bearer = bearerHeader.split(' ');
    //     const url = req.headers.url;
    //     const username = bearer[1];
    //     //const role = userService.getUserRole(username);
    //     req.token = bearerToken;

    //     // check if username exists
    //     // if () {
    //     //     console.log("Role - '" + role + "' exists");
    //     //     next();
    //     // } else {
    //     //     res.status(404).send("Username doesn't exist");
    //     // }
    //     // get role for that user


    // } else {
    //     res.status(403).send("Forbidden")
    // }

};