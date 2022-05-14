"use strict";

const usersGet = (req, res)=>{
    const default_query = { limit:"10", page: "1" };
    const query = Object.assign({}, default_query, req.query);

    res.json({ msg: "get API", query });
};

const usersPost = (req, res)=>{
    const body = req.body;

    res.status(201).json({ msg: "post API", body });
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



