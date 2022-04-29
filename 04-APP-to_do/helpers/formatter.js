'use strict';

const colors = require("colors");

const formatTareaItem = (index, tarea)=>{
    const id = colors.blue(`${index + 1}.`);
    const estado = (!!tarea.completadoEn) ? colors.green("[C]") : colors.red("[P]");

    return `${id} ${estado} ${colors.blue("::")} ${tarea.descripcion}`
}


module.exports = {
    formatTareaItem
};