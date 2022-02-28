//Declaración de la función
function miFuncion(a, b){
     return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

// Las finciones tambien podemos asignarlas a una variable, a estas se las conoce como funciones de tipo expresion o funciones anonimas ahora eremos como hacemos esto:

//* declaracion de una funcion de tipo expresion 
let x = function ( a , b ){ return a + b };
resultado = x(1,2);
console.log(resultado);