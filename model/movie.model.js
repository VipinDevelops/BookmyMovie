const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Represents a Movie JSON
 * @constructor
 * @param {name} name - The name of the moive.
 * @param {string} genre - The genre of the moive.
 * @param {string} actor - The actor in the moive.
 * @param {string} language - The language of the moive.
 * @param {String} dateRelease - The dateRelease of the moive.
 * @param {boolean} booked - Whether the moive is booked or not.
 */

// eslint-disable-next-line new-cap
const movieSchema = Schema({
  name: {
    required: true,
    type: String,
  },
  genre: {
    required: true,
    type: String,
  },
  actor: {
    required: false,
    type: String,
  },
  language: {
    required: true,
    type: String,
  },
  dateRelease: {
    required: true,
    type: String,
  },
  booked: {
    required: false,
    type: Boolean,
  },
});

const movie = mongoose.model('movie', movieSchema);

module.exports = movie;
