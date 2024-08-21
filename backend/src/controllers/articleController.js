const database = require("../config/dbconnection");
const Article = database.article;

exports.createArticle = (req, res) => {
  Article.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    body: req.body.body,
    tags: req.body.tags,
    userId: req.userId
  })
  .then(article => res.status(201).send(article))
  .catch(err => res.status(500).send({ message: err.message }));
};

exports.getLatestArticles = (req, res) => {
  Article.findAll({
    include: ["author"],
    order: [['creationDate', 'DESC']],
    limit: 10
  })
  .then(articles => res.status(200).send(articles))
  .catch(err => res.status(500).send({ message: err.message }));
};

exports.getArticleById = (req, res) => {
  Article.findByPk(req.params.id, { include: ["author"] })
    .then(article => {
      if (!article) {
        return res.status(404).send({ message: "Article Not Found!" });
      }
      res.status(200).send(article);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.updateArticleById = (req, res) => {
  Article.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
  .then(([rowsUpdated, [updatedArticle]]) => {
    if (rowsUpdated === 0) {
      return res.status(404).send({ message: "Article not found" });
    }
    res.status(200).send(updatedArticle);
  })
  .catch(err => res.status(500).send({ message: err.message }));
};