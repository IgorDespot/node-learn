const userService = require('./userService');

module.exports.authVerifyUsername = (req, res, next) => {

    const bearerHeader = req.headers['authorization'];
    console.log("authVerifyUsername");

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');

        const username = bearer[1];

        req.token = username;
        userService.checkUsername(username, req, res, next);



    } else {
        res.status(403).send("Forbidden authVerifyUsername")
    }

};

module.exports.authVerifyRole = (req, res, next) => {
    //logger.info("POST request - verifyToken ... ");
    const bearerHeader = req.headers['authorization'];
    console.log("authVerifyRole");


    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const url = req.url;
        const username = bearer[1];

        //const role = 'user';
        req.token = username;

        userService.getUserRole(username, req, res, next);

    } else {
        res.status(403).send("Forbidden authVerifyRole")
    }

};