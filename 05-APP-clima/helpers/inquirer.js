'use strict';

const inquirer = require("inquirer");
const colors = require("colors");

const { formatLugarItem } = require("./formatter");

const menuChoices = [
    { value: "1", name: `${colors.green("1.")} Buscar Ciudad` },
    { value: "2", name: `${colors.green("2.")} Historial` },
    { value: "0", name: `${colors.green("0.")} Salir` }
]
const _menuPrompt = [
    {
        type: "list",
        name: "opcion",
        message: "¿Que desea hacer?",
        choices: menuChoices
    }
];

const menu = async()=>{
    console.clear();
    console.log(colors.green("==========================="));
    console.log(colors.white("   Seleccione una Opción   "));
    console.log(colors.green("==========================="));
    console.log();

    const { opcion } = await inquirer.prompt(_menuPrompt);

    return opcion;
};

const pausa = async()=>{
    await inquirer.prompt([{
        type: "input",
        name: "enter",
        message: `Precione ${ colors.green("ENTER") } para continuar:`
    }]);
};

const leerInput = async(message)=>{
    const { descripcion } = await inquirer.prompt([{
        type: "input",
        name: "descripcion",
        message,
        validate(value){
            if(value.length === 0){
                return 'Por favor Ingrese un valor';
            };
            return true;
        }
    }]);

    return descripcion;
};


const confirmar = async (message)=>{
    const { ok } = await inquirer.prompt([{
        type: "confirm",
        name: "ok",
        message
    }]);

    return ok;
};

const listarLugares = async (lugares)=>{
    const lugaresChoises = lugares.map((lugar, index)=>{
        let lugarChoise = {
            value: lugar.id,
            name: formatLugarItem(index, lugar)
        };
        return lugarChoise;
    });

    const { id } = await inquirer.prompt([{
        type: "list",
        message: "Selecciones",
        name: "id",
        choices: lugaresChoises
    }]);

    return id;
};

const mostarLugar = async(lugar)=>{
    // Mostrar Resultados
    console.log(colors.green("\nInformacion de la ciudad\n"));
    console.log(`Ciudad: ${ lugar.nombre }`);
    console.log(`Lat: ${ lugar.latitud }`);
    console.log(`Lng: ${ lugar.longitud }`);
    console.log(`Temperatura: ${ lugar.temp }`);
    console.log(`Minima: ${ lugar.temp_min }`);
    console.log(`Maxima: ${ lugar.temp_max }`);
    console.log();
};

module.exports = {
    menuChoices,
    leerInput,
    menu,
    pausa,
    confirmar,
    listarLugares,
    mostarLugar
};