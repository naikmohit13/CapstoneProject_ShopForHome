const express = require("express");

const {
  addItemToCart,
  addToCart,
  getCartItems,
  removeCartItems,
} = require("../controllers/User/Cart");
const { requireLogin, userMiddleware } = require("../common-middleware");
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  requireLogin,
  userMiddleware,
  addItemToCart
);

router.post('/user/cart/addToCartByLogin', requireLogin, userMiddleware, addToCart);
router.get("/user/getCartItems", requireLogin, userMiddleware, getCartItems);
//new update
router.post(
  "/user/cart/removeItem",
  requireLogin,
  userMiddleware,
  removeCartItems
);

module.exports = router;