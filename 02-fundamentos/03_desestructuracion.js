const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración",
    getNombre(){
            return `${this.nombre} ${this.apellido}`;
    }
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


function imprimeHeroe({ nombre, apellido, poder }){
    // const { nombre, apellido, poder } = heroe;
    console.log(nombre, apellido, poder);
};
imprimeHeroe(deadpool);


const heroes = ["Deadpool", "Superman", "Batman"];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [ h1, h2, h3 ] = heroes;

console.log(`${h1}, ${h2}, ${h3}`);
