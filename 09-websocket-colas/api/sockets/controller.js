"use strict";
const TicketControl = require("../tickets/ticket-control");
const ticketControl = new TicketControl();

const connection = (socket)=>{
    socket.emit("last_ticket", ticketControl.last);
    socket.on("next_ticket", (payload, callback)=>{ callback(ticketControl.next()); });
};

module.exports = {
    connection
}