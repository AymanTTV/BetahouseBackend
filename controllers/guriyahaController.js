const Guriyaha = require('../models/guriyahaModel');

// POST
exports.createGuriyaha = async (req, res) => {
    try {
        const guriyaha = new Guriyaha(req.body);
        const savedGuriyaha = await guriyaha.save();
        res.json(savedGuriyaha);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating Guriyaha');
    }
};

// PUT
exports.updateGuriyaha = async (req, res) => {
    try {
        const updatedGuriyaha = await Guriyaha.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedGuriyaha) {
            return res.send('Guriyaha not found');
        }
        res.json(updatedGuriyaha);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating Guriyaha');
    }
};

// GET all Guriyaha entries
exports.getAllGuriyaha = async (req, res) => {
    try {
        const guriyahaList = await Guriyaha.find();
        res.json(guriyahaList);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Guriyaha entries');
    }
};

// GET a single Guriyaha entry by ID
exports.getGuriyahaById = async (req, res) => {
    try {
        const guriyaha = await Guriyaha.findById(req.params.id);
        if (!guriyaha) {
            return res.send('Guriyaha entry not found');
        }
        res.json(guriyaha);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Guriyaha entry');
    }
};

// DELETE
exports.deleteGuriyaha = async (req, res) => {
    try {
        const deletedGuriyaha = await Guriyaha.findOneAndDelete({ _id: req.params.id });
        if (!deletedGuriyaha) {
            return res.send('Guriyaha not found');
        }
        res.send('Guriyaha deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting Guriyaha');
    }
};
