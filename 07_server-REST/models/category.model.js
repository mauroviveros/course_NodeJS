"use strict";
const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = model("Category", CategorySchema);