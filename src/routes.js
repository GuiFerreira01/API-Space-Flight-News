const { Router } = require('express');
const articlesController = require('./controllers/ArticlesController');

const routes = new Router();

routes.get('/', articlesController.challenge);
routes.get('/articles', articlesController.listAll);
routes.post('/articles', articlesController.createArticle);
routes.get('/articles/:id', articlesController.getById);
routes.delete('/articles/:id', articlesController.deleteById);
routes.put('/articles/:id', articlesController.updateById);

module.exports = routes;
