const Order = require('../models/order.model');

const findOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { findOrders };
