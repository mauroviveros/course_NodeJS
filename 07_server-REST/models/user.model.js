"use strict";

const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE",
        enum: [ "ADMIN_ROLE", "USER_ROLE" ]
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject();
    return user;
};

module.exports = model("User", UserSchema);