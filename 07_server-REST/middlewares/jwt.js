"use strict";

const JWT = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.validarJWT = async (req, res, next)=>{
    const token = req.header("Authorization");
    
    try{
        const { _id } = JWT.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ _id, estado: true });
        if(!user) throw new Error("Access denied");

        req.user = JSON.parse(JSON.stringify(user));
        next();
    } catch(error){
        console.log(error);
        return res.status(403).json({ message: error.message });
    };
};