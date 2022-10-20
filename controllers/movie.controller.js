
const Movie = require('../model/movie.model')

module.exports ={
        PostMovie: async(req,res)=>{
        const movie =  new Movie({
            name :req.body.name,
            genre :req.body.genre,
            actor: req.body.actor,
            language:req.body.language,
            dateRelease : req.body.dateRelease,
            booked : req.body.booked,
        })
        try {
            await movie.save();
            res.status(200).send(movie)
        } catch (error) {
            res.status(400).json({message:error.message})
        }},

        GetAllMovie:async(req,res)=>{
            try {
                const movies = await Movie.find();
                res.send(movies)
            } catch (error) {
                res.status(500).json({message:error.message})
            }
        },

        GetOneMovie:async(req,res)=>{
            try {
                const movie =await Movie.findById(req.params.id)
                res.json(movie)
            } catch (error) {
                res.status(500).json({message:error.message})
            }
        },

        UpdateMovie:async(req,res)=>{
            try {
                const id  = req.params.id;
                const update = req.body;
                const Updateoption = {new :true};
                const updatemovie = await Movie.findByIdAndUpdate(id, update, Updateoption)                
                res.send(updatemovie)
            } catch (error) {
                res.status(400).json({message:error.message})
                
            }
        },

        Bookmovie:async(req,res)=>{
            try{
                const movie = await Movie.findById(req.params.id);
                movie.booked = true;
                await movie.save();
                res.status(200).send(movie)
            }catch(error){
                res.status(400).json({message:error.message})
                
            }
        },

        DeleteMovie:async(req,res)=>{
            try {
                const id = req.params.id;
                const DeletedMoive = await Movie.findByIdAndDelete(id)
                res.send(` ${DeletedMoive.name} Movie has been deleted`)
            } catch (error) {
                res.status(400).json({message:error.message})
            }
        }



} 