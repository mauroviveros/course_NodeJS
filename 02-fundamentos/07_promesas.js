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

const getEmpleadoByID = (id)=>{
    return new Promise((resolve, reject)=>{
        const empleado = empleados.find((empleado)=>{
            return empleado.id === id;
        });

        if(!empleado) reject(`Empleado con ID: ${id} no existe`);
        else resolve(empleado);
    });
};

const getSalarioByID = (id)=>{
    return new Promise((resolve, reject)=>{
        const salario = salarios.find((salario)=>{
            return salario.id === id;
        });

        if(!salario) reject(`Salario con ID: ${id} no existe`);
        else resolve(salario);
    });
};



let _id = 3;
let _empleado;

getEmpleadoByID(_id).then((empleado)=>{
    _empleado = empleado;
    return getSalarioByID(_id);
}).then((salario)=>{
    console.log(`Empleado: ${_empleado.nombre}, tiene un salario de: ${salario.salario}`);
}).catch((err)=>{
    console.log("ERROR!");
    return console.log(err);
});