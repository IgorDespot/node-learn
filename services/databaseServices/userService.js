const User = require('../../models/users/users');
const logger = require('../../util/logger');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();






module.exports.createUser = (req, res) => {
  console.log('Create new user requested');
  console.log('You made a POST request: ', req.body);
  User.create(req.body)
    .then(function (user) {
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
    then(function (users) {
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

module.exports.getUserByName = (req, res, next) => {
  console.log('Show user by name requested');
  let userName = req.params.username;
  User.find({ username: userName }).
    populate('role').
    then(function (user) {
      console.log(user);
      console.log('Shown user by name');
      if (user.length < 1) {
        res.status(404).send("Cannot find user");
      } else {

        res.send(user);
      }
    }).catch(function (err) {
      console.log(err);
      res.status(404).send("Cannot find user");
    });
};

module.exports.deleteUserByName = (req, res, next) => {
  console.log('Delete single user requested');
  let nameUser = req.params.username;
  User.remove({ username: nameUser }).then(function (user) {
    console.log(user);
    if (user.deletedCount < 1) {
      res.status(404).send("Cannot find user");
    } else {

      res.send(user);
    }
  }).catch(function (err) {
    console.log(err);
    res.status(404).send("Cannot find user");
  });

};


module.exports.updateUser = (req, res) => {
  console.log('Update user requested');
  console.log('You made a UPDATE request: ', req.body);
  User.updateOne({ username: req.body.username }, req.body)
    .then(function (user) {
      if (user.deletedCount < 1) {
        res.status(404).send("User is not found");
      } else {
        res.send(user);
      }
    }).catch(function (err) {

      res.status(404).send("Cannot update user => " + err);
    })
    ;

};
