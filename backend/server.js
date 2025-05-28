const express = require('express');
const cors = require('cors');
const emailRoutes = require('./src/routes/email');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`listen to server at port ${PORT}`);
});