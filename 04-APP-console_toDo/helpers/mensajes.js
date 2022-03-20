const colors = require("colors");
const readline = require("readline");

const mostrarMenu = ()=>{
    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.clear();

    console.log(colors.green("==========================="));
    console.log(colors.green("   Seleccione una Opción"));
    console.log(colors.green("==========================="));
    console.log();

    console.log(`${colors.green("1.")} Crear tarea`);
    console.log(`${colors.green("2.")} Listar tareas`);
    console.log(`${colors.green("3.")} Listar tareas completadas`);
    console.log(`${colors.green("4.")} Listar tareas pendientes`);
    console.log(`${colors.green("5.")} Completar tarea(s)`);
    console.log(`${colors.green("6.")} Borrar tarea`);
    console.log(`${colors.green("0.")} Salir`);

    interface.question("Seleccione una opción: ", (opt)=>{
        console.log(opt);
        interface.close();
    });
};

const pausa = ()=>{
    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interface.question(`Precione ${ colors.green("ENTER") } para continuar: `, (opt)=>{
        interface.close();
    });
};

module.exports = {
    mostrarMenu,
    pausa
};