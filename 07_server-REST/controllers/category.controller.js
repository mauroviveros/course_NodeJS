"use strict";
const Category = require("../models/category.model");

const getCategories = async (req, res)=>{
    let filter = { estado: true };
    let { limit, page } = Object.assign({}, {
        limit:"5",
        page: "1"
    }, req.query);

    limit = Number(limit) > 0 ? Number(limit) : 0;
    page = Number(page) > 0 ? (Number(page) - 1) * limit : 0;

    const query = Category.find(filter);
    query.sort("name");
    query.limit(limit);
    query.skip(page);
    query.populate("user", "name");

    try{
        const total = await Category.count(filter);
        const categories = await query.exec();
        return res.json({ total, data: categories });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const getCategory = async (req, res)=>{
    const { _id } = req.params;

    try{
        const category = await Category.findById(_id).populate("user", "name");
        return res.json({ data: category });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const createCategory = async (req, res)=>{
    const { name } = req.body;
    const category = new Category({
        name: !!name ? name.toUpperCase().trim(): null,
        user: req.user._id,
        estado: true
    });

    try{
        await category.save();
        return res.json({ data: category });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const updateCategory = async (req, res)=>{
    const { _id } = req.params;
    const { name } = req.body;
    const userID = req.user._id;

    try{
        const category = await Category.findByIdAndUpdate(_id, { name: name.toUpperCase().trim(), user: userID });
        return res.json({ data: category });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const deleteCategory = async (req, res)=>{
    const { _id } = req.params;
    const userID = req.user._id;

    try{
        const category = await Category.findByIdAndUpdate(_id, { estado: false, user: userID });
        return res.json({ data: category });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};