const express = require('express');
const router = express.Router();
const xogtaShirkadaController = require('../controllers/xogtaShirkadaController');

// GET /xogtaShirkada
router.get('/get/', xogtaShirkadaController.getXogtaShirkada);

// GET /xogtaShirkada/:id
router.get('/get/:id', xogtaShirkadaController.getXogtaShirkadaById);

// POST /xogtaShirkada
router.post('/create', xogtaShirkadaController.createXogtaShirkada);

// PUT /xogtaShirkada/:id
router.put('/update/:id', xogtaShirkadaController.updateXogtaShirkada);

// DELETE /xogtaShirkada/:id
router.delete('/delete/:id', xogtaShirkadaController.deleteXogtaShirkada);

module.exports = router;
