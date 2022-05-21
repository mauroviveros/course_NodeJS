"use strict";

const path = require("path");

const uploadFile = (req, res)=>{
    if (!req.files || !req.files.file) return res.status(400).send('No files were uploaded.');

    const { file } = req.files;
    const uploadPath = path.join(__dirname, "../uploads/", file.name);

    file.mv(uploadPath, function(err) {
        if (err){
            console.log(err);
            return res.status(500).json({ message: err.message });
        };
        res.json({ message: 'File uploaded!', path: uploadPath });
    });
};

module.exports = {
    uploadFile
};