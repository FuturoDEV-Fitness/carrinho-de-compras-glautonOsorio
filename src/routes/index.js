const { Router } = require("express");
const routes = new Router();

const ClientRoutes = require("./v1/client.routes");

routes.use("/clients", ClientRoutes);
//routes.use("/produtos");
//routes.use("/carrinho");

module.exports = routes;
