const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const User = require('../models/UserModel')

router.post('/user/register',UserController.register)
router.post('/user/login',UserController.login)

module.exports = router