const mongoose = require('mongoose');
var database = require('../config').database;
//var logger = require('./logger');

const url = 'mongodb://' + database.user + ':' + database.password + '@' + database.host + ':' + database.port + '/' + database.name; 


var connection = mongoose.connect(url , { useNewUrlParser: true});

if(connection){
    console.log('Connection is created!');
    //logger.info('Connection is created!');

}else{
    console.log('You have problem with connection!');
    //logger.info('You have problem with connection!');
};

module.exports = connection;