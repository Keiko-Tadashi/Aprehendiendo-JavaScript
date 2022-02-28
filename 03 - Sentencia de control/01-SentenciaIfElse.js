let condicion = false;

if( 2 < 3 ){                              // Si la condicion es verdadera, nos va a dar el mensaje de 
    console.log("Condición verdadera");     // "Condición Verdadera" y se termina el programa.
    console.log("fin del programa");
} else{                                     // Si la condición es falsa, nos dara el mensaje "Condición Falsa"
    console.log("Condición falsa");         // y terminaria el programa.  
}

// EJEMPLO
if ( 10 > 15 ) {
    console.log ( 'Es MAYOR');
    console.log ( ' Fin del programa');
} else {
    console.log ( ' Es MENOR')
}

// OTROS EJEMPLOS

//* Determinar si num es par ó impar, vamos a realizar el if de una forma abreviada, y solo nos dara el resultado por consola.

var num = 8;
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);


//* Determia si el numero es entero.

// Hay varias formas para comprobar si un numero es decimal o no pero quizás la más sencilla sea comprobando que el resto de la división del numero a analizar entre 1 sea igual a 0 lo que indicaría que es un numero entero y si el resultado es distinto de 0 el numero será decimal.


function esEntero(numero){
    if (numero % 1 == 0) {
        console.log ("Es un numero entero");
    } else {
        console.log ("Es un numero decimal");
    }
} 

// No estaría de más comprobar que ciertamente es un número con isNaN(numero) que devuelve false en caso de que sea un número y true en el caso en el que no se un numero.

function esEntero(numero){
    if (isNaN(numero)){
        alert ("Ups... " + numero + " no es un número.");
    } else {
        if (numero % 1 == 0) {
            alert ("Es un numero entero");
        } else {
            alert ("Es un numero decimal");
        }
    }
}

//Otra opción es usar Math.floor() para obtener la parte entera del numero y restársela al numero y si es 0 pues entonces el número es entero y sino pues obviamente no.

function esEntero(numero){
    if (numero - Math.floor(numero) == 0) {
        alert ("Es un numero entero");
    } else {
        alert ("Es un numero decimal");
    }
}