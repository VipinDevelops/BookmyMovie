const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import {isEmail} from 'validator';

/**
 * Represents a User JSON
 * @constructor
 * @param {name} name - The name of the user.
 * @param {string} email - The genre of the user.
 * @param {string}} password - The password of the user.
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'invalid Email'],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
