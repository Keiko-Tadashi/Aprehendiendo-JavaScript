# _CICLOS EN JAVASCRIPT_

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

# _While_

_Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia_
_La sintaxis seria:_

    while (condicion)
          sentencia

- _condicion_
  _Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta sentencia. Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while._
- _sentencia_
  _Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia `block (){ ... }` para agrupar esas sentencias._
  Ejemplo:

#

    n = 0;
    x = 0;
    while (n < 3) {
      n ++;
      x += n;
    }

_Cada interación, el bucle incrementa n y la añade a x. Por lo tanto, x y n toman los siguientes valores_

- Después del primer pase: n = 1 y x = 1
- Después del segundo pase: n = 2 y x = 3
- Después del tercer pase: n = 3 y x = 6
- Después de completar el tercer pase, la condición n < 3 no será verdadera más tiempo, por lo que el bucle terminará.

# _Do While_

_La sentencia `do while` (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez._
_La sintaxis seria:_

    do
        sentencia
    while (condición);

- _sentencia_
  _Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utilice la sentencia `block { ... }()` para agrupar aquellas sentencias._
- _condición_
  _Una expresión se evalúa después de cada pase del bucle. Si condición se evalúa como verdadera, la sentencia se re-ejecuta. Cuando condición se evalúa como falsa, el control pasa a la siguiente sentencia hacer mientras._

#

    do {
        i += 1;
        document.write(i);
    } while (i < 5);

_En el siguiente ejemplo, el bucle hacer mientras itera al menos una vez y se reitera hasta que i ya no sea menor que 5._

# _FOR_

_Un ciclo `for` se repite hasta que una condición especificada se evalúe como false . El bucle for de JavaScript es similar al bucle for de Java y C._
_Por lo que la sintaxis seria:_

    for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

- _expresion-inicial_
  _Una expresión (incluyendo las expresiones de asignación) o la declaración de variable. Típicamente se utiliza para usarse como variable contador. Esta expresión puede opcionalmente declarar nuevas variables con la palabra clave var._ _Estas variables no son locales del bucle, es decir, están en el mismo alcance en el que está el bucle for. El resultado de esta expresión es descartado._
- _condicion_
  _Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como verdadera, se ejecuta sentencia. Esta comprobación condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera expresión que sigue al constructor de for._
- _expresion-final_
  _Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la condicion. Generalmente se usa para actualizar o incrementar la variable contador._
- _sentencia_
  _Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro del bucle, utilice una sentencia `block ([],[],[]){ ... }` para agrupar aquellas sentecias._
  _Ejemplo:_

#

    for (var i = 0; i < 9; i++) {
        n += i;
    mifuncion(n);
    }

_La siguiente sentencia `for` comienza mediante la declaración de la variable `i` y se inicializa a `0`. Comprueba que `i` es menor que nueve, realiza las dos sentencias con éxito e incrementa `i` en 1 después de cada pase del bucle._

###### _Construido por_ Kapelusz :call_me_hand:

 `Gracias !!!` :rose:
