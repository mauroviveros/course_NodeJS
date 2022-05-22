"use strict";

const connection = (socket)=>{
    console.log(`cliente conectado ${socket.id}`);
    socket.on("disconnect", ()=>{
        console.log(`cliente desconectado ${socket.id}`);
    });

    socket.on("send_message", (payload, callback)=>{
        console.log(payload);
        socket.broadcast.emit("send_message", payload);

        callback();
    });
};

module.exports = {
    connection
}