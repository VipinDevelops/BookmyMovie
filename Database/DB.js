const mongoose = require('mongoose');
require('dotenv').config()

var MongoDB_URI = process.env.MongoDB_URI;


module.exports.connect = mongoose.connect(MongoDB_URI, {useNewUrlParser:true,useUnifiedTopology:true}, ()=>{
    console.log('Connected to MongoDB DataBase');
})

