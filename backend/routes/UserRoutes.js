const express = require('express')
const router = express.Router()

const {register, login, requireLogin} = require('../controllers/UserController')
const User = require('../models/UserModel')

router.post('/user/register',register)
router.post('/user/login',login)

router.post('/user/profile',requireLogin, (req,res) => {
    res.status(200).json({ user: 'profile'})
});

module.exports = router
