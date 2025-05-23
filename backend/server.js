require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

// Configure CORS to allow requests from your frontend origin
app.use(cors({ origin: 'https://5173-firebase-governgit-1747930796647.cluster-3gc7bglotjgwuxlqpiut7yyqt4.cloudworkstations.dev' }));