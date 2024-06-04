require("dotenv").config();
const express = require("express");
const productsRoute = require("./routes/products");
const connectDB = require("./db/connect");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to node");
});

app.use("/api/products", productsRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} is connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
