const fs = require("fs");
const path = require("path");
const colors = require("colors");
const argv = require("yargs").argv;
const printTable = require("./01_app-table");

const dir = path.join(__dirname, "./../tmp");

let base = argv.base || 5;
let limite = argv.limite || 10;

let table = printTable(base, limite);

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
};
fs.writeFile(`${dir}/03_02_tabla-${base}x${limite}.txt`, table, (err)=>{
    if(err) throw err;

    console.log(colors.green(`03_02_tabla-${base}x${limite}.txt creada`));
});