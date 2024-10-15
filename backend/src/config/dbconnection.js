const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: console.log
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



