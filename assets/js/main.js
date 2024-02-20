//Funciones Flechas o arrow functions

/* function sumar(num1, nun2) {
    
    return num1 + nun2;
}


console.log('funcion', sumar(10, 18))

let sumar2 = (num1, num2) => {

    return num1 + num2
}

console.log('funcion arrow', sumar2(10, 18))

let sumar3 = (num1, num2) => num1 + num2

console.log('funcion arrow2', sumar3(10, 18))


const saludo = name => `Hola ${name}`

console.log(saludo('Francisco'))


const saludo2 = () => 'Hola ¿Como estas?'

console.log(saludo2())


const usuario = {
  name: "Juan",
  mostrarNombre: function() {
    return this.name;
  },
};
console.log(usuario.mostrarNombre());  */

/* import  suma  from '../modulo/operaciones.js'
import { resta, multiplicacion } from '../modulo/calculos.js'


console.log('suma', suma(30, 50))


console.log('resta', resta(50, 30))

console.log('multiplicacion', multiplicacion(10, 5)) */

//Tener valores por defaul

/* function foo(a, b, c) {
  //ES5
  a = a || 1;
  b = b || 2;
  c = c || 3;
  return a + b + c;
}

console.log(foo(10))

let operacion = (a, b = 20 ) => console.log(a + b)

operacion(50, 80)

operacion(50, 100)

let saludar = (name = 'Paulina')=> `Hola ${name}`

console.log(saludar('Joaquin')) */

//alcance var

/* console.log(name)

var name = 'Natalia'

console.log(name) */

// alcance de let
/* 
console.log(apellido)

let apellido = 'Perez' */



/* console.log(saludo('oscar'))


function saludo(nombre) {
return `Hola ${nombre}`
} */



/* var fullName = (name, surname) => console.log(`${name} ${surname}`) */

/* var fullName = function (name, surname) {
  console.log(`${name} ${surname}`);
};

fullName("Misheyla", "Romero"); */


//Forma de definir las Classes

class Estudiante {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let paula = new Estudiante('Paula', 20)
console.log(paula)

let francisco = new Estudiante('Francisco', 21)
console.log(francisco)

class Cuadrado {
  constructor(lado) {
    this.lado = lado
  }
  calcularArea() {
    return `El area del cuadrado con lado ${this.lado} es: ${this.lado * this.lado}`
    }
    calcularPerimetro() {
      return `El perimetro del cuadrado con lado ${this.lado} es: ${this.lado * 4}`
    }
}

let cuadrado = new Cuadrado(10)

console.log(cuadrado.calcularArea())
console.log(cuadrado.calcularPerimetro())

class Rectangulo{
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }
    calcularArea() {
        return `El area del rectangulo con base ${this.base} y altura ${this.altura} es: ${this.base * this.altura}`
    }
    calcularPerimetro() {
        return `El perimetro del rectangulo con base ${this.base} y altura ${this.altura} es: ${this.base * 2 + this.altura * 2}`
    }
}

class Circulo {
    constructor(radio){
        this.radio = radio
    }
    calcularArea() {
        return `El area del circulo con radio ${this.radio} es: ${Math.PI * this.radio * this.radio}`
    }
    calcularPerimetro() {
        return `El perimetro del circulo con radio ${this.radio} es: ${2 * Math.PI * this.radio}`
    }
}

const rectangulo = new Rectangulo(3, 4)
console.log(rectangulo.calcularArea())
console.log(rectangulo.calcularPerimetro())
const circulo = new Circulo(3)
console.log(circulo.calcularArea())
console.log(circulo.calcularPerimetro())


class Animal {
    constructor(raza) {
        this._raza = raza
    }
    get raza() {
        return this._raza
    }
    set raza(newraza) {
        this._raza = newraza
    }
   
}

let perro = new Animal('Labrador')
console.log(perro.raza)
perro.raza = 'Pastor aleman'
console.log(perro.raza)


