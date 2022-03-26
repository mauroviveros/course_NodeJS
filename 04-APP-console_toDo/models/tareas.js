'use strict';

const Tarea = require("./tarea");

class Tareas{
    constructor(){
        this._listado = {};
    };

    crearTarea(descripcion){
        const tarea = new Tarea(descripcion);
        this._listado[tarea._id] = tarea;
    };
};

module.exports = Tareas;