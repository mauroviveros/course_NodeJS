"use strict";
const TicketControl = require("../tickets/ticket-control");
const ticketControl = new TicketControl();

const connection = (socket)=>{
    socket.emit("last_ticket", ticketControl.last);
    socket.on("next_ticket", (payload, callback)=>{ callback(ticketControl.next()); });
    socket.on("attend_ticket", ({ escritorio }, callback)=>{
        if(!escritorio) return callback(false);
        const ticket = ticketControl.atenderTicket(escritorio);
        console.log(ticket);
        if(!ticket) return callback(false);
        return callback(ticket);
    });
};

module.exports = {
    connection
}