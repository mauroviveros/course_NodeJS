"use strict";
const http = require("http");

http.createServer((req, res)=>{
    
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hola Mundo");

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.write(JSON.stringify({ id: 1, nombre: "Persona" }));

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // res.write("id, nombre\n");
    // res.write("1, Fernando\n");
    // res.write("2, Mauro\n");
    
    

    res.end();
}).listen(8080);

console.log("Escuchando el puerto: 8080");