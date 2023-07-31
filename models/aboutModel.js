const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    faahfaahinYar: {
        type: String,
        required: true,
    },
    faahfaahin: {
        type: String,
        required: true,
    },
});

const About = mongoose.model('About', aboutSchema, 'about');

module.exports = About;
