```javascript
const Kapelu = {
    name : 'Daniel Calderon',
    henry: 'FT-24b'
     code: ['Javascript', 'HTML', 'CSS', 'NodeJS'],
    tools: ['Visual Studio Code','GitBash', 'GitHub'],
   github: 'https://github.com/Kapelu'
}
```
<h1 align="center">FUNCIONES</h1>

Las funciones nos permiten agrupar líneas de código en tareas con un nombre, para que, posteriormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea. Para usar funciones hay que hacer 2 cosas:

* Declarar la función: Preparar la función, darle un nombre y decirle las tareas que realizará.
* Ejecutar la función: «Llamar» a la función para que realice las tareas de su contenido.

>***¿Como declaramos una función?*** La forma más común de definir una función es usando la palabra reservada `function` seguido de un único nombre de función, y de los parámetros deseados de la función, entre paréntesis y separados por comas, y un bloque de instrucciones dentro de llaves. Lo hacemos de la siguiente manera:
```javascript
// Declaración de la función "saludar"
function saludar() {
  // Contenido de la función
  console.log("Hola, soy una función")
}
```
>***¿Como ejecutamos una funcion?*** Para invocar una función desde cualquier parte de nuestro programa, solo es necesario escribir el nombre de la función creada seguido de paréntesis( en caso de tener parámetros indicarlos dentro, separados por comas). Para ello vamos a utilizar el ejemplo anterios donde declaramos la función saludar():
```javascript
// Declaración de la función "saludar"
function saludar() {
  // Contenido de la función
  console.log("Hola, soy una función")
}
// Ejecución de la función
saludar()
```
En este ejemplo hemos declarado la función y además, hemos ejecutado la función (en la última línea) llamándola por su nombre y seguida de ambos paréntesis, que nos indican que es una función. En este ejemplo, si se nos mostraría en la consola Javascript el mensaje de saludo.

Ahora bien, ya sabemos que es una función y como inicializarla. En el siguiente ejemplo vamos a ver de que manera podemos usar una funcion para multiples tareas dentro de nuestro codigo.

Vamos a crear una funcion que nos permita realizar las tablas de multiplicar.
```javascript
function tablaDeMultiplicar(num){
    for (let i = 0; i <=10; i++){
        let resultado = num * i 
        console.table(`${num} x ${i} = ${resultado}`)
    }
}
tablaDeMultiplicar(2)
/* Esto nos mostrara por consola
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
*/
```
Como vemos en este ejemplo le estamos dando el parametro de 2, lo que significa que realizaria la tabla del 2, en cuyo caso quisieramos hacer la tabla del 5, 7, 9 u 8, solo tendriamos que cambiar el parametro de 2 por el valor que deseemos.

**Parametro Argumento**

Ahora veremos que tambien podemos agregar mas de un parametro como argumento a las funciones y hacer cosas mucho mas interesante, usando el ejemplo anterior vamos a crear tablas de multiplicar hasta el 15 en este caso, pero el mismo codigo podemos crear las tablas hasta el 100 si deseamos, pero nosotros solo llegaremos hasta 15.
```javascript
function tablaDeMultiplicar(num, hasta){
    for (let i = 0; i <=hasta; i++){
        let resultado = num * i 
        console.table(`${num} x ${i} = ${resultado}`)
    }
}
tablaDeMultiplicar(2,15)    // el 2, es la tabla la cual vamos a crear y el 15 hasta donde va a llegar nuestra tabla.

/* Esto nos mostrara por consola
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
2 x 11 = 22
2 x 12 = 24
2 x 13 = 26
2 x 14 = 28
2 x 15 = 30
*/
```
<h1 align="center">Creación de funciones</h1>

Hasta ahora vimos como se declaran y como se ejecutan las funciones. Ahora veremos como crearlas.

>***Por DECLARACION:*** La forma más popular de todas, esta forma permite declarar una función que existirá a lo largo de todo el código. De hecho, podríamos ejecutar la función saludar() incluso antes de haberla creado y funcionaría correctamente, ya que Javascript primero busca las declaraciones de funciones y luego procesa el resto del código.

Tiene una sintaxis muy sencilla
```javascript
function nombreDeLaFuncion() {
  // Statment
}
nombreDeLaFuncion()
```
Veamos como funcionaria:

```javascript
function saludar() {
  return "Hola"
}
saludar() // 'Hola'
typeof saludar // 'function'. El operador 'typeof' nos estaria indicando que saludar es una función.
```
>***Por EXPRESIÓN:*** Es otra forma de crear una variable, que consiste en crear una funcion dentro de una variable para ejecutarlas posteriormente, fundamentalmente hacen lo mismo con algunas diferencias. 

Estas pueden ser de anonimas (sin nombre) o se le puede proporcionar un nombre. Al proporcionarle un nombre permite que la función se refiera a sí misma y también facilita la identificación de la función en el seguimiento de la pila de un depurador. 

Veamos algunos ejemplos
```javascript
// función anonima (sin nombre)
const suma = function(a,b) {return a + b}
console.log(suma(15,10))
```
```javascript
// función con nombre
const suma = function sumar(a,b) {return a + b}
console.log(suma(15,10))   // 25
console.log(sumar(15,10))  //sumar is not defined
```
Con este nuevo enfoque, estamos creando una función en el interior de una variable, lo que nos permitirá posteriormente ejecutar la variable (como si fuera una función). Observa que el nombre de la función (en este ejemplo: sumar) pasa a ser inútil, ya que si intentamos ejecutar sumar() nos dirá que no esta definida y si ejecutamos suma() funciona correctamente.

Las expresiones function son convenientes cuando se pasa una función como argumento a otra función. El siguiente ejemplo muestra una función map que debería recibir una función como primer argumento y un arreglo como segundo argumento.
```javascript
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
```










```javascript
while(condicion){
    statement
}
```
```javascript
while(condicion){
    statement
}
```













<br/>
<br/>
<br/>
<h1 align="center"></h1>
<h3 align="left">Gracias!!!!  :rose:   XOXOXO
<h1 align="center"></h1>