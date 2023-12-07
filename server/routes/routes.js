const express = require('express');
const router = express.Router();
const upload = require('../configs/multer');

const MenuItemController = require('../controllers/menuItem.controller');
const OrderController = require('../controllers/order.controller');

// router.get("/orders", OrderController.findOrders)
router.get('/getMenuItems', MenuItemController.getMenuItems);
router.post(
  '/createItem',
  upload.array('images', 5),
  MenuItemController.addNewMenuItem
);

router.get('/', (req, res) => {
  res.send('GD server says Hi');
});

module.exports = router;
