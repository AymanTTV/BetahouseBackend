const jwt = require('jsonwebtoken');
const { usersModel } = require('../models/usersModel');
require('dotenv').config();

const AuthenticateRoute = (allowedRoles) => {
    return async (req, res, next) => {
        const tokenHeader = req.headers['authorization'];

        if (!tokenHeader) return res.status(401).send('Access Token is not provided');

        const token = tokenHeader.split(' ')[1];

        try {
            const tokenVerify = jwt.verify(token, process.env.SECRET_KEY);
            // console.log ('Testing token', tokenVerify.id);
            // Check if user exists
            const user = await usersModel.findById(tokenVerify.id);
            if (!user) return res.status(464).send('User not found');
            if (user.status !== 'active') return res.status(481).send('User is not active');

            // Check if user role is allowed
            if (!allowedRoles.includes(user.role)) {
                return res.status(403).send('You are not allowed to access this route');
            }

            // Attach user data to request object
            req.userData = user;

            next();
        } catch (error) {
            res.status(401).send(error.message);
        }
    };
};

module.exports = AuthenticateRoute;
