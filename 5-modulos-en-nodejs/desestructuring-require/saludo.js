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


// Podemos exportar varios elementos que queramos: Recuerda que es un objeto:
module.exports = {
  saludar: saludar,
  suma: suma,
  resta: resta,
  producto: producto
}
