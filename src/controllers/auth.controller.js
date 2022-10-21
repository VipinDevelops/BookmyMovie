const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../src/model/user.model');

require('dotenv').config();
const secret = process.env.SECRET;

module.exports = {
  register: (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        },
        (err, user) => {
          if (err) {
            console.log(err);
            return res
                .status(500)
                .send('There was a problem registering the user');
          }

          // if user is registered without errors
          // create a token
          const token = jwt.sign({id: user._id}, secret, {
            expiresIn: 86400, // expires in 24 hours
          });

          res.status(200).send({auth: true, token: token});
        },
    );
  },
  login: (req, res) => {
    User.findOne({email: req.body.email}, function(err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');

      // check if the password is valid
      const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password,
      );
      if (!passwordIsValid) {
        return res.status(401).send({auth: false, token: null});
      }

      // if user is found and password is valid
      // create a token
      const token = jwt.sign({id: user._id}, secret, {
        expiresIn: 86400, // expires in 24 hours
      });

      // return the information including token as JSON
      res.status(200).send({auth: true, token: token});
    });
  },
  me: (req, res) => {
    User.findById(req.userId, {password: 0}, function(err, user) {
      if (err) {
        return res.status(500).send('There was a problem finding the user.');
      }
      if (!user) return res.status(404).send('No user found.');
      res.status(200).send(user);
    });
  },
};
