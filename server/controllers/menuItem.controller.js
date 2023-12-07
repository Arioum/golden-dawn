const MenuItem = require('../models/menuItem.model');
const MenuItems = require('../models/menuItem.model');

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItems.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addNewMenuItem = async (req, res) => {
  const { itemName, price, discount, description, category, tags } = req.body

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  const images = req.files.map((file) => ({
    url: `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
  }));

  const newMenuItemObj = new MenuItem({
    itemName,
    price,
    discount,
    description,
    images,
    category,
    tags,
    ratings: 0,
    totalOrdered: 0,
  });

  try {
    const savedMenuItem = await newMenuItemObj.save();
    console.log('Saved MenuItem:', savedMenuItem);
    res.status(201).json({ message: 'Item created successfully' });
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getMenuItems, addNewMenuItem };
