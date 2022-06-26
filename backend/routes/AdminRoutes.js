const express = require('express');
const { register_admin, login_admin, logout_admin } = require('../controllers/AdminController');
const { validateRegisterRequest, isRequestValidated , validateLoginRequest } = require('../validators/validators');
const { requireLogin } = require('../common-middleware/index');
const router = express.Router();


router.post('/admin/register', validateRegisterRequest, isRequestValidated, register_admin);
router.post('/admin/login', validateLoginRequest, isRequestValidated, login_admin);
router.post('/admin/logout', logout_admin)


module.exports = router;