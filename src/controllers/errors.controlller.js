module.exports.get404 = function(error, req, res, next) {
  res.status(404).send('Invalid input').json({
    message: error.message,
  });
  console.log('Error 404');
};
