const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Internal server error');
};

module.exports = { errorHandler };