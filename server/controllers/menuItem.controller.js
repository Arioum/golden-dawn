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
    // const groupedByCategory = categories.map((category) => {
    //   const categoryResult = menuItems.find(
    //     (item) => item._id === category
    //   ) || { items: [] };
    //   return { [category]: categoryResult.items };
    // });
    res.status(200).json(sortedMenuData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addNewMenuItem = async (req, res) => {
  const { itemName, price, discount, description, category, tags } = req.body;

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
