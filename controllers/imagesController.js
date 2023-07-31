const Image = require('../models/imagesModel');

// POST
exports.createImage = async (req, res) => {
    try {
        const image = new Image(req.body);
        const savedImage = await image.save();
        res.json(savedImage);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating image');
    }
};

// GET - Get all Images
exports.getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting images');
    }
};

// GET - Get an Image by ID
exports.getImageById = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.send('Image not found');
        }
        res.json(image);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting image');
    }
};

// PUT
exports.updateImage = async (req, res) => {
    try {
        const updatedImage = await Image.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedImage) {
            return res.send('Image not found');
        }
        res.json(updatedImage);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating image');
    }
};

// DELETE
exports.deleteImage = async (req, res) => {
    try {
        const deletedImage = await Image.findOneAndDelete({ id: req.params.id });
        if (!deletedImage) {
            return res.send('Image not found');
        }
        res.send('Image deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting image');
    }
};
