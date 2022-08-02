// import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const noteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
        required: true
    },
    title: {
        type: String,
        required: true
    }, // String is shorthand for {type: String}
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "general"
    },

    date: {
        type: Date,
        default: Date.now
    },

});
module.exports = mongoose.model("Note", noteSchema)