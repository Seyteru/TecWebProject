const express = require('express');
const articleCrud = require('../crud/articleCrud');
const {authenticateToken, authenticateTokenForAdminOrOwner} = require('../middleware/authMiddleware');

const articleController = express.Router();

const truncateText = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

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
        const limitedArticles = articles.map((article, index) => {
            if(index == 0){
                return {
                    ...article.get(),
                    body: truncateText(article.body, 50)
                };
            } else{
                const { body, ...restOfArticle } = article.get();
                return restOfArticle;
            }
        });
        res.status(200).json(limitedArticles);
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
        const limitedArticles = articles.map((article, index) => {
            if(index == 0){
                return {
                    ...article.get(),
                    body: truncateText(article.body, 50)
                };
            } else{
                const { body, ...restOfArticle } = article.get();
                return restOfArticle;
            }
        });
        res.status(200).json(limitedArticles);
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

articleController.get('/author/:id/:page', authenticateToken, async(req, res) => {
    try {
        const id = req.params.id;
        const limit = 10;
        const page = parseInt(req.params.page)
        const articles = await articleCrud.getLatestAuthorArticles(limit, page, id);
        const limitedArticles = articles.map((article, index) => {
            if(index == 0){
                return {
                    ...article.get(),
                    body: truncateText(article.body, 50)
                };
            } else{
                const { body, ...restOfArticle } = article.get();
                return restOfArticle;
            }
        });
        res.status(200).json(limitedArticles);
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

articleController.put('/:id', authenticateToken, authenticateTokenForAdminOrOwner, async(req, res) => {
    try {
        const article = await articleCrud.updateArticleById(req.params.id, req.body);
        if(article){
            res.status(200).json(article);
        } else{
            res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = articleController;