const express = require('express');
const {signup, login} = require('../controllers/authContoller');
const auth= require('../middleware/auth');
const roleCheck = require('../middleware/role');
const router = express.Router();

router.post('/signup',  signup);
router.get('/login', login);

module.exports = router;