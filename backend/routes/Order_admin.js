const express = require("express");
const { requireLogin, adminMiddleware } = require("../common-middleware");
const {
  updateOrder,
  getCustomerOrders,
} = require("../controllers/Order");
const router = express.Router();

router.post(`/order/update`, requireLogin, adminMiddleware, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireLogin,
  adminMiddleware,
  getCustomerOrders
);

module.exports = router;