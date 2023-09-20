const { usersModel } = require('../models/usersModel');
const { usersValidation } = require('../validations/usersValidation');
const bcrypt = require('bcrypt');

// Get all users
const getUsers = async (req, res) => {
    try {
        const userData = await usersModel.find();
        res.status(200).send(userData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const personalData = await usersModel.findOne({ id });
        if (!personalData) {
            return res.status(404).send({
                status: false,
                message: 'User not found'
            });
        }
        res.status(200).send(personalData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        // Validation
        const { error } = usersValidation(req.body);
        if (error) return res.status(400).send(error.message);

        // Check if user already exists
        const existingUser = await usersModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).send({
                status: false,
                message: 'This user already exists'
            });
        }

        // Hash password and save user data
        const postData = new usersModel(req.body);
        postData.password = await bcrypt.hash(postData.password, 10);

        // Save user data
        await postData.save();
        res.status(201).send({
            status: true,
            message: 'User created successfully',
            data: postData
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Update user by ID
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Authorization: Only allow users to update their own profile
        if (req.userData.id !== Number(id)) {
            return res.status(403).send({
                status: false,
                message: 'You are not allowed to update this user'
            });
        }

        // Validation
        const { error } = usersValidation(req.body);
        if (error) return res.status(400).send(error.message);

        // Update user data
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const updatedData = await usersModel.findOneAndUpdate({ id: Number(id) }, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).send({
                status: false,
                message: 'User not found'
            });
        }
        res.status(200).send({
            status: true,
            message: 'User updated successfully',
            data: updatedData
        });

    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Delete user by ID
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await usersModel.findOneAndDelete({ id: Number(id) });
        if (!deletedData) {
            return res.status(404).send({
                status: false,
                message: 'User not found'
            });
        }
        res.status(200).send({
            status: true,
            message: 'User deleted successfully',
            data: deletedData
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { getUsers, createUser, updateUser, getUserById, deleteUser };
