"use strict";

const JWT = require("jsonwebtoken");
const User = require("../models/user.model");

const generarJWT = (uuid)=>{
    return new Promise((resolve, reject)=>{
        const payload = { _id: uuid };

        JWT.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: "4h"
        }, (err, token)=>{
            if(err) reject(err);
            else resolve(token);
        });
    });
};

const comprobarJWT = async (token)=>{
    try{
        if(!token) return;
        const { _id } = JWT.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ _id, estado: true });
        return user;
    } catch(error){
        return;
    }
};

module.exports = {
    generarJWT,
    comprobarJWT
};