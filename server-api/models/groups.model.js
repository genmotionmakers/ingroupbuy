const mongoose = require('mongoose');
const { Schema } = mongoose;


const GroupSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    coords: { 
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },   
}, { timestamps: { createdAt: true, updatedAt: true } });

module.exports = GroupSchema;