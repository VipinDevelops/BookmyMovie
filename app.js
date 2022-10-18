const express = require('express');
const bodyparser = require('body-parser')

const MovieModel = require('./model/movies');

//Database 
require('./Database/DB');

//initializing express app 
const app = express();

//mongo db handle JSON req and response 
app.use(express.json());

//solving cors error 
const cors = require('cors');
app.use(cors())

//parsing request body's
app.use(bodyparser.urlencoded({extended:false}))

//default response by server 
app.use('/',(req,res)=>{
    res.send('my express server is now Runing ');
    console.log('Server is now running');
})


//server start listening 
app.listen(3000,()=>{
    console.log('Server is now listening');
});