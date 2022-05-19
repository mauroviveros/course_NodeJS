"use strict";
const Product = require("../models/product.model");
const Category = require("../models/category.model");

const getProducts = async (req, res)=>{
    let filter = { estado: true };
    let { limit, page } = Object.assign({}, {
        limit:"5",
        page: "1"
    }, req.query);

    if(!!req.query.category) filter.category = req.query.category;

    limit = Number(limit) > 0 ? Number(limit) : 0;
    page = Number(page) > 0 ? (Number(page) - 1) * limit : 0;

    const query = Product.find(filter);
    query.sort("name");
    query.limit(limit);
    query.skip(page);
    query.populate("user", "name");
    query.populate("category", "name");

    try{
        const total = await Product.count(filter);
        const products = await query.exec();
        return res.json({ total, data: products });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const getProduct = async(req, res)=>{
    const { _id } = req.params;

    try{
        const product = await Product.findById(_id).populate("user", "name").populate("category", "name");
        return res.json({ data: product });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const createProduct = async (req, res)=>{
    const body = req.body;
    const product = new Product(Object.assign({}, body, {
        name: !!body.name ? body.name.toUpperCase().trim(): null,
        user: req.user._id,
        estado: true
    }));

    try{
        const category = await Category.findOne({ _id: product.category, estado: true });
        if(!category) throw new Error("Invalid Category");

        await product.save();
        return res.json({ data: product });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

const updateProduct = async (req, res)=>{
    const params = req.params;
    const body = req.body;

    body.user = req.user._id;

    try{
        if(body.name) body.name = body.name.toUpperCase().trim();
        if(body.category){
            const category = await Category.findOne({ _id: body.category, estado: true });
            if(!category) throw new Error("Invalid Category");
        };

        const product = await Product.findByIdAndUpdate(params._id, body);
        return res.json({ data: product });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};
const deleteProduct = async (req, res)=>{
    const params = req.params;

    try{
        const product = await Product.findByIdAndUpdate(params._id, { estado: false, user: req.user._id });
        return res.json({ data: product });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};