/* 

// Enlace para afianzar conocimientos sobre pilas https://wiki.yowu.dev/es/Knowledge-base/Algorithm/javascript-011-stack

// Repaso pila

class stack {
  constructor() {
    this.head = null;
  }

  push(element) {
    const node = {
      data: element,
      next: this.head
    };
    this.head = node;
  }

  pop() {
    const node = this.head;
    this.head = node.next;
    return node.data;
  }
}

// Crear una nueva instancia de stack
const myStack = new stack();

// Agregar elementos a la pila
myStack.push('A');
myStack.push('B');
myStack.push('C');

// Mostrar la pila después de agregar elementos
console.log(myStack);

// Eliminar un elemento de la pila y mostrarlo
console.log(myStack.pop());

// Mostrar la pila después de eliminar un elemento
console.log(myStack);











// ## COLAS https://wiki.yowu.dev/es/Knowledge-base/Algorithm/javascript-012-queue
class Queue{
  constructor(){
    this.queue = [];
  }

  enqueue(element){ // Agrega un elemento al final de la cola.
    this.queue.push(element);
    return this.queue;
  }
  
  dequeue(){ // Elimina y devuelve el elemento en el frente de la cola.
    return this.queue.shift();
  }

  peek(){ // Devuelve el elemento en el frente de la cola sin eliminarlo.
    return this.queue[0];
  }

  size(){
    return this.queue.length;
  }

  isEmpty(){ // Verifica si la cola está vacía.
    return this.queue.length === 0;
  }

  print(){
    return this.queue;
  }
}

const newCola = new Queue();

newCola.enqueue(1);
newCola.enqueue(2);
newCola.enqueue(3);

console.log(newCola);
console.log(newCola.dequeue());
console.log(newCola);
console.log(newCola.peek());
console.log(newCola.size());
console.log(newCola.isEmpty());
console.log(newCola.print());


// Ejemplo 2 - Cola con prioridad
let queue = [];

function enqueue(item, priority) {
  let node = {
    data: item,
    priority: priority,
    next: null
  };

  if (queue.length === 0) {
    queue.head = node;
  } else {
    let current = queue.head;
    let previous;

    while (current && current.priority >= node.priority) {
      previous = current;
      current = current.next;
    }

    if (!previous) {
      node.next = queue.head;
      queue.head = node;
    } else {
      node.next = current;
      previous.next = node;
    }
  }

  queue.length++;
}

function dequeue() {
  let node = queue.head;
  queue.head = node.next;
  queue.length--;
  return node.data;
}

enqueue('A', 1);
enqueue('B', 2);
enqueue('C', 3);
enqueue('D', 4);
enqueue('E', 5);

console.log(dequeue()); // A
console.log(dequeue()); // B
console.log(dequeue()); // C
console.log(dequeue()); // D
console.log(dequeue()); // E

 








// Ejercicio 3 - Usando una class
// Creamos la clase nodo.
class Node{
  constructor(value){ // Cada nodo tiene dos propiedades, valor y puntero que indica el nodo que sigue
    this.value = value;
    this.next = null;
  }
}

// Creamos la clase para la cola
class Cola{
  constructor(){ // Tres propiedades 'First', 'last', size
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // creamos la función para agregar los elementos, recibe el valor y lo agrega al final
  enqueue(val){
    let newNode = new Node(val);

    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++ this.size;
  }

  // Creamos la función que elimina el valor inicial de la cola 
  dequeue(){
    if(!this.first) return null;
    let tem = this.first;
    if(this.first === this.last){
      this.last = null;
    }

    this.first = this.first.next;
    this.size --
    return tem.value;
  }

}

const cola = new Cola;
cola.enqueue("Primero");
cola.enqueue("Segundo");
cola.enqueue("Tercero");
cola.enqueue("Cuarto");
cola.enqueue("Quinto");
console.log(cola)

console.log(cola.first);
console.log(cola.last);
console.log(cola.size);
console.log(cola.dequeue());

console.log(cola.first);
console.log(cola.last);
console.log(cola.size);
console.log(cola.dequeue());

console.log(cola.first);
console.log(cola.last);
console.log(cola.size);
console.log(cola.dequeue());

console.log(cola.first);
console.log(cola.last);
console.log(cola.size);
console.log(cola.dequeue());

console.log(cola.first);
console.log(cola.last);
console.log(cola.size);
console.log(cola.dequeue());

console.log(cola.first);
console.log(cola.last);
console.log(cola.size);
console.log(cola.dequeue()); 








// ## LISTAS ENLASADAS  https://wiki.yowu.dev/es/Knowledge-base/Algorithm/javascript-015-single-linked-list

// Creamos la clase nodo
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Creamos la clase para la lista enlazada
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }
}

const lista = new LinkedList;
lista.insertAtHead("Primer");
lista.insertAtHead("Segundo");
console.log(lista);

lista.insertAtTail("Tercero");
lista.insertAtTail("Cuarto");
console.log(lista)


// Tarea montarlo completo esta en el enlace. Para el lunes */