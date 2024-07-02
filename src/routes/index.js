const { Router } = require("express");
const routes = new Router();

const ClientRoutes = require("./v1/client.routes");
const ProductRoutes = require("./v1/product.routes");
const OrdersRoutes = require("./v1/order.routes");

routes.use("/clients", ClientRoutes);
routes.use("/products", ProductRoutes);
routes.use("/orders", OrdersRoutes);

module.exports = routes;
