const MenuItems = require("../models/menuItem.model");

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItems.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getMenuItems;
