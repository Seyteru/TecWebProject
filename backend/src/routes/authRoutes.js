const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken, authenticateTokenForAdmin } = require('../middleware/authMiddleware');

router.post('/register', authenticateToken, authenticateTokenForAdmin, authController.register);
router.post('/login', authController.login);

module.exports = router;