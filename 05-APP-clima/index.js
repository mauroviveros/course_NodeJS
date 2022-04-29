'use strict';

const colors = require("colors");
const { guardarDB, leerDB } = require("./helpers/filseSaver");

const { leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


const main = async()=>{
    const texto = await leerInput("Hola: ");
    console.log(texto);
};

main();