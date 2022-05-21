"use strict";

const path = require("path");
const { v4: uuid } = require("uuid");

const uploadFile = (file, folder = "")=>{
    return new Promise((resolve, reject)=>{
        let file_name = file.name.split(".");
        const file_ext = file_name.pop();
    
        const uploadPath = path.join(__dirname, "../uploads/", folder, `${uuid()}.${file_ext}`);

        file.mv(uploadPath, (err)=>{
            if (err) reject(err);
            resolve(file.name);
        });
    });
};

module.exports = {
    uploadFile
};