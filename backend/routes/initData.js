const express = require('express');
const { requireLogin, adminMiddleware } = require('../common-middleware');
const { initialData } = require('../controllers/initData');
const router = express.Router();


router.post('/initialdata', requireLogin, adminMiddleware, initialData);


module.exports = router;