"use strict";

const path = require("path");
const fs = require("fs");
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
    });
};

const existFile = (filename, collection)=>{
    const filepath = path.join(__dirname, "../uploads/", collection, filename);
    return new Promise((resolve, reject)=>{
        if(fs.existsSync(filepath)) resolve(true);
        else resolve(false);
    });
};

const deleteFile = (filename, collection)=>{
    const filepath = path.join(__dirname, "../uploads/", collection, filename);
    return new Promise((resolve, reject)=>{
        if(fs.existsSync(filepath)){
            try{
                resolve(fs.unlinkSync(filepath));
            } catch(error){
                reject(error);
            };
        } else resolve(false);
    });
};
const getPath = (filename, collection)=>{
    return path.join(__dirname, "../uploads/", collection, filename);
};

module.exports = {
    uploadFile,
    validateFile,
    getCollection,
    existFile,
    deleteFile,
    getPath
};