const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbconnection");
const User = require("./User");

const Article = sequelize.define("Article", {
    articleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    creationDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    lastModified: {
        type: DataTypes.DATE
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
});

module.exports = Article;