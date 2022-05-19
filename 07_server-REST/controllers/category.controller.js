"use strict";
const Category = require("../models/category.model");

// Listar Categorias - paginado, total, populate(userID)
// Mostrar Categoria - populate(userID)
// Actualizar Categoria - new userID
// borrar Categoria - estado = false

const createCategory = async (req, res)=>{
    const { name } = req.body;
    const category = new Category({
        name: !!name ? name.toUpperCase().trim(): null,
        user: req.user._id,
        estado: true
    });

    try{
        await category.save();
        return res.json({ data: category });
    } catch(error){
        console.log(error);
        return res.status(400).json({ message: error.message });
    };
};

module.exports = {
    createCategory
};