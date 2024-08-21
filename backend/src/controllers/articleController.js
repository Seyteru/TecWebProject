const express = require('express');
const articleCrud = require('../crud/articleCrud');

const articleController = express.Router();

articleController.post('/', async(req, res) => {
    try {
        const article = await articleCrud.createArticle(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

articleController.get('/latest', async(req, res) => {
    try {
        const articles = await articleCrud.getLatestArticlesWithLimit();
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

module.exports = articleController;