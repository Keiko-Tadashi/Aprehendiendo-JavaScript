<h1 align="center"></h1>
<h1 align="center">-->  OPERADORES  <--- </h1>

Vamos a ver los operadores más comunes, aunque luego esta en ustedes el poder de poder aprehender acerca de los demás operadores de JavaScript. En este capitulo vamos a ver

* Operadores de asignación
* Operadores de comparación
* Operadores aritméticos
* Operadores lógicos
* operadores de cadena
* Operador condicional (ternario)
* Operador coma
* Operador unarios
* Operadores relacionales

## Operadores de asignación

Basicamente este operador asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. Hay dos tipos de operadores de asignación.

* OPERADORES DE ASIGNACIÓN SIMPLE: Es el signo ( = ), este le asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de `x` a `y`.

* OPERADORES COMPUESTOS: Son el resultado de combinar expresiones matemáticas con un operador de asignación simple, para ello lo podemos ver en la sigiente tabla

#### OPERADORES DE ASIGNACIÓN COMPUESTO

| **_Nombre_**                                        | **_Operador Abreviado_** | **_Significado_** |
|-----------------------------------------------------|:------------------------:|-------------------|
| Asignación                                          |           x = y          |       x = y       |
| Asignación de adición                               |          x += y          |     x = x + y     |
| Asignación de resta                                 |          x -= y          |     x = x - y     |
| Asignación de multiplicación                        |          x *= y          |     x = x * y     |
| Asignación de división                              |          x /= y          |     x = x / y     |
| Asignación de residuo                               |          x %= y          |     x = x % y     |
| Asignación de exponenciación                        |          x **= y         |     x = x ** Y    |
| Asignación de desplazamiento a la izquierda         |          x <<= y         |     x = x << y    |
| Asignación de desplazamiento a la derecha           |          x >>= y         |     x = x >> y    |
| Asignación de desplazamiento a la derecha sin signo |         x >>>= y         |    x = x >>> y    |
| Asignación AND bit a bit                            |          x &= y          |     x = x & y     |
| Asignación XOR bit a bit                            |          x ^= y          |     x = x ^ y     |
| Asignación OR bit a bit                             |          x \|= y         |     x = x \| y    |
| Asignación AND lógico                               |          x &&= y         |    x && (x = y)   |
| Asignación OR lógico                                |         x \|\|= y        |   x \|\| (x = y)  |
| Asignación de anulación lógica                      |          x ??= y         |    x ?? (x = y)   |

### Valor de retorno

La mayoria de las expresiones tienen un valor de retorno. Por ejemplo:  `x` = `y`, esto significa que en `x` = `y`
el valor de retorno va a ser el de `y`, por que el valor de retorno coincide con la expresión a la derecha del signo.

```javascript
var x = 10 
var y = 5
retorno = x = y
console.log(retorno)   // 5
```
En el caso de asignaciones lógicas, (`x` &&= `y`), (`x` || = `y`) y (`x` ??= `y`), el valor de retorno es el de la operación lógica sin la asignación, entonces `x` && `y`, `x` || `y` e  `x` ?? `y`, respectivamente.

Teniendo en cuenta que los valores de retorno siempre se basan en los valores de los operandos antes de la operación.




>Tengamos en cuanta que tanto `var`, `let` y `const` tienen diferentes ambitos de aplicación.

<br/>
<br/>
<br/>
<p align="center">
<h3 align="left">Gracias!!!!  :rose:   XOXOXO
