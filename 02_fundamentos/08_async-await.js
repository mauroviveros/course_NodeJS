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

const getEmpleadoByID = async (id)=>{
    const empleado = empleados.find((empleado)=> empleado.id === id );

    if(!empleado) throw `Empleado con ID: ${id} no existe`;
    else return empleado;
};

const getSalarioByID = async (id)=>{
    const salario = salarios.find((salario) => salario.id === id );

    if(!salario) throw `Salario con ID: ${id} no existe`;
    else return salario;
};











let _id = 6;


const getInfoByID = async (_id)=>{
    try{
        const empleado = await getEmpleadoByID(_id);
        const salario = await getSalarioByID(_id);

        console.log(`Empleado: ${empleado.nombre}, tiene un salario de: ${salario.salario}`);
    } catch(err){
        console.log(err);
    };
};
getInfoByID(_id);