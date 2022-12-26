const express = require('express');

const OrdersController = require('../Controllers/ordersController');

const router = express.Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAllOrders);

module.exports = router;
