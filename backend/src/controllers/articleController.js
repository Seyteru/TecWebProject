const articleCrud = require('../crud/articleCrud');

const truncateText = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

exports.createArticle = async(req, res) => {
    try {
        const { title, subtitle, body, tags, userId } = req.body;
        const article = await articleCrud.createArticle({
            title: title,
            subtitle: subtitle,
            body: body,
            tags: tags,
            userId: userId
        });
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.countArticles = async(req, res) => {
    try{
        const totalArticles = await articleCrud.countArticles();
        res.status(200).json({ totalArticles });
    } catch(error){
        res.status(500).json({ error: error.message });
    }
};

exports.getLatestArticlesWithLimit = async(req, res) => {
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
};

exports.getLatestArticlesByTag = async(req, res) => {
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
};

exports.getAllArticles = async(req, res) => {
    try {
        const articles = await articleCrud.getAllArticles();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLatestAuthorArticles = async(req, res) => {
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
};

exports.getArticleById = async(req, res) => {
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
};

exports.updateArticleById = async(req, res) => {
    try {
        const article = await articleCrud.updateArticleById(req.params.id, req.body);
        if(article){
            res.status(200).json(article);
        } else{
            res.status(404).json({ message: 'Article Not Found!' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

exports.deleteArticleById = async(req, res) => {
    try {
        if(articleCrud.deleteArticleById()){
            res.status(204).json({ message: 'Article Deleted!' });
        } else{
            res.status(404).json({ error: 'Article Not Found!' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};