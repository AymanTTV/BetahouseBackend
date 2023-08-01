const express = require('express');
const {
    get,
    getById,
    Post,
    Put,
    Delete, // Adding the delete method from the controller
} = require('../controllers/service-controllers');
const router = express.Router();

router.get('/', get);
router.get('/:id', getById);
router.post('/', Post);
router.put('/:id', Put);
router.delete('/:id', Delete); // Adding the delete route

module.exports = router;
