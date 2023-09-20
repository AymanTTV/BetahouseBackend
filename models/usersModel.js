const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'pending'],
        default: 'active'
    },
    role: {
        type: String,
        enum: ['superAdmin', 'Admin', 'customercare'],
        required: true
    }
});

const usersModel = mongoose.model('users', userSchema);

module.exports = { usersModel };
