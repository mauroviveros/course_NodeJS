const fs = require("fs");
const path = require("path");
const colors = require("colors");

const printTable = require("./01_app-table");

const argv = require("yargs").option("b", {
    alias: "base",
    type: "number",
    default: 5,
    description: "Asigna la Base de la Tabla"
}).option("l", {
    alias: "limite",
    type: "number",
    default: 10,
    description: "Asigna el Limite de la Tabla"
}).argv;


const dir = path.join(__dirname, "./../tmp");

let base = argv.base;
let limite = argv.limite;

let table = printTable(base, limite);

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
};
fs.writeFile(`${dir}/03_02_tabla-${base}x${limite}.txt`, table, (err)=>{
    if(err) throw err;

    console.log(colors.green(`03_02_tabla-${base}x${limite}.txt creada`));
});