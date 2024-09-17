const e = require('express');
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
    phone:{
        type:String,
        required:true,
        unique:true,
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
    email_sent_at:{
        type: Date
    },
    otp: {
        type: String,
    },
    otp_sent_at: {
        type: Date
    },
    otp_verified: {
        type: Boolean,
        default: false
    },

},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
module.exports = User;
