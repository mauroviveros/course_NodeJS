"use strict";

const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const login = async (req, res)=>{
    const body = req.body;
    try{
        const user = await User.findOne({ email: body.email, estado: true });
        const valid = await bcrypt.compareSync(body.password, user.password);
        if(!valid) throw new Error("invalid credentials");

        // 4 Generar JWT


        return res.json({
            message: "OK"
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    };
};


module.exports = {
    login
};