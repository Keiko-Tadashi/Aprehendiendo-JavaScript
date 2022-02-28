/*
*  CONTINUE: Básicamente lo que hace es ir a la siguiente iteración.
* 
*/
for(let contador = 0; contador <= 10; contador++){
     console.log(contador);
     if( contador % 2 == 0){
         console.log(contador);
         break;                 //termina la ejecución del ciclo for por completo 
     }
 }
 console.log( 'Fin del ciclo for');
 

for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;               //ir a la siguiente iteracion
    } 
    console.log(contador);
}