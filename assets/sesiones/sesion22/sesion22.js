/* 
// Solución ejercicio:
class Grafo{
  // Solo maneja una sola propiedad
  constructor(){
    this.adjacencyList = {};
  }

  // Creamos la función que tomará el valor del nodo como parámetro y lo agrega como
  //  parametro y lo agrega como clave a adjacencyList
  addVertices(node){
    if(!this.adjacencyList[node]) this.adjacencyList[node] = [];
  }
  // Toma dos nodos como parámetros y lo agrega cada nodo a la matrix de conexionas
  addArista(node1, node2){
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1); // Trabajando con nodos no dirigidos
  }
  // Va a tomar 2 nodos como parámetros y agrega cada nodo a la matrix de conexión
  addArista2(node1, node2){
    this.adjacencyList[node1].push(node2); // Trabajando con nodos dirigidos
  }

}

const departamento = new Grafo();

departamento.addVertices(3);
departamento.addVertices(5);
departamento.addVertices(6);
departamento.addVertices(7);
departamento.addVertices(8);
departamento.addVertices(9);


departamento.addArista2("3", "9");
departamento.addArista2("3", "5");
departamento.addArista2("3", "7");
departamento.addArista2("7", "3");
departamento.addArista2("7", "6");
departamento.addArista2("5", "3");
departamento.addArista2("5", "6");
departamento.addArista2("5", "8");


console.log(departamento); 
 */




/* 
// ## Algoritmo de Búsqueda binaria

// Ejemplo 1 explicación:
// Definición de la función de búsqueda binaria
function BusquedaBi(datos, valor){
  // Inicialización de los punteros izquierdo y derecho
  let izq = 0;
  let der = datos.length - 1;

  // Ciclo de búsqueda binaria mientras izquierda sea menor o igual a derecha
  while(izq <= der){
    // Cálculo de la mitad del arreglo y redondeo al entero más cercano
    let mitad = Math.floor((izq + der) / 2);
    // Obtención del valor en la posición de la mitad
    let dato = datos[mitad];

    // Comprobación si el valor en la mitad es igual al valor buscado
    if(dato == valor){
      // Se encontró el valor, se devuelve la posición de la mitad
      return mitad;
    }
    // Si el valor buscado es mayor al valor en la mitad
    else if(valor > dato){
      // Se ajusta el puntero izquierdo para buscar en la mitad derecha del arreglo
      izq = mitad + 1;
    }
    // Si el valor buscado es menor al valor en la mitad
    else{
      // Se ajusta el puntero derecho para buscar en la mitad izquierda del arreglo
      der = mitad - 1;
    }
  }

  // Si no se encontró el valor en el arreglo, se devuelve -1
  return -1;
}

const arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,23,34,45,56];

let num = 11;
console.log(BusquedaBi(arreglo, num ));
 */



/* 
// Ejemplo de búsqueda binaria 2
function BusquedaBinaria(arr, izq, der, n){
  if(izq > der) return -1;

  const mitad = Math.floor((izq + der) / 2);

  if(arr[mitad] == n) return mitad;

  if(arr[mitad] < n){
    return BusquedaBinaria(arr, mitad + 1, der, n)
  }else{
    return BusquedaBinaria(arr, izq, mitad -1, n);
  }
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,23,34,45,56];
console.log(BusquedaBinaria(arr, 0, arr.length -1, 3)); 
*/


/* 
// Algoritmo quicsort
function quicksort(num){
  if(num.length <= 1){
    return num;
  }

  let izq = [];
  let der = [];
  let aux = [];
  let pivote = num.pop();
  let n = num.length;

  for(let i = 0; i < n; i++ ){
    if(num[i] <= pivote){
      izq.push(num[i]);
    }else{
      der.push(num[i]);
    }
  }
  return aux.concat(quicksort(izq), pivote, quicksort(der));
}

let arr = [14, 23, 3, 4, 54, 6, 7, 8, 9, 1, 11, 12, 13, 22, 34, 32, 56,65,16,78,87,98];
console.log(arr); 

let res = quicksort(arr); 
console.log(res); 
*/



/* 

// Ejemplo dos
const QSort = (nums) => {
  // caso base que parará la recursión ya que un arreglo que solo contiene
  // un elemento, ya está ordenado
  if (nums.length < 2) return nums;

  const pivot = nums[0];
  const pequeño = [];
  const grande = [];

    // ya que escogimos el primer elemento como pivote,
    // empezamos a recorrer el arreglo desde el segundo elemento
    for(let i = 1; i < nums.length; i++) {
    if(nums[i] < pivot) pequeño.push(nums[i]);
    else grande.push(nums[i]);
  }

  // puedes unir las sub-listas ordenadas usando spread de ES6 o .concat(
  return [...QSort(pequeño), pivot, ...QSort(grande)];
}

let arr = [14, 23, 3, 4, 54, 6, 7, 8, 9, 1, 11, 12, 13, 22, 34, 32, 56,65,16,78,87,98];
console.log(arr); 

let res = QSort(arr); 
console.log(res); 
*/





// Implementación Merge()
function mergesort(izq, der){
  let i = 0;
  let d = 0;
  let res = [];

  while (i < izq.length || d < der.length){
    if(i === izq.length){
      res.push(der[d]);
      ++d;
    }else if(d === der.length || izq[i] <= der[d]){
      res.push(izq[i]);
      ++i;
    }else{
      res.push(der[d]);
      ++d;
    }
  }
  return res;
}

let num = [2,11,23,45,67];
let num2 = [3,12,24,54,87, 93];

let rest = mergesort(num, num2);
console.log(rest);
console.log(rest.length);

