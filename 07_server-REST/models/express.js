"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");

const { dbConnection } = require("../database/database.config");
const userRoutes = require("../routes/user.routes");
const authRoutes = require("../routes/auth.routes");

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        this.connectDB();
        this.middlewares();
        this.routes();
    };

    async connectDB(){
        await dbConnection();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, '../public')));
    };

    routes(){
        this.app.use("/api/users", userRoutes);
        this.app.use("/api/auth", authRoutes);
    };

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;