const cron = require('node-cron');
const populateArticles = require('./jobs/populateArticles');


cron.schedule('0 0 9 * * *', function () {
    populateArticles.upsertArticlesBase();
    console.log("Updated")
});
