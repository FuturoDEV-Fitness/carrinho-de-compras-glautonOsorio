const router = require("express").Router();

const OrdersController = require("../../controllers/OrdersController");

router.post("/", OrdersController.store);

module.exports = router;
