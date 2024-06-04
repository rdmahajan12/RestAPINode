const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

router.route("/").get(productsController.getAllProducts);
router.route("/testing").get(productsController.getAllProductsForTesting);

module.exports = router;
