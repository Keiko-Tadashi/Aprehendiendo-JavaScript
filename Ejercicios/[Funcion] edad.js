function tieneEdad(edad){
    let age = edad > 18 ? '"Aceptado, puedes ingresar"' : '"Disculpa, no puedes ingresar"'
    return age
}
console.log(tieneEdad(19))