const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
