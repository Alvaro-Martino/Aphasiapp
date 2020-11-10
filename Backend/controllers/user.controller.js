const USER = require('../models/user');
const bcrypt = require('bcryptjs');

const userCtrl = {};


userCtrl.getUsers = async(req, res) => {
    const user = await USER.find();
    res.json(user);
};

userCtrl.getUser = async(req, res) => {
    const user = await USER.findById(req.params.id);
    res.json(user);
};

userCtrl.createUser = async(req, res) => {
    req.body.pass = bcrypt.hashSync(req.body.pass);
    const user = new USER(req.body);
    await user.save();
    res.json({
        'status': 'Saved'
    });
};

userCtrl.editUser = async(req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass
    };
    await USER.findByIdAndUpdate(req.params.id, { $set: user }, { new: true });
    res.json({ status: 'user update' });
};

userCtrl.deleteUser = async(req, res) => {
    await USER.findByIdAndRemove(req.params.id);
    res.json({ status: 'user delete' });
};

module.exports = userCtrl;