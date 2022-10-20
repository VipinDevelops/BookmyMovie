const express = require('express');
const bodyparser = require('body-parser');
const movieRoutes = require('./routes/movie.routes');
const authRoutes = require('./routes/auth.routes');
const errorController = require('./controllers/errors.controlller');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Database
require('./config/db').connect();

// handle JSON req and response
app.use(express.json());

// solve cors error
app.use(cors());

// parsing request body's
app.use(bodyparser.urlencoded({extended: false}));

// default response by server
// app.use('/', (req, res) => {
//   res.send('Welcome to my REST API ');
//   console.log('API is UP and Working ');
// });

app.use('/movie', movieRoutes);
app.use('/auth', authRoutes);

// Error handler
app.use(errorController.get404);

const PORT = process.env.PORT || 3000;
// server start listening
app.listen(PORT, () => {
  console.log(`Server is now listening on PORT ${PORT} ..... `);
});
