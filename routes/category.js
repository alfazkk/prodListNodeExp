const router = require("express").Router();
const Category = require("../models/Category");
const Product = require("../models/Product");

router.post("/add", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const category = await Category.find({ parentId: null });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById({ _id: id });
    const subCategories = await Category.find({ parentId: id });
    const products = await Product.find({ category: id });
    res.status(200).json({ category, subCategories, products });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
