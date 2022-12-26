const {
  Orders,
  Providers,
  Users,
  Buyers,
  Cnpjs,
} = require('../database/models');

class OrdersServices {
  getAllOrders = async () => {
    const allOrders = await Orders.findAll({
      include: [
        { model: Providers, as: 'provider' },
        { model: Users, as: 'user' },
        { model: Buyers, as: 'buyer' },
        { model: Cnpjs, as: 'cnpj' },
      ],
    });
    return allOrders;
  };
}

module.exports = OrdersServices;
