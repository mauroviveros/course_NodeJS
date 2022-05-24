"use strict";

const { comprobarJWT } = require("../helpers/jwt");
const Chat = require("../models/chat");
const chat = new Chat();

const socketController = async (socket, io)=>{
    const user = await comprobarJWT(socket.handshake.headers["authorization"]);
    if (!user) return socket.disconnect();

    chat.addUser(user);
    io.emit("active_users", chat.usersArr);

    socket.on("disconnect", ()=>{
        chat.deleteUser(user._id);
        io.emit("active_users", chat.usersArr);
    });

    socket.on("response_message", (message)=>{
        chat.addMessage(message, user);
        io.emit("messages", chat.lastMessages);
    })

    // console.log("cliente conectado", user.name);
};



module.exports = socketController;