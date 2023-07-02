const mongoose = require("mongoose");

const MenuItemSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  images: [String],
  ratings: Number,
  totalOrdered: Number,
});

const MenuItem = mongoose.model("MenuItems", MenuItemSchema);
module.exports = MenuItem;
