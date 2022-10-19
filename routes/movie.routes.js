const express  = require('express');
const Movie =require('../model/movie.model')
const router = express.Router();

const {mongoose} = require('../database/db');




//Post Method 
router.post('/post',async (req,res)=>{
    const movie =  new Movie({
        name :req.body.name,
    })

    try {
        await movie.save();
        res.status(200).send(movie)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//Get all Method 
router.get('/getall',async(req,res)=>{
    
    try {
        const movies = await Movie.find();
        res.send(movies)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//Get One Method 
router.get('/getone/:id',(req,res)=>{
    res.send(req.params.id)
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