const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

module.exports = async function connect() {
    const mongoServer = new MongoMemoryServer();
    await mongoServer.start();

    const mongoUri = await mongoServer.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`MongoDB Successfully connected to ${mongoUri}`);
};
