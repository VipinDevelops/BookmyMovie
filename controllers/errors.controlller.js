module.exports.get404 = function(error, req, res, next) {
  res.status(404).send('Invalid input');
  console.log('Error');
};
