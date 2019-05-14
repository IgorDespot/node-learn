const userService = require('./userService');

module.exports.authVerifyUsername = (req, res, next) => {

    const bearerHeader = req.headers['authorization'];
    console.log("authVerifyUsername");

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');

        const username = bearer[1];

        req.token = username;

        // check if username exists
        if (userService.checkUsername(username)) {
            console.log("Username - '" + username + "' exists");
            next();
        } else {
            res.status(404).send("Username doesn't exist");
        }



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
        const role = userService.getUserRole(username);
        //const role = 'user';
        req.token = username;


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



    } else {
        res.status(403).send("Forbidden authVerifyRole")
    }

};