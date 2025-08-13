const validateEbookRequest = (req, res, next) => {
  const { email, orderId } = req.body;
  if (!email || !orderId) {
    return res.status(400).send('Email and order ID are required');
  }
  if (typeof orderId !== 'string') {
    return res.status(400).send('Invalid order ID format');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format');
  }
  next();
};

module.exports = { validateEbookRequest };