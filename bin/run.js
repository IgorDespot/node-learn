"use strict";

var service = require("../server/service")();
var http = require("http");


var server = http.createServer(service);

server.listen(3000);

server.on("listening", function() {
    console.log(`Node-Project is listening on ${server.address().port} in ${service.get('env')} mode.`)
});

module.exports = server;