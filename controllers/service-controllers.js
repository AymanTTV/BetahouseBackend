const { serviceModel } = require('../models/service-model');
const { servicevalidation } = require('../validations/server-validation');

const get = async (req, res) => {
    try {
        const getdat = await serviceModel.find();
        res.status(200).send(getdat);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const getById = await serviceModel.findById(id);
        if (!getById)
            return res.status(404).send({ message: 'Service not found' });
        res.status(200).send(getById);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const Post = async (req, res) => {
    try {
        const { error } = servicevalidation(req.body);
        if (error) return res.status(400).send(error.message);

        const servicedata = new serviceModel(req.body);
        await servicedata.save();
        res.status(201).send({
            status: true,
            message: 'successfully created service',
            data: servicedata,
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const Put = async (req, res) => {
    try {
        const { error } = servicevalidation(req.body);
        if (error) return res.status(404).send(error.message);

        const { id } = req.params;
        const updatedata = await serviceModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.status(200).send({
            status: true,
            message: 'successfully updated data',
            data: updatedata
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const Delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await serviceModel.findByIdAndDelete(id);
        if (!deletedData)
            return res.status(404).send({ message: 'Service not found' });

        res.status(200).send({
            status: true,
            message: 'successfully deleted service',
            data: deletedData
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    get,
    getById,
    Post,
    Put,
    Delete,
};
