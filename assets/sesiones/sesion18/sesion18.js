/* 
// Usando flat() - Unifica 
const numeros = [1,2,3,5,6,[7,8,9,10,[12,45,75]]];
console.log(numeros.flat());



// ejemplo 2 
const numeros2 = [1,2,3,5,6,[7,8,9,10,[12,45,75]]];
console.log(numeros2.flat(2));



// Usando isArray()

var arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr1.isArray());

// Usando from()
console.log(Array.from("2345456"));


 
// #### PARÁMETRO REST
function sumar (a,b,c, ...otros){
  let suma = a + b + c; 
  otros.forEach(n => suma += n);
  return suma;
}

console.log(sumar(2,4,5,5));
console.log(sumar(2,4,5,5,3));
console.log(sumar(2,4,5,5,3,4,5));
console.log(sumar(2,4,5,5,5,8,9));
console.log(sumar(2,4,5,5));

// Ejemplo 2 
function myFun(a,b, ...otros){
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", otros);
}

myFun("one", "two", "Three", "For", "Five");



// Operador Spread
const nu = [1,2,3,4,5,6];
const num = [7,8,9,10,11,12];
console.log(nu, num);
const arre = [...nu, ...num];
console.log(arre);

const arre = [0, ...nu, "numero",  ...num];




// ### PILAS
class Stack {
  constructor(){
    this.stack = [];
  }

  push(element){
    this.stack.push(element);
    return this.stack;
  }

  pop(){
    return this.stack.pop();
  }

  peek(){
    return this.stack[this.stack.length - 1];
  }

  size(){
    return this.stack.length;
  }

  print(){
    console.log(this.stack);
  }
}

const stack = new Stack();
console.log(stack.size());
console.log(stack.push('Jhon Cena'));
console.log(stack.push('The Rock'));
console.log(stack.size());
stack.print();
console.log(stack.peek());
console.log(stack.pop());



// Usando PILAS con NODOS
// Creamos una clase para cada nodo dentro de la pila.

class Node{
  // cada nodo va a tener dos propiedad, valor o apuntador(Nodo que sigue)
  constructor(value){
    this.value = value;
    this.siguiente = null;
  }
}

// Creamos la clase pila
class Stack{
  // La pila tiene tres propiedades, el primer nodo, el ultimo nodo y el tamaño de la pila
  constructor(){
    this.primero = null;
    this.ultimo = null;
    this.size = 0;
  } 
  // retornar el ultimo valor ingresado a la pila
  peek(){
    return this.primero;
  }
  // creamos el método push el cual recibe un valor y lo ingresa a la pila
  push(val){
    let nNode = new Node(val);
    if(!this.primero){
      this.primero = nNode;
      this.ultimo = nNode;
    }else{
      let temp = this.primero;
      this.primero = nNode;
      this.primero.siguiente = temp; 
    }
    return ++ this.size;
  }

  // pop() elimina el elemento de la parte superior de la pila
  pop(){
    if(!this.primero) return null
    let tem = this.primero;
    if(this.primero === this.ultimo){
      this.ultimo = null;
    }

    this.primero = this.primero.siguiente;
    this.size--
    return tem.value

  }

}

const stack = new Stack;
stack.push("dato1");
stack.push("dato2");
stack.push("dato3");
console.log(stack.primero);
console.log(stack.peek());
console.log(stack.size);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack);

*/