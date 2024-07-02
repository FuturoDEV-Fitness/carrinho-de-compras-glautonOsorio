const { Router } = require("express");
const routes = new Router();

const ClientRoutes = require("./v1/client.routes");
const ProductRoutes = require("./v1/product.routes");

routes.use("/clients", ClientRoutes);
routes.use("/products", ProductRoutes);
//routes.use("/carrinho");

module.exports = routes;
