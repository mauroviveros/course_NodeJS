"use strict";
const express = require("express");
const path = require("path");

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.app.use(express.static(path.join(__dirname, '../public')));
    };

    routes(){
        this.app.get("/api", (req, res)=>{
            res.send("Hello World");
        });
    };

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;