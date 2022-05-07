'use strict';
const axios = require("axios");

module.exports = class Busquedas{
    historial = ["Tegucigalpa", "Madrid", "Bogotá"];

    constructor(){};

    async getCiudades(ciudadQuery){
        try{
            const resp = await axios.get("https://reqres.in/api/users?page=2");
            console.log(resp.data);

        } catch(error){

        };

        return [];
    };
};