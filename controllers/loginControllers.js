const { usersModel } = require('../models/usersModel');
const { loginValidation } = require('../validations/loginValidation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

        const SECRET_KEY = 'cbc1dcd368c08886addf599bf78dcaa679b5ede00ee9ed3be5259193fdd0bfc40fb81d5f33abdd3de6c4418db150b2dc474ae1d1a01e92d1e9765c86befd860a'; // Use the SECRET_KEY from .env

        // Generate JWT token with user data (id, name, role)
        const token = jwt.sign(
            {
                id: userGetData._id,
                email:userGetData.email,
                name: userGetData.name,
                role: userGetData.role,
            },
            SECRET_KEY,
            { expiresIn: '1h' } // Set expiration time as needed
        );

        // Respond with success and include the generated token in the header and body
        res.status(200).header('Authorization', `Bearer ${token}`).json({
            status: true,
            token: token,
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { login };
