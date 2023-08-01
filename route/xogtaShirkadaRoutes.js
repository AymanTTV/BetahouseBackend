const express = require('express');
const router = express.Router();
const xogtaShirkadaController = require('../controllers/xogtaShirkadaController');

// GET /xogtaShirkada
router.get('/', xogtaShirkadaController.getXogtaShirkada);

// GET /xogtaShirkada/:id
router.get('/:id', xogtaShirkadaController.getXogtaShirkadaById);

// POST /xogtaShirkada
router.post('/', xogtaShirkadaController.createXogtaShirkada);

// PUT /xogtaShirkada/:id
router.put('/:id', xogtaShirkadaController.updateXogtaShirkada);

// DELETE /xogtaShirkada/:id
router.delete('/:id', xogtaShirkadaController.deleteXogtaShirkada);

module.exports = router;
