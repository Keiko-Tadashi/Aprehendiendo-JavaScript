# _SENTENCIA DE CONTROL EN JAVA_
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
#
# _IF ELSE_

_Es conjunto de instrucciones que realiza una tarea o calcula un valor. La forma más común de_
_definir una función es usando la palabra reservada “function” seguido de un único nombre de función, y de_
_los parámetros deseados (puede ser sin parámetros), y un bloque de instrucciones dentro de llaves._

_La instrucción if … else permite controlar qué procesos tienen lugar, típicamente en función del valor de una o varias variables, de un_ _valor de cálculo o booleano, o de las decisiones del usuario. La sintaxis a emplear es:_

    if (condición) {
        instrucciones
    } else {
        instrucciones
    }

_La cláusula `else` (no obligatoria) sirve para indicar instrucciones a realizar en caso de no cumplirse la condición. JavaScript admite escribir un else y dejarlo vacío: `else { }`. El else vacío se interpreta como que contemplamos el caso pero no hacemos nada en respuesta a él. Un else vacío no tiene ningún efecto y en principio carece de utilidad, no obstante a veces es usado para remarcar que no se ejecuta ninguna acción cuando se alcanza esa situación._

_Vamos a ver un ejemplo de como trabaja la estructura if. Veremos como seria el caso de comprobar si un numero es entero. Obviamente que en la parte practica lo vamos a explicar mejor en la parte practia, aqui es solo para mostrar como se veria el código:_

    function esEntero(numero){
        if (numero % 1 == 0) {
        alert ("Es un numero entero");
        } else {
            alert ("Es un numero decimal");
        }
    }



#
# _SWITCH_

_La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen._ 

_La instrucción `switch` es una forma de expresión de un anidamiento múltiple de instrucciones `if ... else`. Su uso no puede considerarse, por tanto, estrictamente necesario, puesto que siempre podrá ser sustituida por el uso de if. No obstante, a veces resulta útil al introducir eficiencia y mayor claridad en el código. La sintaxis a emplear seria la siguiente:_

    switch (expresión) {
        case valor1:
            (Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1)
            [break;]
        case valor2:
            (Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2)
            [break;]
        case valorN:
            (Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN)
            [break;]
        default:
            (Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión)
            [break;]
    }
* _Es importante tener en cuenta que todo lo que se puede hacer con `if` se puede obtener con `switch`. Siendo a criterio del programador que usar en cada caso para tener un codigo mas compacto y legible._

