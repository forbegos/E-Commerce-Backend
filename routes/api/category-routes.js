const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryId = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryId) {
      res.status(404).json({ message: "No category with that id!" });
    }
    res.status(200).json(categoryId);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
