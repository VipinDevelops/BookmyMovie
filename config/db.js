const mongoose = require('mongoose');
require('dotenv').config()

let MongoDB_URI = process.env.DATABASE;

mongoose
  .connect(MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to Database ");
  })
  .catch((error) => {
    console.log(`Can not connect to Database, ${error}`);
  });

  module.exports = mongoose
  