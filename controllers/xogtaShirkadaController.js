const XogtaShirkada = require('../models/xogtaShirkadaModel');

const getXogtaShirkada = async (req, res) => {
    try {
        const xogtaShirkadaData = await XogtaShirkada.find();
        res.status(200).json(xogtaShirkadaData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching xogtaShirkada data' });
    }
};

const getXogtaShirkadaById = async (req, res) => {
    const { id } = req.params;
    try {
        const xogtaShirkada = await XogtaShirkada.findById(id);
        if (!xogtaShirkada) {
            return res.status(404).json({ message: 'XogtaShirkada not found' });
        }
        res.status(200).json(xogtaShirkada);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching xogtaShirkada by ID' });
    }
};

const createXogtaShirkada = async (req, res) => {
    try {
        const newXogtaShirkada = new XogtaShirkada(req.body);
        await newXogtaShirkada.save();
        res.status(201).json(newXogtaShirkada);
    } catch (error) {
        res.status(500).json({ message: 'Error creating xogtaShirkada' });
    }
};

const updateXogtaShirkada = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedXogtaShirkada = await XogtaShirkada.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!updatedXogtaShirkada) {
            return res.status(404).json({ message: 'XogtaShirkada not found' });
        }
        res.status(200).json(updatedXogtaShirkada);
    } catch (error) {
        res.status(500).json({ message: 'Error updating xogtaShirkada' });
    }
};

const deleteXogtaShirkada = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedXogtaShirkada = await XogtaShirkada.findByIdAndDelete(id);
        if (!deletedXogtaShirkada) {
            return res.status(404).json({ message: 'XogtaShirkada not found' });
        }
        res.status(200).json({ message: 'XogtaShirkada deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting xogtaShirkada' });
    }
};

module.exports = {
    getXogtaShirkada,
    getXogtaShirkadaById,
    createXogtaShirkada,
    updateXogtaShirkada,
    deleteXogtaShirkada,
};
