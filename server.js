const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to DB");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
