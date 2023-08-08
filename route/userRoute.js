const express = require('express');
const route = express.Router();
const {
    getUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser
} = require('../controllers/userController');

// Get all users
route.get('/', getUsers);

// Get user by ID
route.get('/:id', getUserById);

// Create a new user
route.post('/', createUser);

// Update user by ID
route.put('/:id', updateUser);

// Delete user by ID
route.delete('/:id', deleteUser);

module.exports = route;
