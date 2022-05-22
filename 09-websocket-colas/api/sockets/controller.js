"use strict";
const TicketControl = require("../tickets/ticket-control");
const ticketControl = new TicketControl();

const connection = (socket)=>{
    socket.emit("last_ticket", ticketControl.last);
    socket.emit("last_tickets", ticketControl.tickets4);
    socket.on("next_ticket", (payload, callback)=>{ callback(ticketControl.next()); });
    socket.on("attend_ticket", ({ escritorio }, callback)=>{
        if(!escritorio) return callback(false);
        const ticket = ticketControl.atenderTicket(escritorio);
        if(!ticket) return callback(false);
        socket.broadcast.emit("last_tickets", ticketControl.tickets4);
        return callback(ticket);
    });
};

module.exports = {
    connection
}