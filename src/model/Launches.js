const mongoose = require('mongoose');

const LaucherSchema = new mongoose.Schema({
    provider: String,
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Articles',
        require: true
    }]
});
const Laucher = mongoose.model('Laucher', LaucherSchema);

module.exports = Laucher;






