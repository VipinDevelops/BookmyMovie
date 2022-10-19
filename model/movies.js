const mongoose = require('mongoose');

/**
 * @typedef {Schema} MoviesSchema
 * @property {String} name
 */
const MoviesSchema = mongoose.Schema({
    name:{
        required:true,
        type:String
    },

})

const MovieModel = mongoose.model('movies',MoviesSchema);

exports.MovieModel = MovieModel;