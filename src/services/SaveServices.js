const Articles = require("../model/Articles");
const Laucher = require('../model/Launches');
const Event = require('../model/Events');

class SaveServices {
    async listAll(data) {
        const skip = parseInt(data.page);

        const articles = await Articles.find().populate(['launchers', 'events']).limit(10).skip(skip);

        return articles;
    }


    async createArticle(props) {

        const { title, url, imageUrl, newSite, summary, publishedAt, updatedAT, featured, launchers, events } = props;


        const article = await Articles.create({ title, url, imageUrl, newSite, summary, publishedAt, updatedAT, featured });

        if (events) {
            await Promise.all(events.map(async event => {
                const createEvent = new Event({ ...event, articles: article._id });

                await createEvent.save();

                article.events.push(createEvent);
            }));

        }

        if (launchers) {
            await Promise.all(launchers.map(async launcher => {
                const createLauncher = new Laucher({ ...launcher, articles: article._id });

                await createLauncher.save();

                article.launchers.push(createLauncher);
            }));
        }

        return await article.save();
    }

    async listById(data) {
        return await Articles.findById(data).populate(['launchers', 'events']);
    }

    async deleteById(data) {
        return await Articles.findByIdAndRemove(data);
    }

    async updateById(data) {
        const { title, url, imageUrl, newSite, summary, publishedAt, updatedAT, featured, launchers, events } = data;

        const article = await Articles.findByIdAndUpdate(data, {
            title, url, imageUrl, newSite, summary, publishedAt, updatedAT, featured
        }, { new: true });

        article.events = [];
        article.lauchers = [];

        await Laucher.remove({ articles: article._id });
        await Event.remove({ articles: article._id });

        await Promise.all(events.map(async event => {
            const createEvent = new Event({ ...event, articles: article._id });

            await createEvent.save();

            article.events.push(createEvent);
        }));

        await Promise.all(launchers.map(async launcher => {
            const createLauncher = new Laucher({ ...launcher, articles: article._id });

            await createLauncher.save();

            article.launchers.push(createLauncher);
        }));

        return await article.save();
    }
}

module.exports = new SaveServices();