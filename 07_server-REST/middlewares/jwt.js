"use strict";

const JWT = require("jsonwebtoken");

module.exports.validarJWT = (req, res, next)=>{
    const token = req.header("Authorization");
    
    try{
        const { _id } = JWT.verify(token, process.env.JWT_SECRET_KEY);
        req.uid = _id;

        next();
    } catch(error){
        console.log(error);
        return res.status(403).json({ message: error.message });
    };
};