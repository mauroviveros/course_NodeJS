"use strict";
const fs = require("fs");
const dir = "./tmp/";
const filename = "websocketDB.json";

class TicketControl{
    constructor(){
        this.last       = 0;
        this.date       = new Date().getDate();
        this.tickets    = [];

        this.init();
    };

    get exportDB(){
        return{
            last: this.last,
            date: this.date,
            tickets: this.tickets
        };
    };
    async readDB(){
        if(!await fs.existsSync(`${dir}${filename}`)){
            await fs.mkdirSync(dir, { recursive: true });
            await fs.writeFileSync(`${dir}${filename}`, JSON.stringify(this.exportDB));
        };
        return JSON.parse(await fs.readFileSync(`${dir}${filename}`));
    };
    async saveDB(){
        await fs.writeFileSync(`${dir}${filename}`, JSON.stringify(this.exportDB));
    };

    async init(){
        const { date, last, tickets } = await this.readDB();
        if(date == this.date){
            this.last = last;
            this.tickets = tickets;
        } else{
            this.saveDB();
        };
    };

};

module.exports = TicketControl;