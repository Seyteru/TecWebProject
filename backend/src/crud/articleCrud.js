const { Article } = require('../config/dbconnection');
const { Op } = require('sequelize');

const createArticle = async(articleParams) => {
    return await Article.create(articleParams);
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
            tags: {
                [Op.contains]: [tag]
            } 
        },
        limit: limit,
        offset: (page - 1) * limit,
        order: [['createdAt', 'DESC']]
    });
};

const countArticles = async() => {
    return await Article.count();
};

const countAuthorArticles = async(userId) => {
    return await Article.count({
        where: {
            userId: userId
        }
    });
};

const countArticlesByTag = async(tag) => {
    return await Article.count({
        where: {
            tags: {
                [Op.contains]: [tag]
            }
        }
    });
};

const getAllArticles = async() => {
    return await Article.findAll();
};

const getArticleById = async(id) => {
    return await Article.findByPk(id);
};

const getLatestAuthorArticles = async(limit, page, userId) => {
    return await Article.findAll({
        where: {
            userId: userId
        },
        limit: limit,
        offset: (page - 1) * limit,
        order: [['createdAt', 'DESC']]
    });
};

const updateArticleById = async(id, articleParams) => {
    const article = await Article.findByPk(id);
    if(article){
        return await article.update(articleParams);
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

module.exports = { createArticle, countAuthorArticles, countArticlesByTag, countArticles ,getLatestArticlesWithLimit, getAllArticles, getArticleById, getLatestAuthorArticles, updateArticleById, deleteArticleById, getLatestArticlesByTag };