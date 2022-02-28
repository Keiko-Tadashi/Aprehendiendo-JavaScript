//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//! Ahora si queremos recorrer todos los elementos de una sola vez lo podemos hacer utilizando for
/* Para ello inicializamos una variable de nombre i y la iniciamos en 0; a continuación decimos que i es menor a el largo de nuestro arreglo que en este caso usaremos la propiedad de .lenght, que es la que nos va a proporcionar la cantidad de elementos de nuestro arreglo, finalmente agregamos la interacción de for por cada elemento de nuestro arreglo.
*/ 
for(let i = 0; i < autos.length; i++){
   console.log(autos[i]);                // Aqui obtenemos cada uno de los elemntos de autos.
   console.log(i + ' : ' + autos[i] );   // y de esta manera obtenemos el valor de indice y los elementos de autos. 
}
