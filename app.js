var express = require('express');
var logger = require('./util/logger');
var path = require('path');
var connection = require('./util/db');
var usersRouter = require('./routes/users');
var fakeApiRouter = require('./routes/fakeApiRoutes');
var rolesRouter = require('./routes/roles');



var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/admin', adminRouter);



// API to use for our fake online api calls
// **
// app.use('/api', fakeApiRouter);



app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
app.use('/api', fakeApiRouter);


// app.use((req,res,next) => {
//     res.status(404).send('Error 404 Page not found!');
// });

module.exports = app;