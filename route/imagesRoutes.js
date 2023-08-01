const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

// POST
router.post('/', imagesController.createImage);

// GET - Get all Images
router.get('/', imagesController.getImages);

// GET - Get an Image by ID
router.get('/:id', imagesController.getImageById);

// PUT
router.put('/:id', imagesController.updateImage);

// DELETE
router.delete('/:id', imagesController.deleteImage);

module.exports = router;
