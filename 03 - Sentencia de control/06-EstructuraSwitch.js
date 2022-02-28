
                                                     // ** SE LEE DE LA SIGUIENTE MANERA !!!
let numero = 4;                                      // leer y declarar que numero es igual a 4

let numeroTexto = 'Valor desconocido';               // leer y declarar que numeroTexto es igual a 'Valor desconocido'

switch( numero ){                                    // switch ( expresion o numero a comparar por cada caso) empieza switch
    case 1:                                          //     caso es igual a 1:     
        numeroTexto = 'Número uno';                  //          numeroTexto es igual a 'Número uno'
        break;                                       //          terminar caso
    case 2:                                          //     caso es igual a 2:     
        numeroTexto = 'Número dos';                  //          numeroTexto es igual a 'Número dos'
        break;                                       //          terminar caso
    case 3:                                          //     caso es igual a 3: 
        numeroTexto = 'Número tres';                 //          numeroTexto es igual a 'Número tres'
        break;                                       //          terminar caso
    case 4:                                          //     caso es igual a 4: 
        numeroTexto = 'Número cuatro';               //          numeroTexto es igual a 'Número cuatro'
        break;                                       //          terminar caso
    default:                                         //     defecto:
        numeroTexto = 'Caso no encontrado';          //          numeroTexto es igual a 'Caso no encontrado'  
}                                                    // termina switch
console.log(numeroTexto);                            // mostrar en consola(numeroTexto)
