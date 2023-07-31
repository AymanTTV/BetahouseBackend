const ContactForm = require('../models/contactFormModel');

// Get all ContactForm entries
exports.getContactForms = async (req, res) => {
    try {
        const contactForms = await ContactForm.find();
        res.json(contactForms);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error retrieving ContactForm entries' });
    }
};

// Get a ContactForm entry by ID
exports.getContactFormById = async (req, res) => {
    try {
        const contactForm = await ContactForm.findById(req.params.id);
        if (!contactForm) {
            return res.status(404).json({ error: 'ContactForm entry not found' });
        }
        res.json(contactForm);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error retrieving ContactForm entry' });
    }
};

// Create a new ContactForm entry
exports.createContactForm = async (req, res) => {
    try {
        const contactForm = new ContactForm(req.body);
        const savedContactForm = await contactForm.save();
        res.json(savedContactForm);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error creating ContactForm entry, please try again' });
    }
};

// Update an existing ContactForm entry
exports.updateContactForm = async (req, res) => {
    try {
        const updatedContactForm = await ContactForm.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedContactForm) {
            return res.status(404).json({ error: 'ContactForm entry not found' });
        }
        res.json(updatedContactForm);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error updating ContactForm entry' });
    }
};

// Delete a ContactForm entry
exports.deleteContactForm = async (req, res) => {
    try {
        const deletedContactForm = await ContactForm.findByIdAndDelete(req.params.id);
        if (!deletedContactForm) {
            return res.status(404).json({ error: 'ContactForm entry not found' });
        }
        res.json({ message: 'ContactForm entry deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error deleting ContactForm entry' });
    }
};
