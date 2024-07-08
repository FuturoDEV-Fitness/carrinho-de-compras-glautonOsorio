const router = require("express").Router();

const ClientsController = require("../../controllers/ClientsController");

router.post("/", ClientsController.index);
router.post("/:id", ClientsController.index);
router.post("/", ClientsController.store);
router.post("/:id", ClientsController.update);
router.post("/:id", ClientsController.destroy);

module.exports = router;
