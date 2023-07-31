const mongoose = require('mongoose');

const guriyahaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    type: String,
    area: String,
    address: String,
    age: Number,
    rent: String,
    deposit: String,
    parking: String,
    isAvailable: String,
    rooms: String,
    musqulaha: String,
    masterRoom: String,
    faahfaahin: String,
    imagePreview: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Guriyaha = mongoose.model('Guriyaha', guriyahaSchema, 'guriyaha');

module.exports = Guriyaha;
