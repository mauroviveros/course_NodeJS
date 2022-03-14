const fs = require("fs");
const printTable = require("./01_app-table");

let number = 2;
let salida = printTable(number);

fs.writeFile(`./tmp/03_02_tabla-${number}.txt`, salida, (err)=>{
    if(err) throw err;

    console.log(`03_02_tabla-${number}.txt creada`);
});