const User = require('../../models/users/users');
const logger = require('../../util/logger');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();






module.exports.createUser = (req, res) => {
 //   logger.info('Create new user requested'); 
    console.log('You made a POST request: ', req.body);
    User.create(req.body)
    .then(function(user){
        res.send(user);
    }).catch(function (err) {
      console.log(err);
      res.status(404).send("Cannot add user");
    })
    ;
  };


  module.exports.getAllUsers = (req, res, next) => {

    User.find().
    populate("role").
    then(function(users){
      console.log(users);
    console.log('Show all users requested '); 
      res.send(users);
      console.log('All users shown '); 
     }).catch(function (err) {
       console.log(err)
      console.log('Show all users failed'); 
      res.status(404).send("Cannot find users");
    })
};