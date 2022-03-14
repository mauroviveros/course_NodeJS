const printTable = (number)=>{
    let printReturn = [];
    if(!number) number = 5;

    console.clear();
    console.log("===============")
    console.log(`  Tabla del ${number}`)
    console.log("===============")

    printReturn.push("===============")
    printReturn.push(`  Tabla del ${number}`);
    printReturn.push("===============")

    for(i=1; i<=10; i++){
        let _print = `${number} x ${i} = ${number * i}`;

        console.log(_print);
        printReturn.push(_print);
    };

    return printReturn.join("\n");
};

module.exports = printTable;
printTable(10);