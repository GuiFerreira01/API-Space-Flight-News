const ConnectArticles = require("./ArticlesService");
const Articles = require("../../model/Articles");
const saveServices = require('../../services/SaveServices');

class Populate {
    async upsertArticlesBase(req, res) {

        const articles = await ConnectArticles.listArticles();

        const upsertArticlesBasePromises = articles.map(async (article) => {
            Articles.find({ title: article.title }, (error, data) => {

                if (error) {
                    console.log(error)
                    throw error
                }

                if (!data.length) {
                    saveServices.createArticle(article)
                } else {

                }
            })
        })
        const upsertArticlesBaseResult = await Promise.all(upsertArticlesBasePromises);

        return upsertArticlesBaseResult;
    }
};

module.exports = new Populate();