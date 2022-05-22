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
        this.sockets();
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, '../public')));
    };

    sockets(){
        this.io.on("connection", (socket)=>{
            console.log(`cliente conectado ${socket.id}`);
            socket.on("disconnect", ()=>{
                console.log(`cliente desconectado ${socket.id}`);
            });

            socket.on("send_message", (payload, callback)=>{
                console.log(payload);
                this.io.emit("send_message", payload);

                callback();
            });
        });
    };

    listen(){
        this.server.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    };
};

module.exports = Server;