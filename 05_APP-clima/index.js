'use strict';

const colors = require("colors");
const { updateDB, leerDB } = require("./helpers/filseSaver");
const { menu, pausa, leerInput, listarLugares, mostarLugar } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async()=>{
    const busquedas = new Busquedas();
    const lugaresDB = leerDB();
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
                lugar.temp = lugarClima.temp;
                lugar.temp_min = lugarClima.temp_min;
                lugar.temp_max = lugarClima.temp_max;
                await updateDB(lugar);
                mostarLugar(lugar);
            break;
            case "2":
                const lugares2 = await leerDB();
                const lugarID2 = await listarLugares(lugares2);
                mostarLugar(lugares2.find(lugar => lugar.id == lugarID2));
            break;
        };

        if(opt != "0") await pausa();
    } while(opt !== "0");
    console.clear();
};

main();