const { createProduct } = require("./function/products.store");

class ProductsController {
  async store(req, res) {
    await createProduct(req, res);
  }
}

module.exports = new ProductsController();
