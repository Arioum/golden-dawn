const express = require("express");
const router = express.Router();

const MenuItemController = require("../controllers/menuItem.controller");
const OrderController = require("../controllers/order.controller");

// router.get("/orders", OrderController.findOrders)

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
