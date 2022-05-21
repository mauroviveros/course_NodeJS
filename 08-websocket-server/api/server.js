"use strict";

const express   = require("express");
const cors      = require("cors");
const http      = require("http");
const path      = require("path");
const socketio  = require("socket.io");
class Server{
    constructor(){
        this.PORT   = process.env.PORT;
        this.app    = express();
        this.server = http.createServer(this.app);
        this.io     = socketio(this.server);

        this.middlewares();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, '../public')));
    };

    listen(){
        this.server.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;