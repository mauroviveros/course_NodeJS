'use strict';

const colors = require("colors");

const formatLugarItem = (index, lugar)=>{
    const id = colors.green(`${index + 1}.`);

    return `${id} ${lugar.nombre}`
}

module.exports = {
    formatLugarItem
};