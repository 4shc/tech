/* ##WHILE
// Hacer un programa que imprima los números del 1 al 51 y debe hacer lo siguiente.
// Halla múltiplos de 3 y hallar los múltiplos de 5, somos múltiplos de 3 y 5.
// RTA:
let a = 1;

while(a <= 97){
  if(a % 3 == 0 && a % 5 == 0){
    console.log("Estos son los múltiplos de 3 y 5 " + a);
  }else if(a % 3 == 0){
    console.log("Estos son los múltiplos de 3: " + a);
  }else if(a % 5 == 0){
    console.log("Estos son los múltiplos de 5: " + a);
  }
  a++;
}
*/




/*
// Función primer caso:
function suma(a, b){
  let sumar = a + b;
  return sumar;
}
console.log(suma(5,6));

// Función segundo caso:
function sumar(){
  let a = 89;
  let b = 25;
  return a + b;
}
console.log(sumar());

// Función tercer caso:
function sumar1(){
  console.log("función sumar 1");
  console.log(123 - 97);
  console.log(123 * 97);
}
sumar1();

// Función cuarto caso Función anónima:
const sumas = function(num1, num2){
  return num1 + num2;
}
console.log(sumas(6,9));

// Función quinto caso - función flecha
let resultados = (a, b) => a + b;
console.log(resultados(12,12));

// Función sexto caso - función flecha segunda forma
const valores = () =>{
  let a = 15;
  let b = 17;
  return a * b;
}
console.log(valores());

// Función sexto caso - función flecha tercer forma
let mensaje = () => `Hola mundo`;
console.log(mensaje());

// Función con parámetro ya asignado su valor
let sumados = function (n = 8, a ){
  return n * a;
}
console.log(sumados(undefined, 2));
*/




/*
// EJERCICIO: Has una función que calcule la suma de los número de un arreglo.
function sumaArr(){
  let arreglo = [2, 5, 6, 8, 9, 12, 24, 56, 78];
  let sum = 0;  
  for (let i = 0; i < arreglo.length; i++) {
    sum += arreglo[i];
  }
  console.log("La suma de mi arreglo es: " + sum);
}
sumaArr();
*/


/*
// Ejercicio recorrer un array
function recorer() {
  let arreglos = ['Hola', 'Web', 'Php', 'Visual', '.net'];
  for (let i = 0; i < arreglos.length; i++) {
    console.log(arreglos[i]);
  }
}
recorer();
*/


/*
// Ejercicio
const array = [10,12,13,14, 'web', 'sql', '.net'];
array.forEach(function(elementos){
  console.log(elementos)
});

// Ejercicio
const frutas = ['melon','piña', 'papaya','fresa'];
frutas.forEach(element =>
  console.log(element)
  );
*/


/* 
// FILTER método de un arreglo
const frutas = ['melon','piña', 'papaya','fresa', 'mandarina', 'naranja', 'uva' ];
const result = frutas.filter(value => value.length < 7);
console.log(result);


// Ejercicio FILTER
const numeros = [1,2,3,4,5,6,7,8,9,0,11,12,23,24,25,27,67,56,98,76];
const resp = numeros.filter(calcularN);

function calcularN (result){
  return result % 2 == 0;
}
console.log(resp);



 */

