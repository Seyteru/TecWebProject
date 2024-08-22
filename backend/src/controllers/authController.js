const express = require('express');
const authController = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../config/dbconnection');
const sequelize = require('../config/dbconnection');
const jwt = require('jsonwebtoken');

authController.post('/register', async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

authController.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;
        const result = await sequelize.query('SELECT * FROM Users WHERE username = $1', [username]);
        const user = result.rows[0];
        if(!user || (password != user.password)){
            return res.status(401).json({ error: 'Invalid Credentials!' });
        }
        const accessToken = jwt.sign({ id: user.id, username: user.username }, '8cd1d760c308a73dd025b1ecac0d621353a0687c0eee8e5af64b56fc3de56de3', {
            expiresIn: '1h'
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ error: 'Login Failure!'});
    }
});

module.exports = authController;