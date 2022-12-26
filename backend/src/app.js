const express = require('express');
const cors = require('cors');

const orderRoutes = require('./Routes/order.routes');

const app = express();

app.options('*', cors());
app.use(cors());

app.use(express.json());

app.use('/orders', orderRoutes);

module.exports = app;
