const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema({
    name:{
        required:true,
        type:String
    },
    genre:{
        required:true,
        type:String
    },
    actor:{
        required:false,
        type:String
    },
    language:{
        required:true,
        type:String
    },
    dateRelease:{
        required:true,
        type:String
    },
    booked:{
        required:false,
        type:Boolean
    }

})

const movie =mongoose.model('movie',movieSchema);

module.exports = movie;