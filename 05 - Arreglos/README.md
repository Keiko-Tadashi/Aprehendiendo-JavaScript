# _ARREGLOS EN JAVASCRIPT_

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

## _Arreglos (arrays)_

_El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel. Es un conjunto de datos o una estructura de datos no homogéneos que se encuentran ubicados en forma consecutiva en la memoria RAM._
_ Los arrays en JavaScript se declaran como cualquier otra variable, escribiendo `var`,`let` o `const` seguido del nombre del array por lo que la sintaxis seria:_

    var personas = ['Daniel', 'Dario','Pepito Honguito'];
    let frutas = ["Manzana", "Banana"];
    const autos = ['BMW','Mercedes Benz','Volvo'];

    console.log(personas);   
    console.log(frutas);      
    console.log(autos);   

## _Acceder a elementos de arreglo_
_Algo que debemos de tener en cuenta para acceder a elementos de un arreglo es que los elementos comienzan con el indice `0`._ por ejemplo:

    const autos = ['BMW','Mercedes Benz','Volvo'];
    console.log(autos);

_En este caso el primer elemento del arreglo `autos` sería `BMW` y se reprecentaria con el número `0` en caso de tener mas elementos se incrementaria de uno en uno, por lo tanto al pedir que nos muestre por consola el primer elemento del arreglo `autos`, nos quedaria de la siguiente forma:_

    console.log(autos[0]);    

## _Modificar valores de un arreglo_
_Teniendo en cuenta nuestro arreglo `autos`, supongamos que queremos quitar el espacion del elemento `Mercedes Benz`, para ello ejecutariamos el siguiente codigo:_

    autos[1] = 'MerecedesBenz';
    console.log(autos[1]);

_Y en el caso de que quisieramos agregar un elemnto al arreglo `autos`, lo hariamos utilizando la propiedad `.push`.

    autos.push('Audi');
    console.log(autos);

_Sin embargo, existen otras formas de agregar elememtos a un arreglo pero debemos tener cuidado al utilizarlas. Por eso ahora vamos a ver por que y que cuidados debemos de tener un cuenta. Para ello debemos saber diferenciar entre indice y elemento en un arreglo, lo vamos a explicar de la siguiente manera, el indice es el número de lugar que ocupa cada elemento del arreglo._

_Para ello vamos a usar el arreglo `autos`, donde se tiene 3 elementos que serian `'BMW','Mercedes Benz','Volvo'`, y teniendo en cuanta que el indice de un arreglo comienza con `1`, nos daria como resultado que auto tiene indice `3`, para ejemplificarlo nos quedaria asi:

    const autos = ['BMW','Mercedes Benz','Volvo'];
    console.log(autos);                             // _Nos mostraria en consola_ ['BMW','Mercedes Benz','Volvo']
    console.log(autos.length);                      // _Nos mostraria en consola_ [3]

_Otra forma de agregar elementos a un arreglo seria como el siguiente ejemplo._

    autos[5] = 'Porshe';
    console.log(autos);                             // _Nos mostraria en consola_ ['BMW','Mercedes Benz','Volvo', ,'Porshe']
    
_En este caso agragaria un elemento en el indice 5, dejando vacio el indice 4._

_En fin, si deseas conocer mas propiedades de arrays te recomiento que visites_ [developer.mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections)

## _Ahora bien, ¿como saber si estamos ante un arreglo?_

_Solo vamos a mencionar 2 formas, la primera es la la que se utilizaba antes._

    console.log(typeof autos);

_y la segunda es launa de las que se a agregado a partir de ECMA SCRIPT 2015._

    console.log( Array.isArray(autos) );



## _by_ Kapelusz !!! 
#### e-mail: ddaniel_calderon@hotmail.com 

 `Gracias !!!` :rose: