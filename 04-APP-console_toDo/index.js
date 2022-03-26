const colors = require("colors");

// const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { inquirerMenu } = require("./helpers/inquirer");


const main = async()=>{
    const options = [ "0", "1", "2", "3", "4", "5", "6" ];
    let opt;
    do{
        opt = await inquirerMenu();
        console.log(opt);

        if(options.includes(opt)) await pausa();
    } while(!options.includes(opt));
    
};

main();