const About = require('../models/aboutModel');

// Create a new About entry
exports.createAbout = async (req, res) => {
    try {
        const about = new About(req.body);
        const savedAbout = await about.save();
        res.json(savedAbout);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating About entry');
    }
};

// GET - Get all About entries
exports.getAbout = async (req, res) => {
    try {
        const about = await About.find();
        res.json(about);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving About entries');
    }
};

// GET - Get an About entry by ID
exports.getAboutById = async (req, res) => {
    try {
        const about = await About.findOne({ id: req.params.id });
        if (!about) {
            return res.status(404).send('About entry not found');
        }
        res.json(about);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving About entry');
    }
};

// Update an existing About entry
exports.updateAbout = async (req, res) => {
    try {
        const updatedAbout = await About.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedAbout) {
            return res.status(404).send('About entry not found');
        }
        res.json(updatedAbout);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating About entry');
    }
};

// Delete an About entry
exports.deleteAbout = async (req, res) => {
    try {
        const deletedAbout = await About.findOneAndDelete({ id: req.params.id });
        if (!deletedAbout) {
            return res.status(404).send('About entry not found');
        }
        res.send('About entry deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting About entry');
    }
};
