const { clientvalidation } = require('../validations/ourClients-validation');
const {  clientModel } = require('../models/ourClient-model');

const get = async (req, res, ) => {
    try {
        const getdat = await clientModel.find();
        res.status(200).send(getdat);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

// get by id
const getById = async (req, res,) => {
    try {
        const { id } = req.params;
        const clientgetbyid = await clientModel.findById(id);
        if (!clientgetbyid)
            return res.status(404).send({ message: 'this client not found' });
        res.status(200).send(clientgetbyid);
    } catch (error) {
        res.status(404).send(error.message);
    }
};
// pst the service
const Post = async (req, res, ) => {
    try {
        const { error } = clientvalidation(req.body);
        if (error) return res.status(400).send(error.message);

        const clientdata = await clientModel(req.body);
        await clientdata.save();
        res.status(201).send({
            status: true,
            clientdata,
            message: 'successfully created ',
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
};
// put or updatted service
const Put = async (req, res, ) => {
    try {
        const { error } = clientvalidation(req.body);
        if (error) return res.status(404).send(error.message);
        let { id } = req.params;
        const updatedata = await clientModel.findByIdAndUpdate(
            id,
            {
                ClientName: req.body.ClientName,
                Logo: req.body.Logo,
            },
            { new: true }
        );
        await updatedata.save();
        res.status(200).send({
            status: true,
            message: 'successfully updated data',
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const Delete = async (req, res) => {
    try {
        const { id } = req.params;
        // Delete specific data by ID
        const deletedData = await clientModel.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).send({
                status: false,
                message: 'Data not found',
            });
        }
        res.status(200).send({
            status: true,
            message: 'Successfully deleted',
            data: deletedData,
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Failed to delete data',
            error: error.message,
        });
    }
};
  
module.exports = {
    get,
    getById,
    Post,
    Put,
    Delete, // Add the delete function to the exports
};
  

