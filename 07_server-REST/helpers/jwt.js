"use strict";
require("dotenv").config();
const JWT = require("jsonwebtoken");

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

module.exports = {
    generarJWT
};