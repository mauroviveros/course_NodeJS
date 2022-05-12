'use strict';

const colors = require("colors");
// const { guardarDB, leerDB } = require("./helpers/filseSaver");

const { menu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async()=>{
    const busquedas = new Busquedas();
    let opt;
    do{
        opt = await menu();
        
        switch(opt){
            case "1":
                const lugarQuery = await leerInput("Ciudad: ");
                const lugares = await busquedas.getCiudades(lugarQuery);
                const lugarID = await listarLugares(lugares);
                const lugar = lugares.find(lugar => lugar.id == lugarID);
                const lugarClima = await busquedas.getClima(lugar.latitud, lugar.longitud);

                // Mostrar Mensaje
                // Buscar los lugares
                // Seleccionar el Lugar
                // Clima
                
                // Mostrar Resultados
                console.log(colors.green("\nInformacion de la ciudad\n"));
                console.log(`Ciudad: ${ lugar.nombre }`);
                console.log(`Lat: ${ lugar.latitud }`);
                console.log(`Lng: ${ lugar.longitud }`);
                console.log(`Temperatura: ${ lugarClima.temp }`);
                console.log(`Minima: ${ lugarClima.temp_min }`);
                console.log(`Maxima: ${ lugarClima.temp_max }`);
                console.log();
            break;
        };

        if(opt != "0") await pausa();
    } while(opt !== "0");
    console.clear();
};

main();