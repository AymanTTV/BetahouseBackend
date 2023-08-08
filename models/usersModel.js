const mongoose = require('mongoose');

// Define the user schema
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
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'pending'],
        default: 'active',
    },
    role: {
        type: String,
        required: true,
    },
});

// Create the UserModel based on the usersSchema
const UserModel = mongoose.model('User', usersSchema, 'users');

module.exports = UserModel;
