const XogtaShirkada = require('../models/xogtaShirkadaModel');


// POST /xogtaShirkada
const createXogtaShirkada = async (req, res) => {
    try {
        const xogtaShirkada = new XogtaShirkada(req.body);
        const savedXogtaShirkada = await xogtaShirkada.save();
        res.json(savedXogtaShirkada);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating xogtaShirkada');
    }
};

// GET /xogtaShirkada
const getXogtaShirkada = async (req, res) => {
    try {
        const xogtaShirkada = await XogtaShirkada.find();
        res.json(xogtaShirkada);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving xogtaShirkada');
    }
};

// GET /xogtaShirkada/:id
const getXogtaShirkadaById = async (req, res) => {
    try {
        const xogtaShirkada = await XogtaShirkada.findOne({ id: req.params.id });
        if (!xogtaShirkada) {
            return res.status(404).send('xogtaShirkada not found');
        }
        res.json(xogtaShirkada);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving xogtaShirkada');
    }
};



// PUT /xogtaShirkada/:id
const updateXogtaShirkada = async (req, res) => {
    try {
        const updatedXogtaShirkada = await XogtaShirkada.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedXogtaShirkada) {
            return res.status(404).send('xogtaShirkada not found');
        }
        res.json(updatedXogtaShirkada);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating xogtaShirkada');
    }
};

// DELETE /xogtaShirkada/:id
const deleteXogtaShirkada = async (req, res) => {
    try {
        const deletedXogtaShirkada = await XogtaShirkada.findOneAndDelete({ id: req.params.id });
        if (!deletedXogtaShirkada) {
            return res.status(404).send('xogtaShirkada not found');
        }
        res.send('xogtaShirkada deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting xogtaShirkada');
    }
};

module.exports = {
    getXogtaShirkada,
    getXogtaShirkadaById,
    createXogtaShirkada,
    updateXogtaShirkada,
    deleteXogtaShirkada
};
