const fs = require("fs");
const printTable = require("./01_app-table");


let base = 5;
if(process.argv[2]) base = process.argv[2].split("=")[1] || 5;

let limite = 10;
if(process.argv[3]) limite = process.argv[3].split("=")[1] || 10;


let salida = printTable(base, limite);

fs.writeFile(`./tmp/03_02_tabla-${base}x${limite}.txt`, salida, (err)=>{
    if(err) throw err;

    console.log(`03_02_tabla-${base}x${limite}.txt creada`);
});