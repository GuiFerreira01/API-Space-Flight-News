const saveServices = require('../services/SaveServices');
const Articles = require("../model/Articles");
const Laucher = require('../model/Launches');
const Event = require('../model/Events');


class ArticleController {
  async challenge(req, res) {
    return res.send("Back-end Challenge 2021 🏅 - Space Flight News");
  };

  async createArticle(req, res) {
    try {
      const article = await saveServices.createArticle(req.query.page);

      console.log(article)
      console.log(test)
      return res.status(201).json(article)

    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Registration falied' });
    }
  };

  async listAll(req, res, next) {
    try {


      const resultUser = await saveServices.listAll(req.query);


      return res.status(200).json(resultUser);

    } catch (err) {
      console.log(err);
      res.status(400).json({ error: 'Error Loading' });
    }

  };

  async getById(req, res, next) {
    try {

      const article = await saveServices.listById(req.params.id);
      return res.status(200).json(article);

    } catch (err) {
      console.log(err);
      res.status(400).json({ error: 'Error Loading' });
    }
  };

  async deleteById(req, res, next) {
    try {

      const article = await saveServices.deleteById(req.params.id);

      return res.status(204).send();
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: 'Error Loading' });
    }
  };

  async updateById(req, res) {
    try {

      const article = await saveServices.createArticle(req.body);

      console.log(article, req.body);
      return res.status(200).json(article);

    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Registration falied' });
    }
  };
}

module.exports = new ArticleController();