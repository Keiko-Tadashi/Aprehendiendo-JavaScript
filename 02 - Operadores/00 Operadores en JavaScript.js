
var b = 10
var a = 10

// OPERADORES ARITMÉTICOS 

console.log ( a + b );   // SUMA
console.log ( a - b );   // RESTA
console.log ( a * b );   // MULTIPLICA
console.log ( a / b );   // DIVIDE
console.log ( a % b );   // DEVUELVE EL RESIDUO DE LA DIVICIÓN
console.log ( a ** 2 );  // DEVUELVE UN NUMERO ELEVADO AL EXPONENTE
console.log ( ++a );   // DEVUELVE INCREMENTO
console.log ( --b );   // DEVUELVE DECREMENTO

// OPERADORES DE COMPARACIÓN

console.log ( a == b );  // SON IGUALES
console.log ( a != b );  // NO SON IGUALES
console.log ( a === b ); // SON ESTRICTAMENTE IGUALES
console.log ( a !== b ); // SON ESTRICTAMENTE DESIGUALES
console.log ( a > b );   // ES MAYOR
console.log ( a < b );   // ES MENOR
console.log ( a >= b );  // ES MAYOR O IGUAL
console.log ( a <= b );  // ES MENOR O IGUAL

// OPERADORES LÓGICOS
let V = true;
let F = false;
console.log ( V && V );     // AND
console.log ( V && F );     // AND
console.log ( F && V );     // AND
console.log ( F && F );     // AND

console.log ( V || F );     // OR
console.log ( F || V );     // OR
console.log ( F || F );     // OR
console.log ( V || V );     // OR

console.log ( ! F );        // NOT
console.log ( ! V );        // NOT

//*▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
/*
PRECEDENCIA DE OPERADORES: La precedencia de operadores determina el orden en el cual los operadores son 
evaluados. Los operadores con mayor precedencia son evaluados primero. El operador de multiplicación ("*") 
tiene una precedencia mas alta que el operador de suma ("+") y por eso sera evaluado primero.*/
/*
La precedencia de un operador indica qué tan estrechamente se unen dos expresiones juntas. Por ejemplo, en la expresión 1 + 5 * 3 , la respuesta es 16 y no 18 porque el operador de multiplicación ("*") tiene una
precedencia mayor que el operador de adición ("+").
( VER TABLA DE PRECEDENCIA )
*/

let c = 3, d = 2;
let f = c + d;

// **  INCREMENTO 
// PRE-INCREMENTO ( El operador ++ antes de la variable)
f = ++c;
console.log (c);
console.log (f);
/* 
Lo que no indica el pre-incremento es que primero se incrementa el valor y despues se hace la 
asignacion
*/

// POST-INCREMENTO (el operador ++ después de la variable)
f = d++;          
console.log ( d );
console.log ( f );
/* 
Lo que no indica el post-incremento es que primero se asigna el valor de la variable y posteriormente
se incrementa
*/

// **  DECREMENTO 
// PRE-DECREMENTO ( El operador -- antes de la variable)
f = --c;      
console.log(c);
console.log(f);
/*

*/

// POST-DECREMENTO ( El operador -- después de la variable)
f = d--;
console.log(d);
console.log(f);

//*▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
/*
PRECEDENCIA DE OPERADORES
*/

function precedencia(a, b) {
    let a = 3;
    let b = 2;
    console.log(b--);
    console.log(a++);
}
