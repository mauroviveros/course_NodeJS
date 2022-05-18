"use strict";

const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const { generarJWT } = require("../helpers/jwt");
const { googleVerify } = require("../helpers/google_identity");

const login = async (req, res)=>{
    const body = req.body;
    try{
        const user = await User.findOne({ email: body.email, estado: true });
        const valid = await bcrypt.compareSync(body.password, user.password);
        if(!valid) throw new Error("invalid credentials");

        const token = await generarJWT(user._id);


        return res.json({
            message: "OK",
            user,
            token
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    };
};

const googleLogin = async (req, res)=>{
    const google_token = req.body.google_token;
    try{
        if(!google_token) throw new Error("invalid credentials");
        const googleUser = await googleVerify(google_token);

        return res.json({
            message: "OK",
            googleUser
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    login,
    googleLogin
};