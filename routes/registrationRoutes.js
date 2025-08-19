const express = require('express');
const { registerForEvent, getRegistrations } = require('../controllers/registrationController');
const auth = require('../middleware/auth');
const router = express.Router();
const roleCheck = require('../middleware/role');

router.post('/events/:id/register', auth, registerForEvent);
router.get('/events/:id/registrations', auth, getRegistrations);

module.exports = router;

