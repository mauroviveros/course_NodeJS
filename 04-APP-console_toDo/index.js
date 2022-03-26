'use strict';

const colors = require("colors");

const { menuChoices, menu, pausa } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


const main = async()=>{
    // const options = [ "0", "1", "2", "3", "4", "5", "6" ];
    // const tareas = new Tareas();
    let opt;
    do{
        opt = await menu();
        await pausa();
    } while(opt !== "0");
    
};

main();