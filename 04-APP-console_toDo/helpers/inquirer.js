'use strict';

const inquirer = require("inquirer");
const colors = require("colors");


const menuChoices = [
    { value: "1", name: "1. Crear tarea" },
    { value: "2", name: "2. Listar tareas" },
    { value: "3", name: "3. Listar tareas completadas" },
    { value: "4", name: "4. Listar tareas pendientes" },
    { value: "5", name: "5. Completar tarea(s)" },
    { value: "6", name: "6. Borrar tarea" },
    { value: "0", name: "0. Salir" }
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
    console.log(colors.green("   Seleccione una Opción   "));
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

module.exports = {
    menuChoices,
    menu,
    pausa
};