const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Represents a Movie JSON
 * @constructor
 * @param {_id} _id - The Id of the moive.
 * @param {name} name - The name of the moive.
 * @param {string} genre - The genre of the moive.
 * @param {string} imageUrl - The imageUrl of the moive.
 * @param {Array} actors - The actor in the moive.
 * @param {string} language - The language of the moive.
 * @param {String} dateRelease - The dateRelease of the moive.
 */

// eslint-disable-next-line new-cap
const movieSchema = Schema({
  name: {
    required: true,
    type: String,
    maxlength: 50,
  },
  genre: {
    required: true,
    type: String,
    maxlength: 20,
  },
  imageUrl: {
    required: false,
    type: String,
  },
  actors: {
    required: false,
    type: Array,
  },
  language: {
    required: true,
    type: String,
  },
  dateRelease: {
    required: true,
    type: String,
  },
});

const movie = mongoose.model('movie', movieSchema);

module.exports = movie;
