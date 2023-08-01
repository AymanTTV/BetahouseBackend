const express = require('express');
const router = express.Router();
const guriyahaController = require('../controllers/guriyahaController');




// GET all Guriyaha entries
router.get('/', guriyahaController.getAllGuriyaha);

// GET a single Guriyaha entry by ID
router.get('/:id', guriyahaController.getGuriyahaById);

// POST
router.post('/', guriyahaController.createGuriyaha);

// PUT
router.put('/:id', guriyahaController.updateGuriyaha);

// DELETE
router.delete('/:id', guriyahaController.deleteGuriyaha);

module.exports = router;
