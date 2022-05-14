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
            res.json({ msg: "get API" });
        });
        this.app.post("/api", (req, res)=>{
            res.status(201).json({ msg: "post API" });
        });
        this.app.put("/api", (req, res)=>{
            res.status(400).json({ msg: "put API" });
        });
        this.app.delete("/api", (req, res)=>{
            res.json({ msg: "delete API" });
        });
    };

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;