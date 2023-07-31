const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

// POST
router.post('/create', imagesController.createImage);

// GET - Get all Images
router.get('/get', imagesController.getImages);

// GET - Get an Image by ID
router.get('/get/:id', imagesController.getImageById);

// PUT
router.put('/update/:id', imagesController.updateImage);

// DELETE
router.delete('/delete/:id', imagesController.deleteImage);

module.exports = router;
