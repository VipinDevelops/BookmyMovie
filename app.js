const express = require('express');
const bodyparser = require('body-parser')
const MovieModel = require('./model/movies');
const MovieRoutes  = require('./routes/movieroutes')
const errorController = require('./controllers/errors')
//Database 
require('./database/db');
//ENV
require('dotenv').config()
var PORT = process.env.PORT;

//initializing express app 
const app = express();

// handle JSON req and response 
app.use(express.json());

//solving cors error 
const cors = require('cors');
app.use(cors())

//parsing request body's
app.use(bodyparser.urlencoded({extended:false}))

app.use('/api',MovieRoutes)

//default response by server 
app.get('/',(req,res)=>{
    res.send('my express server is now Runing ');
    console.log('Server is now running');
})



app.use(errorController.get404)

//server start listening 
app.listen(PORT,()=>{
    console.log(`Server is now listening on PORT ${PORT}..... `);
});