'use strict';

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
};

module.exports = Tareas;