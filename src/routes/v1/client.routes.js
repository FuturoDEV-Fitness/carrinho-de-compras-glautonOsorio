const router = require("express").Router();

const ClientsController = require("../../controllers/ClientsController");

router.post("/", ClientsController.store);

module.exports = router;
