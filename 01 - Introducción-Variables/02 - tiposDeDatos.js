//* Tipo de dato string
var datoString = "Kapelusz";
console.log(typeof datoString);

//* Tipo de dato numerico
var numero = 1000;
console.log(numero);

//* Tipo de dato object
var objecto = {
    nombre : "Thomas",
    apellido : "Calderon",
    telefono : "2634595857"
}
console.log(objecto);

console.log(typeof objecto);

//* Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//* Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//* Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//* Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//* Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//* null = ausencia de valor
var y = null;
console.log(typeof y);

//* arreglo en JavaScript
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//* Cadena vacia (empty string)
var z = '';
console.log(z);
console.log(typeof z)
