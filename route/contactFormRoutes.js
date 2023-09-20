const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

// GET - Get all ContactForm entries
router.get('/', contactFormController.getContactForms);

// GET - Get a ContactForm entry by ID
router.get('/:id', contactFormController.getContactFormById);

// POST - Create a new ContactForm entry
router.post('/', contactFormController.createContactForm);

// PUT - Update an existing ContactForm entry
router.put('/:id',  contactFormController.updateContactForm);

// DELETE - Delete a ContactForm entry
router.delete('/:id', contactFormController.deleteContactForm);

module.exports = router;
