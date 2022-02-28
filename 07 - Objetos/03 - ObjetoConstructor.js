/**************** OBJETO LITERAL ****************/
// Esta es la forma en la que se crea un objeto literal.

const persona = {
  nombre : 'Daniel',
  apellido : 'Calderon',
  edad : 42,
  email : 'danielcalderon@gmail.com',
  user : 'kapelusz',
  password : '159753',
  hobby : ['correr', 'cocinar','leer', 'manejar'],
  saludar : function () {
      return 'Hola, Soy ' + persona.nombre + ' y tengo ' + persona.edad + ' años'
  },
  estado : { 
      fisico: { peso: '70', estatura: '1,69' }, 
      salud : { presion: '70/120', pulsaciones: '170' }
  }
}
console.log(persona)


/**************** OBJETO CONSTRUCTOR ****************/
// Esta es la forma en la que se crea un objeto método constructor. En este caso una variable 'const', al estar en un objeto sus propiedad si se pueden reescribir.





