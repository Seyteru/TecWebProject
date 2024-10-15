const jwt = require('jsonwebtoken');
const { Article } = require('../config/dbconnection');

function authenticateToken(req, res, next){
    const token = req.header('Authorization').split(' ')[1];
    if(!token){
        return res.status(401).json({ error: 'Denied Access!' });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.body.userId = decoded.id;
        next();
    } catch(error){
        return res.status(401).json({ error: 'Invalid Token!' });
    }
}

function authenticateTokenForAdmin(req, res, next){
    try {
        if(req.user.role == 'admin'){
            next()
        } else{
            return res.status(403).json({ error: 'Unauthorized' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server Error!' })
    }
}

async function authenticateTokenForAdminOrOwner(req, res, next){
    try {
        const articleId = req.params.id;
        const article = await Article.findByPk(articleId);
        if(!article){
            return res.status(404).json({ error: 'Article Not Found!' });
        }
        if(article.userId == req.user.id || req.user.role == 'admin'){
            next()
        } else{
            return res.status(403).json({ error: 'Unauthorized!' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server Error!' });
    }
}

module.exports = {authenticateToken, authenticateTokenForAdmin, authenticateTokenForAdminOrOwner};