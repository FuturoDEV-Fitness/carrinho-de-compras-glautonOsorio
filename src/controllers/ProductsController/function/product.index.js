const Database = require("../../../database/config/Database");

module.exports.findAllProducts = async (req, res) => {
  try {
    const query = "SELECT * FROM products";

    const result = await Database.query(query);

    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
