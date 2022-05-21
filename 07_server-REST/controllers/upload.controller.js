"use strict";

const { uploadFile, validateFile, getCollection, deleteFile } = require("../helpers/upload");

const postImg = async (req, res)=>{
    const { id, collection } = req.params;

    try{
        const Model = await getCollection(collection);
        const document_model = await Model.findById(id);
        const tempImg = document_model.img;
        if(!document_model) throw new Error("Can't save Image in: collection - MongoID");

        await validateFile(req.files.file, ["jpg", "png", "jpeg"]);
        const file_path = await uploadFile(req.files.file, collection);
        document_model.img = file_path;
        await document_model.save();
        if(!!tempImg) await deleteFile(tempImg, collection);

        res.json({ file: file_path })
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    };
};

module.exports = {
    postImg
};