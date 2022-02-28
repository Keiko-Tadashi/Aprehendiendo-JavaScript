//Declaración de la función
function miFuncion(a, b){
    return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

// En JavaScript tambien exiten funciones que se mandan  llamar asi mismas, a esto se le conoce como sel invoking. Para definir una funcion de este tipo se lo hace de la siguiente manera:
//* Se la define entre parentesis, con la palabra reservada function puede tener o no argumentos. esta funcion simplemente va a mandar a imprimir un mensaje a consola

(function (x, y){
   console.log('Ejecutando la función: ' + (x + y));
})( 3 , 4 );