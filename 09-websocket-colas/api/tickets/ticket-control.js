"use strict";
const fs = require("fs");
const dir = "./tmp/";
const filename = "websocketDB.json";

class Ticket{
    constructor(numero, escritorio){
        this.numero = numero || 0;
        this.escritorio = escritorio || 0;
    };
}

class TicketControl{
    constructor(){
        this.last       = 1;
        this.date       = new Date().getDate();
        this.tickets    = [];
        this.tickets4    = [];

        this.init();
    };

    get exportDB(){
        return{
            last: this.last,
            date: this.date,
            tickets: this.tickets,
            tickets4: this.tickets4
        };
    };
    readDB(){
        if(!fs.existsSync(`${dir}${filename}`)){
            fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(`${dir}${filename}`, JSON.stringify(this.exportDB));
        };
        return JSON.parse(fs.readFileSync(`${dir}${filename}`));
    };
    saveDB(){
        fs.writeFileSync(`${dir}${filename}`, JSON.stringify(this.exportDB));
    };

    async init(){
        const { date, last, tickets, tickets4 } = await this.readDB();
        if(date == this.date){
            this.last = last;
            this.tickets = tickets;
            this.tickets4 = tickets4;
        } else{
            this.saveDB();
        };
    };

    next(){
        this.last += 1;
        this.tickets.push(new Ticket(this.last, null));
        this.saveDB();
        return this.last;
    };

    atenderTicket(escritorio){
        if(this.tickets,length == 0) return;
        const ticket = this.tickets.shift();

        ticket.escritorio = escritorio;
        this.tickets4t.unshift(ticket).slice(0,4);

        return ticket;
    };

};

module.exports = TicketControl;