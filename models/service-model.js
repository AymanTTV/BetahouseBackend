const mongoose = require('mongoose');
const serviceShmea = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Icon: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
});

const serviceModel = mongoose.model('service', serviceShmea);



module.exports = {
    serviceModel,
};
