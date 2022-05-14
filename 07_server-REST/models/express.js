"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");

const userRoutes = require("../routes/user.routes");

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static(path.join(__dirname, '../public')));
    };

    routes(){
        this.app.use("/api/users", userRoutes);
    };

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;