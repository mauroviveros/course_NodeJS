'use strict';

const { formatTareaItem } = require("../helpers/formatter");
const Tarea = require("./tarea");

class Tareas{

    get listArr(){
        return Object.values(this._listado);
    };

    constructor(){
        this._listado = {};
    };

    crearTarea(descripcion){
        const tarea = new Tarea(descripcion);
        this._listado[tarea._id] = tarea;
    };

    borrarTarea(_id){
        if(this._listado[_id]) delete this._listado[_id];
        console.log("Tarea Borrada");
    };

    listarTareas(filtro){
        return Object.values(this._listado).filter((tarea) =>{
            switch(filtro){
                case "completadas": return tarea.completadoEn != null;
                case "pendientes": return tarea.completadoEn == null;
                default: return true; 
            };
        }).map((tarea, index)=>{
            return formatTareaItem(index, tarea);
        });
    };
};

module.exports = Tareas;