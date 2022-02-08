const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
    provider: String,
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Articles',
    }]
});
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;






