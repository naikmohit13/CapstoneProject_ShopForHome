const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/AdminController')
const Admin = require('../models/UserModel')

router.post('/admin/register',AdminController.register_admin)
router.post('/admin/login',AdminController.login_admin)

module.exports = router