module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define('article', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        subtitle: {
            type: Sequelize.STRING,
            allowNull: false
        },
        body: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        creationDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        lastModified: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        }
    });
    return Article;
}