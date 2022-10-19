const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema({
    name:{
        required:true,
        type:String
    },
    //imageurl , actor
})

const movie =mongoose.model('movie',movieSchema);

module.exports = movie;