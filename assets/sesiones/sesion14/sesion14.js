/* const persona = {
  nombre : 'paco',
  edad : 10,
  raza : 'mestizo',

  correr () {
    console.log("")
  }

} */



/* 
function Ingeniero (nombre , edad, correo){
  this.super = Persona;
  this.super = (nombre, edad);
  this.correo = correo;
}

// Ingeniero hereda de Persona y se trae todo
// lo del prototipo principal
Ingeniero.prototype = new Persona();
Ingeniero.prototype.contructor = Ingeniero;

// Sobrescribirá del método del prototipo padre
Ingeniero.prototype.trabajar = function(){
  console.log("Me levanto 6am a trabajar");
}

// Hacemos un método propio
Ingeniero.prototype.trabajar = function(){
  console.log("Me levanto 6am a trabajar");
}

const  .....continua

*/




/* 
// Creamos nuestra clase principal. 
class Vehiculo{
  constructor(marca, color, modelo, TipoC, cRuedas, Estado, cPersonas, cilindraje){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.TipoC = TipoC;
    this.cRuedas = cRuedas;
    this.Estado = Estado;
    this.cPersonas = cPersonas;
    this.cilindraje = cilindraje;
  }

  // Definimos sus métodos propios de la función 'vehiculo'
  arrancar(){
    console.log("El vehículo arranco");
  }
}


// Creamos una clase que va a heredar atributos de 'vehiculo'
class Carro extends Vehiculo{
  constructor(marca, color, modelo, TipoC, cRuedas, Estado, cPersonas, cilindraje, nPuertas){
    
    super(marca, color, modelo, TipoC, cRuedas, Estado, cPersonas, cilindraje);
    this.nPuertas = nPuertas;
  }

  abrirBaul(){
    console.log("Se esta abriendo el baul");
  }

}


const ford = new Carro("scape", "negro", 2024, "Disesel", 4, "nuevo", 5, 2400, 4);
console.log(ford);
ford.arrancar();
ford.abrirBaul(); 
*/




/* 
// ContratacionE
// Empleado Fijo
// Empleado Prestacion de servicios

class Contratacion {
  constructor (nombre, cedula, contrato, salario, termino, empleador ){
    this.nombre = nombre;
    this.cedula = cedula;
    this.contrato = contrato;
    this.salario = salario;
    this.termino = termino;
    this.empleador = empleador;
  }
  contratado(){
    console.log("Felicidades " + this.nombre + " estas contratado");
  }
}

class EmpleadoFijo extends Contratacion{
  constructor(nombre, cedula, contrato, salario, termino, empleador, eps, pension){
    super(nombre, cedula, contrato, salario, termino, empleador);
    this.eps = eps;
    this.pension = pension;
  }
  contratoFijo() {
    console.log("Tu contrato es de tipo: '" + this.contrato + "' y tu salario es: '" + this.salario + "'");
  }  

}

class EmpleadoPrestacion extends Contratacion{
  constructor(nombre, cedula, contrato, salario, termino, empleador, cargo, practicante){
    super(nombre, cedula, contrato, salario, termino, empleador);
    this.cargo = cargo;
    this.practicante = practicante;
  }
  contratadoPrestacion(){
    console.log("Tu contrato es de tipo: '" + this.contrato + "' con un salario de: '" + this.salario + "'" );
  }

}

const newEmpleado = new EmpleadoFijo("Bryan", 1022485632, "Indefinido", 1500000, 1, "JuanIT", "Capital Salud", "Porvenir");
console.log(newEmpleado);
newEmpleado.contratado();
newEmpleado.contratoFijo();

const newEmpleado2 = new EmpleadoPrestacion("Carlos", 1135896322, "Prestación Servicios", 1300000, 0.6, "DianaIT", "Asistente", true);
console.log(newEmpleado2);
newEmpleado2.contratado();
newEmpleado2.contratadoPrestacion();

 
 */



/* 
// Ejercicio 2
class Animal{
  constructor(nombre, edad){
    this.nombre = nombre; 
    this.edad = edad; 
    this.velocidad = 0;
  }

  correr(velocidad){
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}`);
  }

  parar(velocidad){
    this.velocidad = 0;
    console.log(`${this.nombre} se queda quieto`);
  }
}

let conejo = new Animal("Ñao", 3);
console.log(conejo);
conejo.correr(60);
conejo.parar(); 
*/