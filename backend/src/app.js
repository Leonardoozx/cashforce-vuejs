const express = require('express');
const cors = require('cors');

const app = express();

app.options('*', cors());
app.use(cors());

app.use(express.json());

module.exports = app;
