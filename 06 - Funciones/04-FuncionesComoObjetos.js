//! Declaración de la función. 

//* Notemos aqui que la funcion posee un cosole.log con la propiedad argument, esta nos dice la cantidad de argumentos que tiene nuestra funcion, para ello la debemos utilizar junto con la propiedad .length. una caracteriztica de esta propiedad es que solamente la podemos utiliar dentro de la funcion. Esta es una de la formas que tenemos de comprobar que una funcion es un objeto

function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

//! Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//! Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

(function (x, y){
    console.log('Ejecutando la función: ' + (x + y));
})(3, 4);

console.log(typeof miFuncion);


//* Otra de las formas que tenemos de comprobar esto es usando el metodo .toString. recordemos que funcion y metodo es exactamente lo mismo.

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
