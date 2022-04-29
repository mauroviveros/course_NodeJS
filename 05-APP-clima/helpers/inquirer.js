'use strict';

const inquirer = require("inquirer");
const colors = require("colors");

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
}

module.exports = {
    menuChoices,
    leerInput,
    menu,
    pausa,
    confirmar
};