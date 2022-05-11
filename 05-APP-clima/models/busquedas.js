'use strict';
require('dotenv').config();
const axios = require("axios");

module.exports = class Busquedas{
    historial = ["Tegucigalpa", "Madrid", "Bogotá"];

    constructor(){};

    async getCiudades(ciudadQuery){
        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ ciudadQuery }.json`,
            params:{
                "language"      : "es",
                "limit"         : 5,
                "access_token"  : process.env.MAPBOX_TOKEN
            }
        });

        try{
            const resp = await instance.get();
            console.log(resp.data);

        } catch(error){

        };

        return [];
    };
};