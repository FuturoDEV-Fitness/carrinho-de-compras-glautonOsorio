const router = require("express").Router();

const ProductsController = require("../../controllers/ProductsController");

router.post("/", ProductsController.store);

module.exports = router;
