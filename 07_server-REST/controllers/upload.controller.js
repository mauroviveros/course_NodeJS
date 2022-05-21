"use strict";

const path = require("path");

const uploadFile = async (req, res)=>{
    if(!req.files || !req.files.file) return res.status(400).json({ message: 'No files were uploaded.'});
    if(!req.files.file.name.match(/\.(jpg|jpeg|png)$/i)) return res.status(400).json({ message: "file extension not allowed" })

    const { file } = req.files;

    let file_name = file.name.split(".");
    const file_ext = file_name.pop();
    file_name = file_name.join(".");

    const uploadPath = path.join(__dirname, "../uploads/", file.name);

    file.mv(uploadPath, function(err) {
        try{
            if (err) throw err;
            return res.json({ message: 'File uploaded!', path: uploadPath });
        }catch(err){
            console.log(err);
            return res.status(500).json({ message: err.message });
        };
    });
};

module.exports = {
    uploadFile
};