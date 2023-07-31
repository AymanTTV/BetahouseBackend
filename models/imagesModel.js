const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    guriId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guriyaha',
    },
    guriImages: [{
        type: String,
        required: true,
    }],
    bathroomImages: [{
        type: String,
        required: true,
    }],
});

const Image = mongoose.model('Image', imageSchema, 'images');

module.exports = Image;
