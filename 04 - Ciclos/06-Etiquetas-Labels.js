/*
* Labels o etiquetas: Aunque este uso no es recomendable es importante conocer la sintaxis, para poder identificarles cuando estemos revi
* sando otro codigo que no sea nuestro.
*/
inicio:

for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;         //ir a la siguiente iteracion
    }
    console.log(contador);
}