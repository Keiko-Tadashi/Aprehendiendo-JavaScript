/*
* BREAK: En SWITCH la utilizamos para romper el caso que se esta ejecutando. En este caso la utilizamos para romper un ciclo. Y funciona 
* de la siguiente manera, cderrando por completo el ciclo for.
*/

for(let contador = 0; contador <= 10; contador++){
   // console.log(contador);
    if( contador % 2 == 0){
		console.log(contador);
        break;                 //termina la ejecución del ciclo for por completo 
    }
}
console.log( 'Fin del ciclo for');
