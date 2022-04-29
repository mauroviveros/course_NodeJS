'use strict';

const inquirer = require("inquirer");
const colors = require("colors");
const { formatTareaItem } = require("./formatter");


const menuChoices = [
    { value: "1", name: `${colors.green("1.")} Crear tarea` },
    { value: "2", name: `${colors.green("2.")} Listar tareas` },
    { value: "3", name: `${colors.green("3.")} Listar tareas completadas` },
    { value: "4", name: `${colors.green("4.")} Listar tareas pendientes` },
    { value: "5", name: `${colors.green("5.")} Completar tarea(s)` },
    { value: "6", name: `${colors.green("6.")} Borrar tarea` },
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

const listarTareas = async (tareas, checked)=>{
    const tareasChoises = Object.values(tareas).map((tarea, index)=>{
        let tareaChoise = {
            value: tarea._id,
            name: formatTareaItem(index, tarea),
            checked: !!tarea.completadoEn
        };
        return tareaChoise;
    });

    const { _id } = await inquirer.prompt([{
        type: checked  ? "checkbox" : "list",
        message: checked ? "Selecciones" : "Borrar",
        name: "_id",
        choices: tareasChoises
    }]);

    return _id;
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
    listarTareas,
    menu,
    pausa,
    confirmar
};