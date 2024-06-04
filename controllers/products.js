const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Get all products" });
};

const getAllProductsForTesting = async (req, res) => {
  res.status(200).json({ msg: "Get all products for testing" });
};

module.exports = { getAllProducts, getAllProductsForTesting };
