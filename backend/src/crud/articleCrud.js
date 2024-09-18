const { Article } = require('../config/dbconnection');

const createArticle = async(articleParams, userId) => {
    return await Article.create(articleParams, userId);
};

const getLatestArticlesWithLimit = async(limit, page) => {
    return await Article.findAll({
        limit: limit,
        offset: (page - 1) * limit,
        order: [['createdAt', 'DESC']]
    });
};

const getLatestArticlesByTag = async(limit, page, tag) => {
    return await Article.findAll({
        where: {
            tags: tag 
        },
        limit: limit,
        offset: (page - 1) * limit,
        order: [['createdAt', 'DESC']]
    });
};

const getArticlesNumber = async() => {
    return await Article.count();
}

const getAllArticles = async() => {
    return await Article.findAll();
};

const getArticleById = async(id) => {
    return await Article.findByPk(id);
};

const getLatestAuthorArticles = async(userId) => {
    return await Article.findAll({
        where: {
            userId: userId
        },
        limit: 10,
        order: [['createdAt', 'DESC']]
    });
};

const updateArticleById = async(id, updatedParams) => {
    const article = await Article.findByPk(id);
    if(article){
        return await article.update(updatedParams);
    } else{
        return null;
    }
};

const deleteArticleById = async(id) => {
    const article = await Article.findByPk(id);
    if(article){
        await article.destroy();
        return true;
    } else{
        return false;
    }
};

module.exports = { createArticle, getArticlesNumber ,getLatestArticlesWithLimit, getAllArticles, getArticleById, getLatestAuthorArticles, updateArticleById, deleteArticleById, getLatestArticlesByTag };