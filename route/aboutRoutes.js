const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// POST - Create a new About entry
router.post('/', aboutController.createAbout);

// GET - Get all About entries
router.get('/', aboutController.getAbout);

// GET - Get an About entry by ID
router.get('/:id', aboutController.getAboutById);

// PUT - Update an existing About entry
router.put('/:id', aboutController.updateAbout);

// DELETE - Delete an About entry
router.delete('/:id', aboutController.deleteAbout);

module.exports = router;
