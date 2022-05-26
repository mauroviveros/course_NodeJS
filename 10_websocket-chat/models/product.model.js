"use strict";
const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    img: {
        type: String
    }
});

ProductSchema.methods.toJSON = function(){
    const { __v, estado, ...product } = this.toObject();
    return product;
};

module.exports = model("Product", ProductSchema);