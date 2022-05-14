"use strict";

const usersGet = (req, res)=>{
    res.json({ msg: "get API" });
};

const usersPost = (req, res)=>{
    const { name, age } = req.body;
    res.status(201).json({ msg: "post API", name, age });
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



