//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);


console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

//* Modificando valores de los elementos
autos[3] = 'Subaru';   
console.log(autos[1]);

//! Hay que tener especial cuidado con el uso de .length dentro de un arreglo. !!!!!!!

//* Agregando la propiedad .length, indicamos que agregamos un elemento al ultimo indice.
console.log(autos.length);
autos[autos.length] = 'Cadillac'; 
console.log(autos);

//* Mostrar el numero de elementos de un array .length()
console.log (autos.length);

//* Muestra el número de indice de un arreglo
console.log (autos.length - 1)

//* Agregando valores nuevos al final del arrelgo .push
autos.push('Audi');           
console.log(autos);

//* Agrega valores a un arreglo dejando un valores vacios en caso de saltearse en caso de tener mas indices
autos[7] = 'Porshe';   
console.log(autos);


//* Oredenar un array con .sort()
console.log(autos);
autos.sort();         // .sort() ordena el arreglo
console.log (autos);

//* Muestra que contiene un arreglo en determinada posición
console.log (autos[5]);

//* Agrega un elemento al final del arreglo .push() y ordena con .sort()
console.log (autos.push('Fiat'));
console.log (autos);
autos.sort();  // .sort() ORDENA EL ARREGLO!!!!!
console.log (autos);

//* Muestra el último elemento del arreglo y lo saca .pop()
console.log (autos.pop());
console.log (autos);


//* Agrega un elemento al principio del arreglo .unshift()
console.log (autos.unshift('Scania'));
console.log (autos);
autos.sort();
console.log (autos);

//* Muestra un elemento al principio del arreglo y lo saca .shift()
console.log (autos.shift());
console.log (autos);

//* Concatena elementos de un array .join()
let autos1 = ['Fiat', 'Porshe', 'BMW']
console.log (autos1.join( ' - '));