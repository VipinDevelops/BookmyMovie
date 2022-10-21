const express = require('express');
const cors = require('cors');
const {verifyToken} = require('./middlewares/VerifyToken');
const bodyparser = require('body-parser');
const movieRoutes = require('./routes/movie.routes');
const authRoutes = require('./routes/auth.routes');
const errorController = require('./controllers/errors.controlller');
const app = express();
const PORT = process.env.PORT || 3000;

// Database
require('./config/db').connect();

// USE
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/movie', verifyToken, movieRoutes);
app.use('/auth', authRoutes);

// POST
app.post('/welcome', verifyToken, (req, res) => {
  res.send('Welcome to my REST API 🙌');
});

// Error handler
app.use(errorController.get404);

app.listen(PORT, () => {
  console.log(`Application is Running on http://localhost:${PORT}/  `);
});
