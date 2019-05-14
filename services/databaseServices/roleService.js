const Role = require('../../models/roles/roles');
const logger = require('../../util/logger');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();






module.exports.createRole = (req, res) => {
 console.log('Create new role requested'); 
    console.log('You made a POST request: ', req.body);
    Role.create(req.body)
    .then(function(role){
        res.send(role);
    }).catch(function (err) {
      console.log(err);
      res.status(404).send("Cannot add role");
    })
    ;
    
  };

  module.exports.getAllRoles = (req, res, next) => {

    Role.find().then(function(roles){
      console.log(roles);
    console.log('Show all roles requested '); 
      res.send(roles);
      console.log('All roles shown '); 
     }).catch(function (err) {
       console.log(err)
      console.log('Show all roles failed'); 
      res.status(404).send("Cannot find roles");
    })
};