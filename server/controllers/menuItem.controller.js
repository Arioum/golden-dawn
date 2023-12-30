const MenuItem = require('../models/menuItem.model');
const MenuItems = require('../models/menuItem.model');

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItems.aggregate([
      {
        $group: {
          _id: '$category',
          itemsCount: { $count: {} },
          items: { $push: '$$ROOT' },
        },
      },
    ]);

    const categories = [
      'Starters',
      'Rice Preparation',
      'Biriyani',
      'Bread',
      'Main Course',
      "Pizza's and Pasta",
      'Dessert',
      'Ice creams',
      'Beverages',
    ];

    const customSort = (a, b) => {
      const indexA = categories.indexOf(a._id);
      const indexB = categories.indexOf(b._id);
      return indexA - indexB;
    };

    const sortedMenuData = menuItems.sort(customSort);
    res.status(200).json(sortedMenuData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addNewMenuItem = async (req, res) => {
  const { itemName, price, discount, description, isVegan, category, tags } = req.body;
  const images = req.images;
  
  const newMenuItemObj = new MenuItem({
    itemName,
    price,
    discount,
    description,
    isVegan,
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
