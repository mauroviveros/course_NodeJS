'use strict';

const { v4: uuidv4 } = require("uuid");


class Tarea {
    // id = '';
    // desc = '';
    // creadoEn = null;
    // completadoEn = null;

    constructor(descripcion){
        this._id = uuidv4();
        this.descripcion = descripcion;
        this.completadoEn = null;
    };
};

module.exports = Tarea;