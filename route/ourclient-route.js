const express = require('express');
const {
    get,
    getById,
    Post,
    Put,
    Delete, // Import the Delete function
} = require('../controllers/ourclient-controller');

const router = express.Router();

router.get('/', get);
router.get('/:id', getById);
router.post('/', Post);
router.put('/:id', Put);
router.delete('/:id', Delete); // Add the delete route here

module.exports = router;
