"use strict";

const { uploadFile, validateFile } = require("../helpers/upload");

// const postImg = async (req, res)=>{
//     try{
//         await validateFile(req.files.file, ["jpg", "png", "jpeg"]);
//         const file_path = await uploadFile(req.files.file, "users");

//         res.json({ path: file_path })
//     } catch(error){
//         console.log(error);
//         return res.status(500).json({ message: error.message });
//     };
// };

const postImg = (req, res)=>{
    const params = req.params;
    res.json({ id: req.params.id, collection: req.params.collection });
};

module.exports = {
    postImg
};