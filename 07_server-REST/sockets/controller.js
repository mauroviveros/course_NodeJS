"use strict";

const { Socket } = require("socket.io"); //!
const { comprobarJWT } = require("../helpers/jwt");


const socketController = async (socket = new Socket)=>{
    const user = await comprobarJWT(socket.handshake.headers["authorization"]);
    if (!user) return socket.disconnect();

    console.log("cliente conectado", user.name);
};



module.exports = socketController;