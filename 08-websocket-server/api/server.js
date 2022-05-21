"use strict";

const express   = require("express");
const cors      = require("cors");
const path      = require("path");

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, '../public')));
    };

    routes(){};

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;