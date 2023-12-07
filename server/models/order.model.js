const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  orderID: Number,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const Orders = mongoose.model('Orders', OrderSchema);
module.exports = Orders;
