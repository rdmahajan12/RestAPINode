const Product = require("../model/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const getField = {};

  if (company) {
    getField.company = company;
  }

  if (name) {
    getField.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    getField.featured = featured;
  }

  let apiData = Product.find(getField);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 2;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const getProductData = await apiData;
  res
    .status(200)
    .json({ data: getProductData, productLength: getProductData.length });
};

const getAllProductsForTesting = async (req, res) => {
  res.status(200).json({ msg: "Get all products for testing" });
};

module.exports = { getAllProducts, getAllProductsForTesting };
