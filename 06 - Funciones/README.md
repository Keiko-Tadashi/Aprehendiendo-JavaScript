# _FUNCIONES EN JAVASCRIPT_

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

## _Funciones_

_Las funciones son uno de los fragmentos de código mas usados en Javascript. Una función es un conjunto reutilizable de declaraciones para realizar una tarea especifica._
_A las funciones se le pueden pasar uno o más valores por parámetros y utilizar estos para devolver un valor al finalizar la ejecución de la misma. Para utilizar una función,debemos primero definirla. La forma más común de definir una función es usando la palabra reservada `function` seguido de un único nombre de función, y de los parámetros deseados de la función, entre paréntesis y separados por comas, y un bloque de instrucciones dentro de llaves._
_Sintaxis:_

    function nombre_funcion(parametros){
         instrucciones;
    }

_Ejemplo:_

    function sumar(){

       var num1 = 5;
       var num2 = 8;
       suma = num1 + num2;
       alert("La suma es: "+suma);
    }

_En JavaScript tenemos dos maneras de definir una función las cuales pueden ser mediante: declaración de función o una expresión de función._

###### :heavy_check_mark: Declaración de una Función

_Se le asigna un nombre a la función. Dicha función se debe cargar en el ámbito de la aplicación antes de la ejecución del código._
_Ejemplo:_

    function Saludar(){
        alert("Hola a todos");
    }

###### :heavy_check_mark: Expresión de Función

_Aquí se crea una función anónima y se le asigna a una variable. Esta función no se encuentra lista hasta que esa línea en particular sea evaluada durante la ejecución del código._
_Ejemplo:_

    var Cantar = function(){
        alert("Yo canto muy bien");
    }

###### :heavy_check_mark: ¿Como llamamos a una función?_

_Para invocar una función desde cualquier parte de nuestro programa, solo es necesario escribir el nombre de la función creada seguido de paréntesis( en caso de tener parámetros indicarlos dentro, separados por comas)._
_Ejemplo:_

    Sumar();
    Saludar();
    Cantar();

## Funciones con parámetros

_Hasta ahora sólo hemos visto como se crean las funciones sin parámetros. A continuación los parámetros pueden ser capturados dentro de la función y hacer cualquier tipo de manipulación sobre estas, ya que una función puede tener muchos parámetros separados por comas._
_Ejemplo:_

    function Saludar(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        console.log("Hola mi nombre es: "+ this.nombre + " y tengo: " + this.edad + " años." );
    }
    Saludar(“Juniors”, 24);

## Funciones con la instrucción return

_Una función JavaScript puede tener la instrucción return. Esta es requerida si queremos que la función dada nos retorne un valor. La instrucción return debe ser la última línea en una función._
_Ejemplo:_

    function Valores(a,b,c){
        return a+b+c;
    }
    var suma = Valores(3,4,5);      // esta función nos retorna el valor de 12


###### _by_ Kapelusz !!! 
###### e-mail: ddaniel_calderon@hotmail.com 

 `Gracias !!!` :rose: