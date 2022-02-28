//               ** EJEMPLO CON WHILE COMPARADO CON DO WHILE
                                         // ** SE LEE DE LA SIGUIENTE MANERA !!!
let contador = 0;                        // Declaramos una variable llamada 'contador' y le damos el valor de '0'
                                         // Empezamos el ciclo 'while' y entre parentesis ponemos la expresion a realizar cada vez que sea verdadera.
while( contador < 3 ){                   // 'mientras' ( contador sea menor de 3) ejecutar 
    console.log(contador);               //          mostrar en consola ( contador );
    contador++;                          //          contador incrementar en 1
}                                        // fin de ejecución
console.log("Fin ciclo while");          // mostrar en consola ( 'Fin ciclo While' )

//░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//let contador = 0;

do {
    //if (contador > 3) { console.log( ' Es mayor a 3')};
    console.log(contador);
    contador++;
} while(contador < 3);
console.log("Fin ciclo do while");


//* La principal diferencia de while con do while !!! 

//* Es que mientras en do while la sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a 
//* verdadera, mientras que en while si la sentencia es falsa directamente no se ejecuta la condición

