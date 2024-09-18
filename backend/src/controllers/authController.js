const express = require('express');
const authController = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../config/dbconnection');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authMiddleware');

authController.post('/register', authenticateToken, async(req, res) => {
    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username: username, password: hashedPassword, role: role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

authController.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username: username } });
        if(!user){
            return res.status(401).json({ error: error.message });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({ error: 'Invalid Credentials!' });
        }
        const accessToken = jwt.sign({ id: user.id, username: user.username, role: user.role }, '8cd1d760c308a73dd025b1ecac0d621353a0687c0eee8e5af64b56fc3de56de3', {
            expiresIn: '1h'
        });
        res.status(200).json(accessToken)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = authController;