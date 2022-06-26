const { requireLogin, userMiddleware } = require("../common-middleware/index");
const { addOrder, getOrders, getOrder } = require("../controllers/User/Order");
const router = require("express").Router();

router.post("/addOrder", requireLogin, userMiddleware, addOrder);
router.get("/getOrders", requireLogin, userMiddleware, getOrders);
router.post("/getOrder", requireLogin, userMiddleware, getOrder);

module.exports = router;