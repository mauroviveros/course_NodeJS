"use strict";
require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Base de datos ONLINE");

    } catch(e){
        console.log(e);
        throw new Error("Error al iniciar la DB");
    };
};

module.exports = {
    dbConnection
};