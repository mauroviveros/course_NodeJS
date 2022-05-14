"use strict";

const usersGet = (req, res)=>{
    res.json({ msg: "get API" });
};
const usersPost = (req, res)=>{
    res.status(201).json({ msg: "post API" });
};
const usersPut = (req, res)=>{
    res.status(400).json({ msg: "put API" });
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



