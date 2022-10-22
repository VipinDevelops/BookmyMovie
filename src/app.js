const express = require('express');
const {verifyToken} = require('./middleware/VerifyToken');
const bodyparser = require('body-parser');
const movieRoutes = require('./routes/movie.routes');
const authRoutes = require('./routes/auth.routes');
const errorController = require('./controllers/errors.controlller');

// App
const app = express();
const PORT = process.env.PORT || 3000;

// Security
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// Database
require('./config/db').connect();

// MIDDLEWARE
app.set('trust proxy', 1);
app.use(
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 100 request per windowMs
    }),
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(bodyparser.urlencoded({extended: false}));

// ROUTES
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
