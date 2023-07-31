const express = require('express');
const router = express.Router();
const guriyahaController = require('../controllers/guriyahaController');
const multer = require('multer');

const upload = multer();

// GET all Guriyaha entries
router.get('/get/', guriyahaController.getAllGuriyaha);

// GET a single Guriyaha entry by ID
router.get('/get/:id', guriyahaController.getGuriyahaById);

// POST
router.post('/create', upload.single('imagePreview'), guriyahaController.createGuriyaha);

// PUT
router.put('/update/:id', guriyahaController.updateGuriyaha);

// DELETE
router.delete('/delete/:id', guriyahaController.deleteGuriyaha);

module.exports = router;
