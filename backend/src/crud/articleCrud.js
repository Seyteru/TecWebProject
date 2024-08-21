const { where } = require('sequelize');
const { Article } = require('../config/dbconnection');

const createArticle = async(articleParams) => {
    return await Article.create(articleParams);
};

const getLatestArticlesWithLimit = async() => {
    return await Article.findAll({
        limit: 10,
        order: [['creationDate', 'DESC']]
    });
};

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
        order: [['creationDate', 'DESC']]
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

module.exports = { createArticle, getLatestArticlesWithLimit, getAllArticles, getArticleById, getLatestAuthorArticles, updateArticleById, deleteArticleById };