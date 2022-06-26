const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");

const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/User/Categories");

const {
  requireLogin,
  adminMiddleware,
} = require("../common-middleware/index");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/category/create",
  requireLogin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);

router.get("/category/getcategory", getCategories);

router.post(
  "/category/update",
  requireLogin,
  adminMiddleware,
//   upload.array("categoryImage"),
  updateCategories
);
router.post(
  "/category/delete",
  requireLogin,
  adminMiddleware,
  deleteCategories
);

module.exports = router;