"use strict";
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const usersGet = (req, res)=>{
    const default_query = { limit:"10", page: "1" };
    const query = Object.assign({}, default_query, req.query);

    res.json({ msg: "get API", query });
};

const usersPost = async (req, res)=>{
    const body = req.body;
    const user = new User(body);
    user.google = false;

    try{
        if(user.password) user.password = await bcrypt.hashSync(user.password);

        await user.save();
        res.json({ data: user });
    } catch(e){
        console.log(e);
        res.status(400).json({ error: e });
    };
};

const usersPut = (req, res)=>{
    const params = req.params;

    res.status(400).json({ msg: "put API", params });
};

const usersDelete = (req, res)=>{
    res.status(500).json({ msg: "delete API" });
};

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
};



