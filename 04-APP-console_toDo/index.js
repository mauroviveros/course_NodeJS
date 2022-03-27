'use strict';

const colors = require("colors");
const { guardarDB, leerDB } = require("./helpers/filseSaver");

const { menuChoices, menu, pausa, leerInput, borrarTareasMenu, confirmar } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");


const main = async()=>{
    // const options = [ "0", "1", "2", "3", "4", "5", "6" ];
    const tareas = new Tareas();
    const tareasDB = leerDB();
    let tareasList;
    let opt;

    if(tareasDB) tareas._listado = tareasDB;
    else guardarDB(JSON.stringify(tareas._listado, null, 2));

    do{
        
        opt = await menu();

        switch(opt){
            case "1":
                const descripcion = await leerInput("Descripción:");
                tareas.crearTarea(descripcion);
                break;
            case "2":
                tareasList = tareas.listarTareas();
                tareasList.forEach((t)=> console.log(t));
                break;
            case "3":
                tareasList = tareas.listarTareas("completadas");
                tareasList.forEach((t)=> console.log(t));
                break;
            case "4":
                tareasList = tareas.listarTareas("pendientes");
                tareasList.forEach((t)=> console.log(t));
                break;
            case "5":
                break;
            case "6":
                const _id = await borrarTareasMenu(tareas._listado);
                const ok = await confirmar("¿Estas seguro?");
                if(ok) tareas.borrarTarea(_id);
                break;

            case "0":
                break;
        };

        guardarDB(JSON.stringify(tareas._listado, null, 2));

        await pausa();
    } while(opt !== "0");
    
};

main();