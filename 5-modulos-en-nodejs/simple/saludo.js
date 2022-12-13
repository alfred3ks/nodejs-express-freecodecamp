// definimos nuestra funcion:
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Debemos exportar la funcion para poderla usar en otro archivo: Debemos usar el objeto module.exports
console.log(module.exports); // {} Un objeto lo vemos por consola.
// asi exportamos el modulo:
module.exports.saludar = saludar;

// Exportamos un objeto con la funcion:
console.log(module.exports); // { saludar: [Function: saludar] }

