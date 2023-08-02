const mongoose = require('mongoose');

const xogtaShirkadaSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    location: String,
    logo: {
        type: String,
        required: true,
    },
    email: String,
    complainEmail: String,
    complainPhone: String,
    facebook: String,
    tiktok: String,
    twitter: String,
    instagram: String
});

const XogtaShirkada = mongoose.model('XogtaShirkada', xogtaShirkadaSchema, 'xogtaShirkada');

module.exports = XogtaShirkada;
