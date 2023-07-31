const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// POST
router.post('/create', usersController.createUser);

// GET - Get all Users
router.get('/get', usersController.getUsers);

// GET - Get a User by ID
router.get('/get/:id', usersController.getUserById);

// PUT
router.put('/update/:id', usersController.updateUser);

// DELETE
router.delete('/delete/:id', usersController.deleteUser);

module.exports = router;
