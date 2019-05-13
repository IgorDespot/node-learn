var express = require('express');
//var logger = require('./util/logger');
var path = require('path');
var connection = require('./util/db');
var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//app.use('/admin', adminRouter);
//app.use('/users', usersRouter);

app.use((req,res,next) => {
    res.status(404).send('Error 404 Page not found!');
});

module.exports = app;