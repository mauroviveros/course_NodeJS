"use strict";

const { uploadFile } = require("../helpers/upload");

const postFile = async (req, res)=>{
    try{
        const file_path = await uploadFile(req.files.file, "users");

        res.json({ path: file_path })
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

    
};

module.exports = {
    postFile
};