"use strict";
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const usersGet = async (req, res)=>{
    let filter = { estado: true };
    let filterFind = {};
    let { limit, page, onlyAdmin } = Object.assign({}, {
        limit:"5",
        page: "1"
    }, req.query);

    onlyAdmin = Boolean(onlyAdmin);
    limit = Number(limit) > 0 ? Number(limit) : 0;
    page = Number(page) > 0 ? (Number(page) - 1) * limit : 0;

    if(onlyAdmin) filterFind.role = "ADMIN_ROLE"

    const query = User.find(Object.assign({}, filter, filterFind));
    query.sort("email");
    query.limit(limit);
    query.skip(page);

    try{
        const total = await User.count(filter);
        const users = await query.exec();
        return res.json({ total, data: users });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
    
};

const usersPost = async (req, res)=>{
    const body = req.body;
    const user = new User(body);

    user.google = false;
    if(user.password) user.password = await bcrypt.hashSync(user.password);

    try{
        await user.save();
        return res.json({ data: user });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const usersPut = async (req, res)=>{
    const params = req.params;
    const { google, ...body } = req.body;

    if(body.password) body.password = await bcrypt.hashSync(body.password);

    try{
        const user = await User.findByIdAndUpdate(params._id, body);
        return res.json({ data: user });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const usersDelete = async (req, res)=>{
    const params = req.params;

    try{
        const user = await User.findByIdAndUpdate(params._id, { estado: false });
        return res.json({ data: user });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
};



