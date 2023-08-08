// Import necessary modules and packages
const { usersModel } = require('../models/users-model');
const { loginValidation } = require('../validations/loginValidation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env file
// const TOKEN_SECRET = require('../env');

// Login function
const login = async (req, res) => {
    try {
        // Validate user input using Joi schema
        const { error } = loginValidation(req.body);
        if (error) {
            return res.status(449).send(error.message);
        }

        // Find user data based on the provided email
        const userGetData = await usersModel.findOne({
            email: req.body.email,
        });
        if (!userGetData) {
            return res.status(401).send({
                status: false,
                message: 'Username or password is incorrect',
            });
        }

        // Check if the provided password matches the stored hashed password
        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            userGetData.password
        );
        if (!isPasswordValid) {
            return res.status(401).send({
                status: false,
                message: 'Username or password is incorrect',
            });
        }

        // Generate JWT token with user data (id, name, role)
        const token = jwt.sign(
            {
                id: userGetData._id,
                name: userGetData.name,
                role: userGetData.role,
            },
            token // use the token secret from environment variables
        );

        // Respond with success and include the generated token in the header and body
        res.status(200).header('token', token).json({
            status: true,
            message: 'Successfully logged in',
            token: token,
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { login };
