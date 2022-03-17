const colors = require("colors")

const printTable = (number, limite)=>{
    let printReturn = [];
    if(!number) number = 5;

    console.clear();
    console.log(colors.brightBlue("==================================="))
    console.log(colors.brightBlue(`    Tabla del ${number} con limite: ${limite}.`));
    console.log(colors.brightBlue("==================================="));

    printReturn.push("===================================")
    printReturn.push(`    Tabla del ${number} con limite: ${limite}.`);
    printReturn.push("===================================")

    for(i=1; i<=limite; i++){
        let _print = `${number} x ${i} = ${number * i}`;
        console.log(colors.brightBlue(_print));
        printReturn.push(_print);
    };

    return printReturn.join("\n");
};

module.exports = printTable;