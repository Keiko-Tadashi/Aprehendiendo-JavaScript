```javascript
const  Kapelu = {
    name :  'Daniel Calderon',
    henry:  'FT-24b'
    code: ['Javascript', 'HTML', 'CSS', 'NodeJS'],
    tools: ['Visual Studio Code','GitBash', 'GitHub'],
    github:  'https://github.com/Kapelu'
}
```
<h1  align="center">ESTRUCTURAS DE CONTROL </h1>

Las estructuras de control en javascript y en la mayoría de los lenguajes de programación se utilizan en los programas para definir el flujo de instrucciones que se van ejecutando. Si no fuera por las estructuras de control lo único que podríamos hacer es ejecutar una instrucción tras otra y no tendriamos forma de aplicar unas funciones u otras en según las condiciones que nosotros queramos establecer.

Un _ejemplo práctico muy típico_ para comprender la importancia de las estructuras de control es el siguiente: Cuando nosotros pedimos a un usuario que introduzca su usaurio y contraseña pueden ocurrir dos cosas. En primer lugar que los datos sean correctos y por consiguiente debemos dejarle logear o por el contrario que la pareja usuario/clave sea errónea y por tanto debemos denegarle la entrada y volver a pedir los credenciales. Como véis; en base a si los credenciales son correctos o no debemos realizar unas acciones u otras. Esto es justamente lo que nos permiten las estructuras de control.

## *Tipos de estructuras de control en javascript*

En javascript disponemos de 3 tipos de estructuras de control:

*  **Estructuras condicionales**. Este tipo de estructura de control tiene como objetivo realizar una bifurcación del flujo de instrucciones. Cuando el programa llega a un punto, nosotros establecemos una condición en en función de la misma el programa seguirá ejecutando unas instrucciones u otras; tal y como hemos visto en el anterior ejemplo cuando veíamos un caso de control de acceso sencillo.
  
* **Estructuras de repetición**. Este tipo de estructuras de control también conocidas como **bucles** se utilizan para realizar de forma repetida varias acciones. Con un bucle podemos por ejemplo mostrar en pantalla todos los números del 1 al 100 sin tener que escribir 100 veces la instrucción alert. 
Otro ejemplo muy fácil de comprender relaccionado con la seguridad informática se da cuando en formularios html de control de acceso se piden una y otra vez los credenciales de acceso hasta que el usuario proporciona una pareja usuario/clave válida y accede al sistema. Tu como programador no sabes cúantas veces vas a tener que pedir la clave al usuario, puede que la introduzca bien a la primera, a la segunda, a la tercer o quizá nunca. Para estos casos los bucles son la solución. Con un bucle puedes pedir de forma reiterada los credenciales de acceso hasta que o bien proporciona unos válidos y accede o bien llega a un número máximo de intentos y se le deniega incluso el derecho a seguir probando contraseñas por un tiempo.

* **Estructuras de control de errores**. Estas estructuras son clave en el mundo de la seguridad informática. Son aquellas que permiten controlar los errores que el usuario final comete de forma fortuita o intencionada y poder seguir trabando de forma normal. Los errores más típicos a tener en cuenta se producen cuando pedimos al usuario que introduzca un número pero el usuario nos introduce una letra. Esto producirá un error en nuestro programá y hará que se comporte de forma inadecuada si no hemos controlado mediante una estructura de control de errores este caso.
<h1  align="center"></h1>
<h1  align="center">ESTRUCTURAS DE CONTROL CONDICIONALES</h1>

### *CONDICIONAL if...else*

Las estructuras condicionales en javascript nos sirven para tomar decisiones en función de una condición que nosotros establecemos. Su sintáxis es así:
```javascript
if (condicion1) {
  statement1
} else if (condicion2) {
  statement2
} else if (condicion3) {
  statement3
} else if (condicion4) {
  statement4
} else {
  statement default
}
```
«If» es una sentencia que significa “si condicional”. La idea es que si sucede tal cosa, (si la condición es verdadera) se debe ejecutar la sentencia que le sigue, es decir la misma sólo se ejecutaría en caso de que la expresión de tipo Boolean sea verdadera. Si es falsa, el interprete pasará a la parte «else» que signfica «sino»; y ejecutará las instrucciones que existen dicha parte. La parte «else» no es obligatoria, pero aquí la muestro para que quede en claro que podemos ejecutar mas  instrucciones en caso de que se cumpla la condición u otras en caso contrario. Veamos un ejemplo práctico en el de acuerdo a la linea de juego del jugador va a determinar la posición en la cancha:
```javascript
let jugador = 18
if (jugador === 1) {
  console.log(`El ${jugador} es arquero`)
} else if (jugador === 2) {
  console.log(`El ${jugador} es defensa`)
} else if (jugador ===3) {
  console.log(`El ${jugador} es centrocampista`)
} else if (jugador === 4){
    console.log(`El ${jugador} es delantero`)
} else {
  console.log(`El ${jugador} es suplente`)
}
```

### *CONDICIONAL switch*

Dicha estructura la utilizamos casi siempre que queremos realizar un menú con sus diferentes opciones. Es una especie de optimización de la repetición de los bucles else if que vimos antes y que funciona mucho mejor y sin ser redundante. Lo utilizamos para aquellas veces que queremos hacer comprobaciones múltiples de una misma variables, es decir, para elegir una característica sobre una variable que la excluye de poseer otra. Su sintaxis es la siguiente:
```javascript
switch(opcion)
{
	case opcion1:
		instrucciones
		break
	case opcion2:
		instrucciones
		break
	case opcion3:
		instrucciones
		break
	case opcion4:
		instrucciones
		break
	default:
		instrucciones
		break
}
```
Al bucle anterior se le pasa una variable, en este caso letra. Comprueba dicha variable y dependiendo de cuál sea entra y realiza unas u otras instrucciones y después se sale del bucle. Para entrar a cada una de las opciones disponibles de nuestra variable letra se usa la palabra reservada case. La salida del bucle se realiza mediante la palabra reservada break, que se trata de una instrucción de salto, la cual interrumpe o modifica el flujo del programa, forzando en este caso la salida del bucle antes de tiempo. Sin embargo no es obligatorio introducir esta palabra.
 

De esta manera no cortaríamos el flujo del programa y comprobaría el resto de opciones (que sabemos que no serán ciertas) por lo que será menos óptimo. Es muy importante tener en cuenta que las comprobaciones se hacen en orden, por lo tanto si sabemos qué opción o opciones se van a usar más es mejor que las coloquemos en primer lugar.
El valor default que vemos en el código es el que se utiliza si el valor introducido no coincide con ningún case. En ese caso salta al default automáticamente. Sin embargo tampoco es obligatorio incluir default en nuestro código. Veamos un ejemplo, en el que consultamos el precio de las siguientes frutas.
```javascript
let fruta = prompt('Que fruta desea consultar?')
switch (fruta) {
  case 'naranjas':
    console.log('Las naranjas cuestan $ 30,00 el Kg.');
    break;
  case 'manzanas':
    console.log('Las manzanas cuestan $ 28,00 el Kg');
    break;
  case 'bananas':
    console.log('Los plátanos cuestan $ 80,00 el Kg.');
    break;
  case 'cerezas':
    console.log('Las cerezas cuestan $ 95,00 el Kg.');
    break;
  default:
   console.log(`Lo sentimos, no tenemos ${fruta}.`);
}
console.log("¿Hay algo más que quieras?");
```
<h1  align="center"></h1>
<h1  align="center">ESTRUCTURAS DE CONTROL DE REPETICION</h1>

### *CONDICIONAL while*

Esta estructura es la que se conoce como mientras (que es la traducción literal del inglés) en algoritmia. Y como dice su propio significado es un bucle que ejecuta las instrucciones mientras la condición o condiciones sigan siendo ciertas, mientras siga devolviendo “true” como valor. Su sintaxis es muy simple
```javascript
while(condición){
    instrucciones
}
```
Veamos un sencillo ejemplo donde ingresaremos un valor que se repetira hasta cumplir la condicion que deseamos.
```javascript
let suma = 0 
while (suma < 1000){ 
   	suma += parseInt(Math.random() * 100) 
   	document.write (suma + "<br>") 
}
```
Esto es tan sencillo como ir sumando uno cada vez a nuestra variable numero hasta que llegue a 10.

*¿Qué pasa si antes de entrar al bucle no se cumple la condición?*
Para ello veremos a continuacion un tipo especial de while llamado *do while*

### *CONDICIONAL do while*

 Dicha estructura se utiliza si queremos que el programa entre al bucle una vez al menos. La traducción literal es haz ... mientras de ahí que al menos una vez haga, entre al bucle.

*¿Por qué siempre entra al menos una vez en nuestro bucle?*

Porque como veremos a continuación la condición para ejecutar el bucle se realiza después de hacerlo. Puede sonar complicado pero veremos que es muy simple:

La sintaxis es la siguiente:
```javascript
do { 
   	//sentencias del bucle 
} while (condición)

```

















<br/>

<br/>

<h1  align="center"></h1>

<h3  align="left">Gracias!!!! :rose: XOXOXO

<h1  align="center"></h1>