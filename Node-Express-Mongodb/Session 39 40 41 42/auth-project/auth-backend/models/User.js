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
    tokens: [
        {
            token: {
                type: String,
                
            }
        }
    ]

},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
module.exports =User;
