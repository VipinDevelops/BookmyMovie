const express = require('express');
const bodyparser = require('body-parser');
const MovieRoutes = require('./routes/movie.routes');
const errorController = require('./controllers/errors.controlller');

// Database
require('./config/db');

// ENV
require('dotenv').config();
const PORT = process.env.PORT;

// initializing express app
const app = express();

// handle JSON req and response
app.use(express.json());

// solve cors error
const cors = require('cors');
app.use(cors());

// parsing request body's
app.use(bodyparser.urlencoded({extended: false}));

app.use('/movie', MovieRoutes);

// default response by server
app.use('/', (req, res) => {
  res.send('Welcome to my REST API ');
  console.log('API is UP and Working ');
});

// Error handler
app.use(errorController.get404);

// server start listening
app.listen(PORT, () => {
  console.log(`Server is now listening on PORT ${PORT} ..... `);
});
