const inquirer = require("inquirer");
const colors = require("colors");

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [ "opt1", "opt2", "opt3" ]
    }
]


const inquirerMenu = async()=>{
    console.clear();
    console.log(colors.green("==========================="));
    console.log(colors.green("   Seleccione una Opción   "));
    console.log(colors.green("==========================="));
    console.log();

    const opt = await inquirer.prompt(menuOpts);

    return opt;
};

module.exports = {
    inquirerMenu
};