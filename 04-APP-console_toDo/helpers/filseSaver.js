'use strict';
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "./../../tmp");
const fileName = "todoDB.json";

const guardarDB = (data)=>{
    if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(`${dir}/${fileName}`, data);
};

module.exports = {
    guardarDB
};