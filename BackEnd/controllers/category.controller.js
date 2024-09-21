const asyncHandler = require("express-async-handler");
const Category = require("../models/category.model");
const Product = require("../models/product.model");

// [GET] /api/categories
module.exports.index = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
});

// [GET] /api/categories/all
module.exports.all = asyncHandler(async (req, res) => {
  const categories = await Category.find({}).sort({ _id: -1 });
  res.json(categories);
});

// [POST] /api/categories
module.exports.create = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  console.log(name, description);

  const categoryExists = await Category.findOne({ name });

  if (categoryExists) {
    res.status(400);
    throw new Error("Category name already exists");
  } else {
    const category = new Category({ name, description });

    if (category) {
      const createCategory = await category.save();
      res.status(201).json(createCategory);
    } else {
      res.status(400);
      throw new Error("Invalid category data");
    }
  }
});
// [DELETE] /api/categories/:id
module.exports.delete = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const products = await Product.findOne({
    category: id,
  });
  if (products) {
    res.status(400);
    throw new Error("Please delete all products with a relationship");
  }

  const category = await Category.find({ _id: id });
  if (category) {
    await Category.deleteOne({ _id: id });
    res.json({ message: "Category deleted" });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// [GET] /api/categories/:id
module.exports.show = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findById(id);
  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// [PATCH] /api/categories/:id
module.exports.update = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const name = req.body.name;
  const description = req.body.description;
  const category = await Category.findById(id);

  if (category) {
    category.name = name;
    category.description = description;

    const updateCategory = await category.save();

    res.json(updateCategory);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});
