const UserModel = require('../models/usersModel');

// POST - Create a user
exports.createUser = async (req, res) => {
    try {
        const user = new UserModel(req.body);
        const createdUser = await user.save();
        res.json(createdUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error saving data');
    }
};

// GET - Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving users');
    }
};

// GET - Get a user by ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserModel.findOne({ id: userId });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving user');
    }
};

// PUT - Update a user
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, address, gender, userPower } = req.body;

    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            { id: userId },
            { name, email, address, gender, userPower },
            { new: true, useFindAndModify: false }
        );

        if (!updatedUser) {
            return res.status(404).send('User not found');
        }

        res.send(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating user');
    }
};

// DELETE - Delete a user
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await UserModel.findOneAndDelete({ id: userId });

        if (!deletedUser) {
            return res.status(404).send('User not found');
        }

        res.send('User deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting user');
    }
};
