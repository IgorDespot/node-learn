const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    rolename: {
        type: String,
        required: true
    }
  })

  module.exports = mongoose.model('Role', RoleSchema);