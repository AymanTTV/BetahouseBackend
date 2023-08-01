const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// POST
router.post('/', usersController.createUser);

// GET - Get all Users
router.get('/', usersController.getUsers);

// GET - Get a User by ID
router.get('/:id', usersController.getUserById);

// PUT
router.put('/:id', usersController.updateUser);

// DELETE
router.delete('/:id', usersController.deleteUser);

module.exports = router;
