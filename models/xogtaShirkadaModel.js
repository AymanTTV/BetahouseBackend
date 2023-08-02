const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

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

// Apply the AutoIncrement plugin to the schema, specifying the field to be auto-incremented
xogtaShirkadaSchema.plugin(AutoIncrement, { inc_field: 'id' });

const XogtaShirkada = mongoose.model('XogtaShirkada', xogtaShirkadaSchema, 'xogtaShirkada');

module.exports = XogtaShirkada;
