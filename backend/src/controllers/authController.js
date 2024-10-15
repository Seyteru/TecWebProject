const bcrypt = require('bcryptjs');
const { User } = require('../config/dbconnection');
const jwt = require('jsonwebtoken');

exports.register = async(req, res) => {
    try {
        const { username, password, role } = req.body;
        const repeatedUser = await User.findOne({ where: { username: username } });
        if(repeatedUser){
            return res.status(400).json({ error: 'Existing Username!' })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username: username, password: hashedPassword, role: role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async(req, res) => {
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
        const accessToken = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.status(200).json(accessToken)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};