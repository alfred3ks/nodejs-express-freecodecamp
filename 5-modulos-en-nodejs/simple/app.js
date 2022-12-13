// importamos el modulo saludo.js: Asiganandolo a una ctte.
const saludo = require('./saludo');
console.log(saludo); // { saludar: [Function: saludar] } un objeto

// Podemos usar la funcion:
console.log(saludo.saludar('Laika'));

