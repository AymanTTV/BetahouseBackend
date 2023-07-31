const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

// GET - Get all ContactForm entries
router.get('/get', contactFormController.getContactForms);

// GET - Get a ContactForm entry by ID
router.get('/get/:id', contactFormController.getContactFormById);

// POST - Create a new ContactForm entry
router.post('/create', contactFormController.createContactForm);

// PUT - Update an existing ContactForm entry
router.put('/update/:id', contactFormController.updateContactForm);

// DELETE - Delete a ContactForm entry
router.delete('/delete/:id', contactFormController.deleteContactForm);

module.exports = router;
