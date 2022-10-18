const express = require('express');
const bodyparser = require('body-parser')
const app = express();

app.use(bodyparser.urlencoded({extended:false}))

app.use('/',(req,res)=>{
    res.send('my express server is now Runing ');
    console.log('Server is now running');
})

app.listen(3000,()=>{
    console.log('Server is now listening');
});