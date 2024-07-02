const { findAllProducts } = require("./function/product.index");
const { createProduct } = require("./function/products.store");

class ProductsController {
  async store(req, res) {
    await createProduct(req, res);
  }
  async index(req, res) {
    await findAllProducts(req, res);
  }
}

module.exports = new ProductsController();
