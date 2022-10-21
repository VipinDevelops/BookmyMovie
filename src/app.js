const express = require('express');
const bodyparser = require('body-parser');
const movieRoutes = require('./routes/movie.routes');
const authRoutes = require('./routes/auth.routes');
const errorController = require('./controllers/errors.controlller');
const cors = require('cors');
const app = express();
const {verifyToken} = require('./middlewares/VerifyToken');

// Database
require('./config/db').connect();

// handle JSON req and response
app.use(express.json());

// solve cors error
app.use(cors());

// parsing request body's
app.use(bodyparser.urlencoded({extended: false}));

app.use('/movie', verifyToken, movieRoutes);
app.use('/auth', authRoutes);

// Error handler
app.use(errorController.get404);

const PORT = process.env.PORT || 3000;
// server start listening
app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}/  `);
});
