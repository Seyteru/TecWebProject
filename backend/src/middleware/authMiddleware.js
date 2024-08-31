const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next){
    const token = req.header('Authorization').split(' ')[1];
    if(!token){
        return res.status(401).json({ error: 'Denied Access!' });
    }
    try{
        const decoded = jwt.verify(token, '8cd1d760c308a73dd025b1ecac0d621353a0687c0eee8e5af64b56fc3de56de3');
        req.user = decoded;
        req.body.userId = decoded.id;
        next();
    } catch(error){
        return res.status(401).json({ error: 'Invalid Token!' });
    }
}

module.exports = authenticateToken;