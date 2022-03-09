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


getEmpleadoByID = (id, callback)=>{
    let err = null;
    const empleado = empleados.find((empleado)=>{
        return empleado.id === id;
    });

    if(!empleado) err = `Empleado con ID: ${id} no existe`;


    callback(err, empleado);
};

// console.log(getEmpleadoByID(2));
getEmpleadoByID(2, (err, empleado)=>{
    if(err){
        console.log("ERROR!");
        return console.log(err);
    };

    console.log("empleado Existe");
    console.log(empleado)
});