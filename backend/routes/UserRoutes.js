const express = require('express')
const router = express.Router()
const { validateRegisterRequest, validateLoginRequest, isRequestValidated } = require('../validators/validators')
const {register, login } = require('../controllers/User/UserController')
const { requireLogin } = require('../common-middleware/index')
// const User = require('../models/UserModel')

router.post('/user/register', validateRegisterRequest , isRequestValidated , register)
router.post('/user/login',validateLoginRequest , isRequestValidated , login)

router.post('/user/profile',requireLogin, (req,res) => {
    res.status(200).json({ user: 'profile'})
});

module.exports = router
