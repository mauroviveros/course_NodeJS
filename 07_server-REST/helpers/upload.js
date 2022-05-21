"use strict";

const path = require("path");

const uploadFile = (file)=>{
    return new Promise((resolve, reject)=>{
        let file_name = file.name.split(".");
        const file_ext = file_name.pop();
        file_name = file_name.join(".");
    
        const uploadPath = path.join(__dirname, "../uploads/", file.name);

        file.mv(uploadPath, (err)=>{
            if (err) reject(err);
            resolve(file.name);
        });
    });
};

module.exports = {
    uploadFile
};