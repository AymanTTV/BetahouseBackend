const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const aboutSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,

    },
    faahfaahinYar: {
        type: String,
    },
    faahfaahin: {
        type: String,
        required: true,
    },
});



const About = mongoose.model('About', aboutSchema, 'about');

module.exports = About;
