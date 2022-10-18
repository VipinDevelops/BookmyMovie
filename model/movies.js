const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
    name:String,
})

const MovieModel = mongoose.model('movies',MoviesSchema);

exports.MovieModel = MovieModel;