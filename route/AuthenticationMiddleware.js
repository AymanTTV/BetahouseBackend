const jwt = require('jsonwebtoken');
const { usersModel } = require('../models/usersModel');

const AuthenticateRoute = (allowedRoles) => {
    const SECRET_KEY = 'cbc1dcd368c08886addf599bf78dcaa679b5ede00ee9ed3be5259193fdd0bfc40fb81d5f33abdd3de6c4418db150b2dc474ae1d1a01e92d1e9765c86befd860a'; // Use the SECRET_KEY from .env

    return async (req, res, next) => {
        // Log the Authorization header for debugging
        const tokenHeader = req.headers['authorization'];
        console.log('Token Header:', tokenHeader);

        // Exclude the POST /users route from token verification
        if (req.method === 'POST' && req.path === '/users') {
            return next(); // Allow requests to POST /users without token verification
        }

        const token = tokenHeader && tokenHeader.split(' ')[1];

        if (!token) {
            return res.status(401).send('Access Token is not provided');
        }

       

        try {
            const tokenVerify = jwt.verify(token, SECRET_KEY);

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
