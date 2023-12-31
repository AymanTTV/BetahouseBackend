const express = require('express');
const route = express.Router();
const {
    getUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser
} = require('../controllers/userController');

const AuthenticateRoute = require('../route/AuthenticationMiddleware');

// Get all users
route.get('/', AuthenticateRoute(['Admin']), getUsers);

// Get user by ID
route.get('/:id', AuthenticateRoute(['Admin']), getUserById);

// Create a new user
route.post('/', AuthenticateRoute(['Admin']), createUser);

// Update user by ID
route.put('/:id', AuthenticateRoute(['Admin']), updateUser);

// Delete user by ID
route.delete('/:id', AuthenticateRoute(['Admin']), deleteUser);

module.exports = route;
