const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: String,
    phone: String,
    message: String,
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema, 'contactform');

module.exports = ContactForm;
