const colors = require("colors");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { menuChoices, menu, pausa } = require("./helpers/inquirer");


const main = async()=>{
    // const options = [ "0", "1", "2", "3", "4", "5", "6" ];
    let opt;
    do{
        opt = await menu();

        await pausa();
    } while(opt !== "0");
    
};

main();