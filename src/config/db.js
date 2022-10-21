const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATABASE;

exports.connect = () => {
  mongoose
      .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to Database ');
      })
      .catch((error) => {
        console.log(`Unable to connect to Database,${error}`);
      });
};
