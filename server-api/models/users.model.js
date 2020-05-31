const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    name: { 
        type: String 
    },
    lastname: { 
        type: String 
    },
    email: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    phone: { 
        type: String 
    },
    latitud: { 
        type: Number 
    },
    longitud: {
        type: Number 
    },
}, { timestamps: { createdAt: true, updatedAt: true } });

module.exports = UserSchema;