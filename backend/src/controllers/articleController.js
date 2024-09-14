const express = require('express');
const articleCrud = require('../crud/articleCrud');
const authenticateToken = require('../middleware/authMiddleware');

const articleController = express.Router();

articleController.post('/', authenticateToken, async(req, res) => {
    try {
        const article = await articleCrud.createArticle(req.body, req.userId);
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/latest/:page', async(req, res) => {
    try {
        const limit = 10;
        const page = parseInt(req.params.page, 10) || 1
        const articles = await articleCrud.getLatestArticlesWithLimit(limit, page);
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/latest/:tag/:page', async(req, res) => {
    try {
        const limit = 10;
        const page = parseInt(req.params.page, 10) || 1;
        const tag = req.params.tags;
        const articles = await articleCrud.getLatestArticlesByTag(limit, page, tag);
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/', async(req, res) => {
    try {
        const articles = await articleCrud.getAllArticles();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/byUserId/:id', async(req, res) => {
    try {
        const userId = req.params.id;
        const articles = await articleCrud.getLatestAuthorArticles(userId);
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/:id', async(req, res) => {
    try {
        const article = await articleCrud.getArticleById(req.params.id);
        if(article){
            res.status(200).json(article);
        } else{
            res.status(404).json({ error: 'Article Not Found!' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = articleController;