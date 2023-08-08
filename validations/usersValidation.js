const Joi = require('joi');

// User validation function using Joi schema
function usersValidation(user) {
    // Define the validation schema for the user object
    const userSchema = Joi.object({
        name: Joi.string().required(), // The 'name' field should be a required string
        email: Joi.string().email({ tlds: { allow: false } }), // The 'email' field should be a valid email address (optional)
        password: Joi.string().required(), // The 'password' field should be a required string
        status: Joi.string(), // The 'status' field can be any string (optional)
        role: Joi.string().required(), // The 'role' field should be a required string
    });

    // Validate the 'user' object against the defined schema
    return userSchema.validate(user);
}

module.exports = { usersValidation };
