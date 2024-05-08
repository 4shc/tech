/* 
// Arrays / some()
const programador = [
  {
    id: 1,
    nombre: "Juan",
    lenguaje: "Php",
  },
  {
    id: 2,
    nombre: "Jey",
    lenguaje: "Python",
  },
  {
    id: 3,
    nombre: "Bryan",
    lenguaje: "Javascript",
  },
];




// Devuelve 'true' o 'false'
const songg = programador.some(post => post.id == 1);
console.log(songg);




// Usando 'include' y 'some'
const ind = programador.some(posta => posta.lenguaje.includes("Php"));
console.log(ind);



// Usando 'filter' y 'include'
const Empleados = [
  {
    nombre: "Dario",
    salario: "1200000",
    aux: "750000",
    sot: "web",
  },
  {
    nombre: "Steve",
    salario: "2300000",
    aux: "300000",
    sot: "web",
  },
  {
    nombre: "Laura",
    salario: "5000000",
    aux: "1200000",
    sot: "web",
  },
];

const prueba = Empleados.filter(post => post.nombre.includes('Laura'));
console.log(prueba);



// Usando 'every' - Sirve para saber si la palabra "xXX"  se repite en todo el array
const vali = Empleados.every( post => post.sot.includes("web"));
console.log(vali);

// Ejemplo 2 
const arreglo = [35, 28, 31, 25, 29];
const test = (elemento) => elemento > 20;
let res = arreglo.every(test);
console.log(res);

// Ejemplo 2 
const arreglo1 = [35, 28, 31, 25, 29];
const copia = arreglo1.every(element => element > 20);
console.log(copia);





// Usando concat() - Se usa para unir arrays
const ejem1 = ["A", "Maria", "Julian"];
const ejem2 = ["B", "Jairo", "Roberth"];
const union = ejem1.concat(ejem2);
console.log(union);





// Usando include()
const arreg = [35, 28, 56, 45];
console.log(arreg.includes(35));
console.log(arreg.includes(20));






// Usando join() - Separa
const alf = ["a", "b", "c", "d", "e"];
console.log(alf)
console.log(alf.join());
console.log(alf.join(' '));
console.log(alf.join('-'));
console.log(alf.join(', '));




// Usando reduce() 
const numeros = [1,2,3,4,5,6,7,8,9,10];
const num = numeros.reduce((a, b) => a + b ); 
console.log(num);





// Usando indexOf()
const frutas = ["Manzana", "Pera", "Piña"];
const valor = frutas.indexOf('Piña');
const valor1 = frutas.indexOf('Manzana');
const valor2 = frutas.indexOf('Maracuya');
const valor3 = frutas.indexOf(3);
console.log(valor, valor1, valor2, valor3);



// Usando findIndex()
const frutasA = ["Manzana", "Pera", "Piña"];
const valorr = frutasA.findIndex(a => a == "Pera");
console.log(valorr);





// Usando shift()
const frutasB = ["Manzana", "Pera", "Piña"];
frutasB.shift();
console.log(frutasB);





// Usando unshift()
const frutasC = ["Manzana", "Pera", "Piña"];
frutasC.unshift("Zapote");
console.log(frutasC);





// Usando reverse() - Cambie el orden de un array sin modificar el original
const frutasD = ["Manzana", "Pera", "Piña"];
console.log(frutasD.reverse());
console.log(frutasD)






// Usando toReverse() - 
const frutasE = ["Manzana", "Pera", "Piña"];
console.log(frutasE.toReversed());
console.log(frutasE);





// Usando splice()
// Ejemplo 1
const meses = ['Jan', 'March', 'April', 'June' ];
meses.splice(1,0,'Feb');
console.log(meses);

meses.splice(4, 1,'May');
console.log(meses);

// Ejemplo 2
const splicee = ["Nombre", "Apellido", "Correo", "Direction" ];
const splicee = splicee.splice(1, 0, "Direction");
console.log(splicee);


 */