'use strict';
require('dotenv').config();
const axios = require("axios");

module.exports = class Busquedas{
    historial = ["Tegucigalpa", "Madrid", "Bogotá"];

    constructor(){};

    async getCiudades(ciudadQuery){
        try{
            const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/buenos%20aires.json?language=es&access_token=${process.env.MAPBOX_TOKEN}`);
            console.log(resp.data);

        } catch(error){

        };

        return [];
    };
};