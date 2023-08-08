const Joi = require('joi');

// User login validation schema
function loginValidation(user) {
    const loginSchema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required(),
    });
    return loginSchema.validate(user);
}

module.exports = { loginValidation };
