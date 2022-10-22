const Movie = require('../model/movie.model');

module.exports = {
  PostMovie: async (req, res) => {
    const movie = new Movie({
      _id: req.body._id,
      name: req.body.name,
      genre: req.body.genre,
      imageUrl: req.body.imageUrl,
      actors: req.body.actors,
      language: req.body.language,
      dateRelease: req.body.dateRelease,
    });
    try {
      await movie.save();
      res.status(200).send(movie);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },

  GetAllMovie: async (req, res) => {
    try {
      const movies = await Movie.find();
      res.send(movies);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },

  GetOneMovie: async (req, res) => {
    try {
      const movie = await Movie.findById(req.params._id);
      res.json(movie);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },

  UpdateMovie: async (req, res) => {
    try {
      const _id = req.params._id;
      const update = req.body;
      const Updateoption = {new: true};
      const updatemovie = await Movie.findByIdAndUpdate(
          _id,
          update,
          Updateoption,
      );
      res.send(updatemovie);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },

  DeleteMovie: async (req, res) => {
    try {
      const _id = req.params._id;
      const DeletedMoive = await Movie.findByIdAndDelete(_id);
      res.send(` ${DeletedMoive.name} Movie has been deleted`);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
};
