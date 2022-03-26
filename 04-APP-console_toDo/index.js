'use strict';

const colors = require("colors");

const { menuChoices, menu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


const main = async()=>{
    // const options = [ "0", "1", "2", "3", "4", "5", "6" ];
    const tareas = new Tareas();
    let opt;
    do{
        opt = await menu();

        switch(opt){
            case "1":
                const descripcion = await leerInput("Descripción:");
                tareas.crearTarea(descripcion);
                break;
            case "2":
                console.log(tareas._listado);
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;

            case "0":
                break;
        };

        await pausa();
    } while(opt !== "0");
    
};

main();