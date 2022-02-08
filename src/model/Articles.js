const mongoose = require('mongoose');


const ArticlesSchema = new mongoose.Schema({
        title: { type: String, require: true },
        url: { type: String, require: true },
        imageUrl: { type: String, require: true },
        newsSite: { type: String, require: true },
        summary: { type: String, require: true },
        publishedAt: { type: String, require: true },
        updatedAT: { type: String, require: true },
        featured: { type: Boolean, require: true, default: false },
        launchers: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Laucher',
        }],
        events: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event',
        }]

});

const Articles = mongoose.model('Articles', ArticlesSchema);

module.exports = Articles;






