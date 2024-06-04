require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/product");
const ProductData = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.create(ProductData);
    console.log("create data");
  } catch (error) {
    console.log(error);
  }
};

start();
