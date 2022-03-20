function map(f, a) {
    let result = [] // Crea un nuevo arreglo
    let i // Declara una variable
    for (i = 0; i != a.length; i++) // se recorre i tantas posiciones como tenga a
      result[i] = f(a[i]) // el resultado se almacena en result que va a ser igual a la funcion f de con valores de i
    return result
}
const f = function(x) {return x * x * x}  // es el valor del primer argumento
let numbers = [0, 1, 2, 5, 10]    // es el valor del segundo argumento
let cube = map(f,numbers)  // map queda almacenada dentro de la variable cube "exprecion de funcion"
console.log(cube)   // [10,11,12,15,20]