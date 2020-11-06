const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('User', UserSchema);