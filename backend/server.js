require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const emailRoutes = require('./src/routes/emailRoutes')

const PORT = process.env.PORT ;
app.use(cors());
app.use(bodyParser.json())
app.use('/', emailRoutes)

console.log(`listen to server at port ${PORT}`)