"use strict";

const { uploadFile } = require("../helpers/upload");

const postFile = async (req, res)=>{
    if(!req.files || !req.files.file) return res.status(400).json({ message: 'No files were uploaded.'});
    if(!req.files.file.name.match(/\.(jpg|jpeg|png)$/i)) return res.status(400).json({ message: "file extension not allowed" })

    try{
        const file_path = await uploadFile(req.files.file);

        res.json({ path: file_path })
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

    
};

module.exports = {
    postFile
};