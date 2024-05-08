/*
// Crea programa qu eme muestre los empleador por salarios según la condición
const Empleados = [
  
  {
  nombre: 'Julian Amador',
  cargo: 'Administrador de empresas',
  salario: 320000,
  },
  
  {
  nombre: 'Pedro Arango',
  cargo: '',
  salario: 1500000,
  },
  
  {
  nombre: 'Maria Diaz',
  cargo: 'Gerente',
  salario: 5000000,
  },
  
  {
  nombre: 'Natalia Sepulveda',
  cargo: 'Secretaria',
  salario: 1800000,
  },
  
  {
  nombre: 'Antonio Rodriguez',
  cargo: 'Ingeniero apoyo',
  salario: 2800000,
  }
]

// Creamos la constante con el filtro

const calcular = Empleados.filter(
  value => value.salario <= 2500000
)

console.log(calcular);
*/


/*
// Tenemos el siguiente arreglo
const Peliculas = [

  {
    nombre: 'Duro de matar',
    año: 1992,
  },

  {
    nombre: 'Ninja',
    año: 2009,
  },

  {
    nombre: 'La isla',
    año: 2013,
  },

  {
    nombre: 'La venganza',
    año: 2021,
  },

];

// Creamos la función
function getPeliculas(){
  return new Promise((resolve, reject) =>{ //Usando la promesa, 'reject' se usa en caso de que la condición no se cumpla
    if(Peliculas == 0){ // Validamos si mi arreglo no esta vació 
      reject(new Error ("No hay datos de las Peliculas"))
    }
    setTimeout(() =>{ resolve(Peliculas);}, 6000)
  });
}

getPeliculas()
.then ((Peliculas) => console.log(Peliculas))
.catch ((error) => console.log(err.message));
*/




/*
const Datos = [

  {
    Productos: "Pan",
    precio: 1800,
  },
  
  {
    Productos: "Huevos",
    precio: 16000,
  },

  {
    Productos: "Leche",
    precio: 6000,
  },

];

function getDatos(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Datos);
    }, 2500); // Corrección: cerrar paréntesis y agregar punto y coma aquí
  });
}

getDatos().then((Datos) => console.log(Datos));
*/


/*
function resolveAfter25Seconds(){
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 25000); // Corrección: ajustar el tiempo a 25000 milisegundos (25 segundos)
  });
}

asyncCall();

async function asyncCall(){
  console.log('calling');
  const result = await resolveAfter25Seconds();
  console.log(result);
  // Expected output: "resolved"
}
*/


/*
const EquiposF = [

  {
    Nombre: 'Cali',
    Ciudad: 'Barranquilla',
    AñoFundado: '',
  },

  {
    Nombre: '',
    Ciudad: '',
    AñoFundado: '',
  },
  
  {
    Nombre: '',
    Ciudad: '',
    AñoFundado: '',
  },
]

function getEquipos(){
  return new Promise(resolve, reject) => {
    if(EquiposF == 0){
      reject(new Error("no datos en el arreglo"));
    }
    setTimeout(() => {
      resolve() => {resolve(EquiposF);},2500);
    });
  }

async function mostrarDatos(){
  const equipo = await getEquipos();
  console.log(equipo);

}
*/



