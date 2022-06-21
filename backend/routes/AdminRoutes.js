const express = require('express')
const router = express.Router()

const {login_admin, register_admin, requireLogin } = require('../controllers/AdminController')
// const Admin = require('../models/UserModel')

router.post('/admin/register',register_admin)
router.post('/admin/login',login_admin)

// router.post('/admin/profile',requireLogin, (req,res) => {
//     res.status(200).json({ user: 'profile'})
// });

module.exports = router