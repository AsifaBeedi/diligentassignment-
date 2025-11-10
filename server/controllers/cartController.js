const CartItem = require('../models/CartItem');

exports.getCart = async (req, res, next) => {
  try {
    const items = await CartItem.find().populate('productId');
    res.json({ success: true, data: items });
  } catch (err) {
    next(err);
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity = 1 } = req.body;
    let item = await CartItem.findOne({ productId });
    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      item = await CartItem.create({ productId, quantity });
    }
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await CartItem.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ success: false, message: 'Cart item not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};
