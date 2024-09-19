const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define('Article', {
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
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    });
    return Article;
}