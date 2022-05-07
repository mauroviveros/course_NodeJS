'use strict';

const colors = require("colors");
// const { guardarDB, leerDB } = require("./helpers/filseSaver");

const { menu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async()=>{
    const busquedas = new Busquedas();
    let opt;
    do{
        opt = await menu();
        
        switch(opt){
            case "1":
                const lugar = await leerInput("Ciudad: ");
                await busquedas.getCiudades();
                // Mostrar Mensaje
                // Buscar los lugares
                // Seleccionar el Lugar
                // Clima
                
                // Mostrar Resultados
                console.log(colors.green("\nInformacion de la ciudad\n"));
                console.log("Ciudad: ");
                console.log("Lat: ");
                console.log("Lng: ");
                console.log("Temperatura: ");
                console.log("Minima: ");
                console.log("Maxima: ");
            break;
        };

        if(opt != "0") await pausa();
    } while(opt !== "0");
    console.clear();
};

main();