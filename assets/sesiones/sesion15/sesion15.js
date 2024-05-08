/* 
// Creamos una clase principal
class Empleado{
  constructor(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  // Con el método 'static' podemos usar esta función sin necesidad de instanciar la clase.
  static cuentaCobro(){
    console.log("Pasar la cuenta de cobro al llegar al día '3' de casa mes")
  }
}

// Llamado a la función sin instanciar la clase.
Empleado.cuentaCobro();

// Usamos herencia 
class Profesor extends Empleado{

  constructor(nombre, edad, genero, asignatura){
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.horas = null;
  }
  // para poder acceder a 'horas' que no esta definido como atributo usamos 'get'. Me permite ver el valor.
  get getHoras(){
    return this.horas;
  }
  // Para poder tomar el valor usamos 'set'
  set setHoras(horas){
    this.horas = horas;
  }
}


const empleado = new Empleado("Luis", 23, "Masculino");
console.log(empleado);


const docente = new Profesor("Raul", 33, "Masculino","Español");
console.log(docente);
console.log(docente.getHoras);

// Para usar 'set' y poder darle un valor, hacemos lo siguiente:
docente.setHoras = 45;
console.log(docente.getHoras); 
*/




/*
// EJERCICIO PRACTICO:: CORREGIR! CORREGIR! CORREGIR!
// class animal, 2 subclases, con parametros null

class Animal {
  constructor(nombre, tipo){
    this.nombre = nombre;
    this.tipo = tipo;
  }
  animalMessa(){
    console.log(`Hola soy un ${this.tipo} y me llamo ${this.nombre} y si, también hablo 😎 `)
  }
}
class animal1 extends Animal{
  constructor(nombre, tipo, patas){
    super(nombre, tipo);
    this.patas = null;
  }
  getPatas(){
    return this.getPatas;
  }
  setPatas(patas){
    this.patas = patas;
  }
}

const ballena = new animal1("Moby Dick", "Mamifero");
console.log(ballena);
ballena.setPatas = 2;
console.log(ballena.getPatas);

console.log(ballena);
// EJERCICIO PRACTICO:: CORREGIR! CORREGIR! CORREGIR!
*/





// ##### POLIMORFISMO
// Vamos a aplicar herencias, poliformismo, y sobrescritura de metodos


/* 
// Sobreescritura de métodos

class Personas{
  constructor(nombre, edad){
    this.nombre = nombre; 
    this.edad = edad; 
  }
  saludar(){
    console.log(`Buenas noches, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

class Desarrollador extends Personas{
  constructor(nombre, edad, tipo){
    super(nombre, edad);
    this.tipo = tipo;
  }
  // Sobreescribimosel metodo 'saludar()'
  saludar(){
    console.log(`Soy un desarrollador ${this.tipo}.`)
  }
}

let persona = new Personas("Carlos", 22);
console.log(persona);
persona.saludar();

let desarrollador = new Desarrollador("Bryan", 33, "FullStack");
console.log(desarrollador);
desarrollador.saludar(); 

*/



/*
// Polimorfismo
class Personas{
  constructor(nombre, edad){
    this.nombre = nombre; 
    this.edad = edad; 
  }
  saludar(){
    console.log(`Buenas noches, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

class Desarrollador extends Personas{
  constructor(nombre, edad, tipo){
    super(nombre, edad);
    this.tipo = tipo;
  }
  // Usando Polimorfismo quedaría de la siguiente forma:
  saludar(){
    super.saludar();
    console.log(`Soy un desarrollador ${this.tipo}.`);

  }

}

let persona = new Personas("Carlos", 22);
console.log(persona);
persona.saludar();

let desarrollador = new Desarrollador("Bryan", 33, "FullStack");
console.log(desarrollador);
desarrollador.saludar(); 
*/



/* class Bus {
  constructor(nPasajero, pasajes) {
    this.nPasajero = nPasajero;
    this.pasajes = pasajes;
  }

  static precioPasaje = 20000; 

  mensaje() {
    let totalP = this.pasajes * Bus.precioPasaje; 
    console.log(`Bienvenido ${this.nPasajero}, has comprado ${this.pasajes} pasajes y el total a pagar es de ${totalP} `);
  }
}

class Bus1 extends Bus {
  constructor(nPasajero, pasajes, destino) {
    super(nPasajero, pasajes);
    this.destino = destino;
  }

  mensaje() {
    super.mensaje();
    console.log(`Nuestra ruta es ${this.destino}`);
    if (this.pasajes >= 4) {
      let descuento = this.pasajes * Bus.precioPasaje * 0.15;
      let totalP = this.pasajes * Bus.precioPasaje - descuento;
      console.log(`Por tu compra tienes un descuento del 15%, es decir solo pagas ${totalP}`);
    }
  }
}

const bus1 = new Bus1("Juan", 2, "Ibague");
console.log(bus1);
bus1.mensaje(); */


