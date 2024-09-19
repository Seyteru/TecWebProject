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

articleController.get('/count', async(req, res) => {
    try{
        const totalArticles = await articleCrud.getArticlesNumber();
        res.status(200).json({ totalArticles });
    } catch(error){
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/latest/:page', async(req, res) => {
    try {
        const limit = 10;
        const page = parseInt(req.params.page) || 1;
        const articles = await articleCrud.getLatestArticlesWithLimit(limit, page);
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/latest/tag/:tag/:page', async(req, res) => {
    try {
        const limit = 10;
        const page = parseInt(req.params.page, 10) || 1;
        const tag = req.params.tag;
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

articleController.get('/author/:id/:page', async(req, res) => {
    try {
        const id = req.params.id;
        const limit = 10;
        const page = parseInt(req.params.page)
        const articles = await articleCrud.getLatestAuthorArticles(limit, page, id);
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