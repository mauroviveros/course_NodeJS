const empleados = [
    { id: 1, nombre: "Fernando" },
    { id: 2, nombre: "Linda" },
    { id: 3, nombre: "Karen" }
];

const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 },
    { id: 3, salario: 2000 }
];

const getEmpleadoByID = (id, callback)=>{
    let err = null;
    const empleado = empleados.find((empleado)=>{
        return empleado.id === id;
    });

    if(!empleado) err = `Empleado con ID: ${id} no existe`;


    callback(err, empleado);
};

const getSalarioByID = (id, callback)=>{
    let err = null;
    const salario = salarios.find((salario)=>{
        return salario.id === id;
    });

    if(!salario) err = `Salario con ID: ${id} no existe`;


    callback(err, salario);
};

let _id = 3;


getEmpleadoByID(_id, (err, empleado)=>{
    if(err){
        console.log("ERROR!");
        return console.log(err);
    };
    
    getSalarioByID(_id, (err, salario)=>{
        if(err){
            console.log("ERROR!");
            return console.log(err);
        };
    
        console.log(`Empleado: ${empleado.nombre}, tiene un salario de: ${salario.salario}`);
    });
});