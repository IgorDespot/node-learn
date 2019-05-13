const mongoose = require('mongoose');
var database = require('../config').database;
//var logger = require('./logger');

//const url = 'mongodb://' + database.user + ':' + database.password + '@' + database.host + ':' + database.port + '/' + database.name; 
const url = 'mongodb+srv://' + database.user + ':' + database.password + '@nodeproject-tu8wo.mongodb.net/test?retryWrites=true'

var connection = mongoose.connect(url , { useNewUrlParser: true});


module.exports = connection;
