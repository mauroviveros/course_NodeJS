"use strict";

const validFile = (...extensions)=>{
    return async (req, res, next)=>{
        try{
            const regexp = new RegExp("\.(" + extensions.join("|") + ")$", "i");
            if(!req.files || !req.files.file) throw new Error('No files were uploaded.');
            if(!req.files.file.name.toLowerCase().match(regexp)) throw new Error("file extension not allowed");
            next();
        } catch(error){
            console.log(error);
            return res.status(403).json({ message: error.message });
        };
    };
};

module.exports = {
    validFile
};