
/* 
if( 5 == 4 || 6 == 8 ){
  console.log("Si cumple la condición ")
}else{
  console.log("No cumple la condición ")
} 
*/

/*
// Switch Case
variable1= 4;

switch (variable1){
  case 1:
    console.log("Variable es igual a uno");
    break;
  case 2:
    console.log("Variable es igual a dos");
    break;
  case 3:
    console.log("Variable es igual a tres");
    break;
  default:
    console.log("El valor no coincide con ninguno de los casos definidos");
}
*/

/* Ejercicio 1.
let creditos;
let ingreso =  "Salas: ";
creditos =2;

switch (creditos){
  case 1:
    console.log("Tiene acceso a la sala niños de 5 a 8 años");
    break;

  case 2:
    console.log("Tiene acceso a la sala niños de 7 a 9 años");
    break;

  case 3:
    console.log("Tiene acceso a la sala niños de 9 a 12 años");
    break;

  case 4:
    console.log("Tiene acceso a la sala niños de 12 a 15 años");
    break;

  default:
}
*/

/* Ejercicio 1. Usando prompt
let creditos;
let ingreso =  "Salas: ";
creditos = parseInt(prompt("Cuantos creditos vas a comprar ?"));

switch (creditos){
  case 1:
    ingreso += " de niños a 5 a 8 años";
    break;

  case 2:
    ingreso +=  " de niños a 8 a 10 años";
    break;

  case 3:
    ingreso +=  " de niños a 10 a 13 años";
    break;

  case 4:
    ingreso +=  " de niños a 14 a 16 años";
    break;

  default:
}
alert(ingreso);
*/

/*
// Factorial
let n;
n = parseInt(prompt("Ingresa tu número para hallar su factoría"));
var fact = 1;

for(let i = 1; i<= n; i++ ){
  fact *= i;
  console.log(i);
}
alert(" El factorial del número " + n + " es " + fact);
*/


/* let resul;
let = numero;
let par = 0;
let i;

numero = parseInt(prompt("Ingresa tu número para hallar su factoría"));

 */



/*
let num;
let result = ""; // Inicializamos la variable result
num = parseInt(prompt("Ingresa tu número para hallar su factoría"));

for (let i = 1; i <= num; i++){

  if (i % 2 === 0){
    result += i + "\n";
    alert(result);
  }
}
*/


/* FOR OF - FOR IN
let lista_personas = [
  {
    "nombre" : "carlos",
    "tipo" : "persona",
    "id" : "435",
  },
  {
    "nombre": "hugo",
    "tipo" : "persona",
    "id" : "876",
  },
  {
    "nombre": "daniel",
    "tipo" : "persona",
    "id" : "673",
  }
]
for(let personas of lista_personas){
  console.log(personas.nombre);
  console.log(personas.id);

  for (let propiedad in personas){
    console.log(propiedad);
  }
}
*/


n = 0;
x = 0;

while (n < 3){
  n++;
  x += n;
}
console.log(x);

let contadorr = 0;
let iterarr = true;

while(iterarr == true){
  console.log(contadorr);
  if(contadorr == 5){
    iterarr = false;
  }
  contadorr++;
}
console.log(contador);