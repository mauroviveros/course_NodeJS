'use strict';
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "./../../tmp");
const fileName = "todoDB.json";
const fileDir = `${dir}/${fileName}`;

const guardarDB = (data)=>{
    if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(fileDir, data);
};

const leerDB = ()=>{
    if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if(!fs.existsSync(fileDir)) return null;

    const info = fs.readFileSync(fileDir, { encoding: 'utf-8' });
    return JSON.parse(info);
};

module.exports = {
    guardarDB,
    leerDB
};