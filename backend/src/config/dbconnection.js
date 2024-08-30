const Sequelize = require('sequelize');

const sequelize = new Sequelize('pressportal', 'postgres', 'Simone.2001', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
});

const User = require('../datamodels/User')(sequelize);
const Article = require('../datamodels/Article')(sequelize);

User.hasMany(Article, {
    as: 'articles',
    foreignKey: 'userId'
});

Article.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId'
});

module.exports = { sequelize, User, Article };



