const express = require('express');
const router = express.Router();
const upload = require('../configs/multer');

// Controllers
const MenuItemController = require('../controllers/menuItem.controller');
const OrderController = require('../controllers/order.controller');

// Middlewares
const s3FileUploadMiddleware = require('../middlewares/s3uploadMiddleware');

//Routes
router.get('/orders', OrderController.findOrders);

router.get('/getMenuItems', MenuItemController.getMenuItems);

router.post(
  '/createItem',
  upload.array('images', 5),
  s3FileUploadMiddleware,
  MenuItemController.addNewMenuItem
);

router.get('/', (req, res) => {
  res.send('GD server says Hi');
});

module.exports = router;
