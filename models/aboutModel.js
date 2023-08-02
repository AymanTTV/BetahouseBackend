const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const aboutSchema = new mongoose.Schema({
    faahfaahinYar: {
        type: String,
    },
    faahfaahin: {
        type: String,
        required: true,
    },
});

// Add the auto-increment plugin to the schema
aboutSchema.plugin(autoIncrement.plugin, {
    model: 'About',
    field: 'id', // The field that should be auto-incremented
    startAt: 1, // The starting value for the auto-increment
    incrementBy: 1, // The increment value
});

const About = mongoose.model('About', aboutSchema, 'about');

module.exports = About;
