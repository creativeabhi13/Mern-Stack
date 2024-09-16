const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    token: {
        type:String,
    },
    emailToken: {
        type: String,
    },
    emailVerified: {
        type: Boolean,
        default: false
    },

},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
module.exports = User;
