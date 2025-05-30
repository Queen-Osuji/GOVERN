const express = require('express');
const router = express.Router();

router.post('/submit-service-request', (req, res) => {
  console.log('Received service request:', req.body);
  res.status(200).json({ message: 'Service request received successfully!' });
});

module.exports = router;