const mongoose = require('mongoose');

const MenuItemSchema = mongoose.Schema({
  itemName: String,
  price: Number,
  discount: Number,
  description: String,
  images: [{ url: String }],
  ratings: Number,
  totalOrdered: Number,
  category: String,
  tags: [String],
});

const MenuItem = mongoose.model('MenuItems', MenuItemSchema);
module.exports = MenuItem;
