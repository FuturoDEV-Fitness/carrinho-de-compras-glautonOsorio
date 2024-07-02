const { createClient } = require("./function/client.store");

class ClientsController {
  async store(req, res) {
    await createClient(req, res);
  }
}

module.exports = new ClientsController();
