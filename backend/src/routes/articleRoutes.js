const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { authenticateToken, authenticateTokenForAdminOrOwner } = require('../middleware/authMiddleware');

router.get('/', articleController.getAllArticles);
router.get('/count', articleController.countArticles);
router.get('/author/:id/count', authenticateToken, articleController.countAuthorArticles);
router.get('/tag/:tag/count', articleController.countArticlesByTag);
router.get('/:id', articleController.getArticleById);
router.get('/author/:id/:page', authenticateToken, articleController.getLatestAuthorArticles);
router.get('/latest/tag/:tag/:page', articleController.getLatestArticlesByTag);
router.get('/latest/:page', articleController.getLatestArticlesWithLimit);
router.post('/', authenticateToken, articleController.createArticle);
router.put('/:id', authenticateToken, authenticateTokenForAdminOrOwner, articleController.updateArticleById);
router.delete('/:id', authenticateToken, authenticateTokenForAdminOrOwner, articleController.deleteArticleById);

module.exports = router;

