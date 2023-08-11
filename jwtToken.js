const jwt = require('jsonwebtoken');
const { usersModel } = require('./models/usersModel');

const generateToken = (user) => {
    const SECRET_KEY = '12990099200202A1Y2M3A4N5T6V7V8'; // Use the SECRET_KEY from .env

    const token = jwt.sign(
        {
            id: user._id,
            name: user.name,
            role: user.role,
        },
        SECRET_KEY,
        { expiresIn: '1h' } // Set the expiration time (e.g., 1 hour)
    );

    return token;
};

module.exports = { generateToken };
