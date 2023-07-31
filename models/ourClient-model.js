const mongoose = require('mongoose');

const cleintShmea = new mongoose.Schema({
    ClientName: {
        type: String,
        required: true,
    },
    Logo: {
        type: String,
        required: true,
    },
});

const clientModel = mongoose.model('client', cleintShmea);



module.exports = {
    clientModel,
  
};
