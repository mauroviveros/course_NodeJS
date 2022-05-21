"use strict";

const path = require("path");
const { v4: uuid } = require("uuid");

const User = require("../models/user.model");
const Product = require("../models/product.model");

const uploadFile = (file, folder = "")=>{
    return new Promise((resolve, reject)=>{
        let file_name = file.name.split(".");
        const file_ext = file_name.pop();

        const file_path = `${uuid()}.${file_ext}`;
        const uploadPath = path.join(__dirname, "../uploads/", folder, file_path);

        file.mv(uploadPath, (err)=>{
            if (err) reject(err);
            resolve(file_path);
        });
    });
};

const validateFile = async (file, extensions)=>{
    return new Promise((resolve, reject)=>{
        const regexp = new RegExp("\.(" + extensions.join("|") + ")$", "i");
        try{
            if(!file) throw new Error('No files were uploaded.');
            if(!file.name.toLowerCase().match(regexp)) throw new Error("file extension not allowed");
            resolve();
        } catch(error){
            reject(error);
        };
    });
};

const getCollection = (collection)=>{
    return new Promise((resolve, reject)=>{
        switch(collection){
            case "users": resolve(User); break;
            case "products": resolve(Product); break;
            default: reject(new Error("collection not allowed"));
        };
    })
};

module.exports = {
    uploadFile,
    validateFile,
    getCollection
};