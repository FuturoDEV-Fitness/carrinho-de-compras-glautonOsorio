const router = require("express").Router();

const ProductsController = require("../../controllers/ProductsController");

router.post("/", ProductsController.store);
router.get("/", ProductsController.index);
router.get("/:id", ProductsController.index);

module.exports = router;
