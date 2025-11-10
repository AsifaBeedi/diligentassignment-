const Product = require('../models/Product');

exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { name, price, image, description } = req.body;
    const product = await Product.create({ name, price, image, description });
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};
