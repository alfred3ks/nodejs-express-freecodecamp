// definimos nuestra funcion:
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function producto(a, b) {
  return a * b;
}

// Debemos exportar la funcion para poderla usar en otro archivo: Debemos usar el objeto module.exports
console.log(module.exports); // {} Un objeto lo vemos por consola.
// asi exportamos el modulo:
// module.exports.saludar = saludar;
// module.exports.suma = suma;
// module.exports.resta = resta;
// module.exports.producto = producto;

// Exportamos un solo elemento
// console.log(module.exports); // { saludar: [Function: saludar] }

// Podemos exportar varios elementos que queramos: Recuerda que es un objeto:
module.exports = {
  saludar: saludar,
  suma: suma,
  resta: resta,
  producto: producto
}
