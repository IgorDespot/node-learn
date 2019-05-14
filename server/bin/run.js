"use strict";

var app = require('../../app');
var server = require('../../config').server;
var db = require('../../util/db');


const port = (server.port || 3000);


app.listen(port, () => {
    console.log(`Express server started, listening on port ${port}`);
});
