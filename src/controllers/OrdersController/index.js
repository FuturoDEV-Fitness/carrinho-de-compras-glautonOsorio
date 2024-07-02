const { createOrders } = require("./function/orders.store");

class OrdersController {
  async store(req, res) {
    await createOrders(req, res);
  }
}

module.exports = new OrdersController();
