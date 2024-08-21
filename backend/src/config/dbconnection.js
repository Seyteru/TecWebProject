const Sequelize = require('sequelize');

const sequelize = new Sequelize('pressportal', 'postgres', 'Simone.2001', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
});

const database = {};
database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.articles = require('../datamodels/Article')(sequelize, Sequelize);
database.users = require('../datamodels/User')(sequelize, Sequelize);

database.users.hasMany(database.articles, { as: 'articles' });
database.articles.belongsTo(database.users, {
    foreignKey: 'userId',
    as: 'author'
});

module.exports = database;



