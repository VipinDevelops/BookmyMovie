const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

require('dotenv').config();
const secret = process.env.SECRET;

module.exports = {
  verifyToken: (req, res, next) => {
    // check header or url parameters or post parameters for token
    const token =
      req.headers['x-access-token'] || req.body.token || req.query.token;
    if (!token) {
      return res
          .status(403)
          .send({auth: false, message: 'No token provided.'});
    }

    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res
            .status(500)
            .send({auth: false, message: 'Failed to authenticate token.'});
      }

      // if everything is good, save to request for use in other routes
      req.userId = decoded.id;
      next();
    });
  },
};
