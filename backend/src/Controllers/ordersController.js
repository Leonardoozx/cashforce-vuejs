const OrderServices = require('../Services/ordersService');

class OrdersController {
  constructor() {
    this.ordersServices = new OrderServices();
  }

  getAllOrders = async (_req, res) => {
    const allOrders = await this.ordersServices.getAllOrders(); 
    res.status(200).json(allOrders);
  };
}

module.exports = OrdersController;
