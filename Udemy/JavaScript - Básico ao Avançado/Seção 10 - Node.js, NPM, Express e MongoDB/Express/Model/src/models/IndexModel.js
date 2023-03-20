const mongoose = require('mongoose');

const IndexSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
});

const IndexModel = mongoose.model('Index', IndexSchema);

class Index {}

module.exports = Index;
