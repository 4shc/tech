/* // Patrones de Diseño
// ... adelantar



// ARRAYS
let lista = ["Manzana","Pera",23, 25, "Hola mundo"];
console.log(lista);
lista.push("Hola"); // Agregar un elemento al final
console.log(lista);
console.log(lista[2]);
console.log(lista[4]);
console.log(lista.length);


let copia = lista.slice(0, 3);
console.log(copia);
console.log(lista);

lista.pop(); // Eliminar el último elemento
console.log(lista);





// Ejemplo:
const prueba = [
  1,2,"true", "Bienvenido", 
    ["F", "Y", 8, 
      [3,4, "Hola", "Maria"]
    ] 
  ];

console.log(prueba[4] [3] [3]);


// Ejemplo: 
const arreglo = Array.of("x", "y", "Hola", "Dario", 8, 9, 0);
console.log(arreglo);



// Método fill

// Ejemplo 1
const valor = Array(200).fill(0);
console.log(valor);


// Ejemplo 2
const array1 = [1 , 2, 3, 4];

console.log(array1.fill(0, 2, 4));
console.log(array1.fill(5, 1 ));
console.log(array1.fill(6));


// Ejemplo 3
const frutas = ["Lulo", "Fresa", "Manzana", "Papaya"];
let primerE = frutas[0];
console.log(primerE);


// Recorriendo Ejemplo 1. Arrays ForEach
frutas.forEach(function(el, index){
  console.log(`<li id = "${index} "> ${el} </li>`);
})

// Recorriendo Ejemplo 2. Arrays ForEach
const npruebas = [10,20,30,40,50,60];
npruebas.forEach(function(e){
  console.log(e);
})

// Recorriendo Ejemplo 3. Arrays ForEach
const frutass = ["Lulo", "Fresa", "Manzana", "Papaya", "Melocotón", "Mora", "Piña" ];
frutass.forEach( e => 
  console.log(e));


// Filter() 
const Empleados = [
  {
    nombre : "Carlos",
    cargo  : "Web master",
    salario  : "5000000",
  },
  {
    nombre : "Natalia",
    cargo  : "Diseñadora",
    salario  : "3000000",
  },
  {
    nombre : "Gina",
    cargo  : "Gerente",
    salario  : "4000000",
  },
];

const calcular = Empleados.filter(value => value.salario >= 4000000);
console.log(calcular);



// Ejemplo trayendo según el numero de caracteres, solo funciona con strings
const frutas2 = ["Manzana", "Pera","Ajo", "Piña","Durazno", 123, 12, "uva"];
const res = frutas2.filter(valor => valor.length > 4);
console.log(res);


// Método Find() 

const desarrollo = [
  {
    id: 1,
    lenguaje: "Javascript",
    programacion: "Web y escritorio",
  },
  {
    id: 2,
    lenguaje: "Php",
    programacion: "Web y escritorio",
  },
  {
    id: 3,
    lenguaje: "Java",
    programacion: "Web y escritorio",
  },
];

// find() recorre el arreglo y trae la primera coincidencia que encuentre.
const result = desarrollo.find(post => post.lenguaje == "Php");
console.log(result);

*/

// Método map() INCOMPLETO


/* 
const programador = [
  {nombre: "Adrian", apellido: "Duran", lenguajes: "php",},
  {nombre: "Daniela", apellido: "Amaya", lenguajes: "Java y C#",},
  {nombre: "Sergio", apellido: "Montaño", lenguajes: ".net",},
  {nombre: "Duvan", apellido: "Diaz", lenguajes: "php"}
];

// Usando .map()
const estructuras  = programador.map(pro =>{
  return{
    id: pro.nombre,
    lenguaje: pro.apellido,
    programacion: pro.lenguajes,
    datos: `${pro.nombre} - ${pro.lenguajes}`
  }
});
console.log(estructuras);


 */


// QUEDAMOS AQUÍ - Sesión 16



/* 
// Método sort(), re-ordena los elementos del array de la 'A' a la 'Z'
const miArray = [5, 12,8,130,44,78,98];
const orden1 = miArray.sort((a,b) => a - b);
console.log(orden1);
console.log(miArray);

// Método toSorted(), ordena los elementos del array de la 'A' a la 'Z' sin re-ordenar el array original
const miArray2 = [5, 12,8,130,44,78,98];
const orden2 = miArray2.toSorted((a,b) => a - b);
console.log(orden2);
console.log(miArray2);
 */

/* 

// Ejemplo:
const sorti = ["padre","Madre","Padre","madre", 1, 2, 3, "hijo", "Hijo" ];
sorti.sort();
console.log(sorti);
 




// función comparar
function compare(a,b){
  if(a < b ){
    return -1;
  }

  if(a > b){
    return 1;
  }
  
  return 0;
}

console.log(compare(2,6));

 */

//Tarea: Usando el comparador anterior, 1 arreglo = 5 objetos(nombre,edad), usar  sort( commpare estilo calbat, es decir pasar a funcion comparar dentor del sort()) 

// Sesión 16 FIN


/* 
const miArray = [
  {id: 3, nombre: "Nidia", edad: 22},
  {id: 1, nombre: "Carl", edad: 66},
  {id: 2, nombre: "Jesus", edad: 55},
  {id: 5, nombre: "Ryan", edad: 44},
  {id: 4, nombre: "Albert", edad: 33},
];
// Ordenar por id menor a mayor:
miArray.sort((a, b) => a.id - b.id);
console.log(miArray);

// Ordenar por edad menor a mayor:
miArray.sort((a, b) => a.edad - b.edad);
console.log(miArray);

// Ordenar por nombre menor a mayor:
miArray.sort((a, b)  => a.nombre.localeCompare(b.nombre));
console.log(miArray); 
*/

