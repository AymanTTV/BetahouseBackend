const express = require('express');
const router = express.Router();
const xogtaShirkadaController = require('../controllers/xogtaShirkadaController');

// GET all xogtaShirkada
router.get('/', xogtaShirkadaController.getXogtaShirkada);

// GET xogtaShirkada by ID
router.get('/:id', xogtaShirkadaController.getXogtaShirkadaById);

// POST new xogtaShirkada
router.post('/', xogtaShirkadaController.createXogtaShirkada);

// PUT update xogtaShirkada
router.put('/:id', xogtaShirkadaController.updateXogtaShirkada);

// DELETE xogtaShirkada by ID
router.delete('/:id', xogtaShirkadaController.deleteXogtaShirkada);

module.exports = router;
