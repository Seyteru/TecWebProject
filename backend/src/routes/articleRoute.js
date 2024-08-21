module.exports = app => {
    const articles = require("../controllers/articleController");
  
    let router = require("express").Router();
  
    router.post("/", articles.createArticle);
  
    router.get("/", articles.getLatestArticles);
  
    router.get("/:id", articles.getArticleById);
  
    router.put("/:id", articles.updateArticleById);
  
    app.use("/api/articles", router);
  };