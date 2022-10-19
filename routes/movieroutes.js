const express  = require('express');
const router = express.Router();

//Post Method 
router.post('/post',(req,res)=>{
    res.send('POST API')
})

//Get all Method 
router.get('/getall',(req,res)=>{
    res.send('Get All API')
})

//Get One Method 
router.get('/getone/:id',(req,res)=>{
    res.send('Get One API')
})

//Update by ID Method 
router.patch('/update/:id',(req,res)=>{
    res.send('Update by ID API')
})

//Delete by ID Method 
router.delete('/delete/:id',(req,res)=>{
    res.send('Delete by ID API')
})

module.exports = router;