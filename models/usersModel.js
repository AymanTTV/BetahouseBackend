const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: String,
    gender: String,
    userPower: String,
});

const UserModel = mongoose.model('User', usersSchema, 'users');

module.exports = UserModel;
